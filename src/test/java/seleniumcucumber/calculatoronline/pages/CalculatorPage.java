package seleniumcucumber.calculatoronline.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import seleniumcucumber.calculatoronline.cores.Constants;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class CalculatorPage extends AbstractPage {



    public void clickOnNumberButton(WebElement canvas, String number) throws InterruptedException, IOException {
        int xConst = (190 / 5);
        int yConst = (245 / 6);
        int xNumber, yNumber;
        Properties obj = new Properties();
        FileInputStream objFile = new FileInputStream(new File("./src/test/resources/app.properties"));
        obj.load(objFile);

        if (!number.toLowerCase().equals("n") && !number.isEmpty()) {
            if (number.toLowerCase().equals("y")) {
                xNumber = Integer.parseInt(obj.getProperty("_.x"));
                yNumber = Integer.parseInt(obj.getProperty("_.y"));
            } else {
                xNumber = Integer.parseInt(obj.getProperty(number + ".x"));
                yNumber = Integer.parseInt(obj.getProperty(number + ".y"));
            }
            new Actions(getDriver()).moveToElement(canvas, 0, 0).moveByOffset(xConst * xNumber, yConst * yNumber).click().build().perform();
            Thread.sleep(Constants.timeout1s);
        }
    }
}
