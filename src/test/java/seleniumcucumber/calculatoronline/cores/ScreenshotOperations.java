package seleniumcucumber.calculatoronline.cores;

import com.asprise.ocr.Ocr;
import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.FileUtils;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import seleniumcucumber.calculatoronline.pages.AbstractPage;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ScreenshotOperations extends AbstractPage {
    /**
     * Method to take screen shot and save in ./ScreenShots folder
     */
    public void takeScreenShot(WebElement webElement) throws IOException {
        //File scrFile = ((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.FILE);
        File scrFile = webElement.getScreenshotAs(OutputType.FILE);
        DateFormat dateFormat = new SimpleDateFormat("MMMM-dd-yyyy-z-HHmmss", Locale.ENGLISH);
        Calendar cal = Calendar.getInstance();
        //System.out.println(dateFormat.format(cal.getTime()));
        FileUtils.copyFile(scrFile, new File("Screenshots/" + dateFormat.format(cal.getTime()) + ".png"));
    }

    public void takeScreenShotResult(WebElement webElement) throws IOException {
        //File scrFile = ((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.FILE);
        File scrFile = webElement.getScreenshotAs(OutputType.FILE);
        BufferedImage bufferedImage = null;
        bufferedImage = ImageIO.read(scrFile);
        BufferedImage desiredSize;
        File pathToImg;
        assert bufferedImage != null;
        int height = bufferedImage.getHeight();
        int width = bufferedImage.getWidth();
        desiredSize = bufferedImage.getSubimage(26, 30, 330, 40);
        ImageIO.write(desiredSize, "png", scrFile);
        FileUtils.copyFile(scrFile, new File("Screenshots/evident.png"));
    }

    /**
     * Method to process OCR by TesseractOCR
     */
    public String tesseractOCR() throws TesseractException {
        ITesseract tesseract = new Tesseract();
        // the path of your tess data folder
        // inside the extracted file
        tesseract.setDatapath("tess4j/src/main/resources/tessdata");

        String text = tesseract.doOCR(new File("Screenshots/evident.png"));

        System.out.print(text);
        return text;
    }

    /**
     * Method to process OCR by AspriseOCR
     */
    public String OCRParse() throws IOException {
        Ocr.setUp();
        Ocr ocr = new Ocr(); // create a new OCR engine
        ocr.startEngine("eng", Ocr.SPEED_FAST); // English
        // path of the image
        String s = ocr.recognize(new File[]{new File("Screenshots/evident.png")},
                Ocr.RECOGNIZE_TYPE_ALL, Ocr.OUTPUT_FORMAT_PLAINTEXT);
        System.out.println(s);
        ocr.stopEngine();
        return s;
    }

    /**
     * Method to process OCR by api.ocr.space online
     */
    public String onlineOCR() throws IOException {

        // Free 500 requests per day
        // apiKey: a1d815e04988957
        // TO-DO: dynamic function for OCR

        System.out.println("********** Image Base64 Value");
        System.out.println(encodeFileToBase64());
        System.out.println("********** END ***********");

        String base64Image = "data:image/png;base64," + encodeFileToBase64();
        String response_value = "";

        HttpPost post = new HttpPost("https://api.ocr.space/parse/image");
        // add request parameter, form parameters
        List<NameValuePair> urlParameters = new ArrayList<>();
        urlParameters.add(new BasicNameValuePair("apikey", "a1d815e04988957"));
        urlParameters.add(new BasicNameValuePair("language", "eng"));
        urlParameters.add(new BasicNameValuePair("isOverlayRequired", "false"));
        urlParameters.add(new BasicNameValuePair("base64Image", base64Image));

        post.setEntity(new UrlEncodedFormEntity(urlParameters));

        try (CloseableHttpClient httpClient = HttpClients.createDefault();
             CloseableHttpResponse response = httpClient.execute(post)) {


            String res = EntityUtils.toString(response.getEntity());
            System.out.println("******  API Response **** ");
            System.out.println(res);
            System.out.println("******** End *******");

            Pattern p = Pattern.compile("((?<=\"ParsedText\":\").*?(?=\\\\r\\\\n\"))");
            Matcher m = p.matcher(res);

            if (m.find()) {
                response_value = m.group(1);
            }

        }
        System.out.println(response_value);
        return response_value;
    }

    public String encodeFileToBase64() throws IOException {

        File f = new File("Screenshots/evident.png");
        FileInputStream fileInputStreamReader = new FileInputStream(f);
        byte[] bytes = new byte[(int) f.length()];
        fileInputStreamReader.read(bytes);

        return new String(Base64.encodeBase64(bytes), StandardCharsets.UTF_8);

    }

}
