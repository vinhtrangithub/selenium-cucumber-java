package seleniumcucumber.calculatoronline.steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.sourceforge.tess4j.TesseractException;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import seleniumcucumber.calculatoronline.cores.Constants;
import seleniumcucumber.calculatoronline.pages.AbstractPage;
import seleniumcucumber.calculatoronline.pages.CalculatorPage;

import java.io.IOException;
import java.util.List;

public class CalculatorSteps extends AbstractPage {

    @When("I enter following values and press Equal button")
    public void enterTheNumberButtonsAndEnter(DataTable table) throws InterruptedException, IOException {
        CalculatorPage calPage = new CalculatorPage();

        List<List<String>> data = table.raw();

        new WebDriverWait(getDriver(), 10).until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(By.id("fullframe")));
        WebElement canvas = new WebDriverWait(getDriver(), 10).until(ExpectedConditions.elementToBeClickable(By.id("canvas")));

        for (int i = 0; i< data.size(); i++){
            calPage.clickOnNumberButton(canvas, data.get(i).get(1).trim());
        }

        //click on Equal button
        calPage.clickOnNumberButton(canvas,"equal");

        //take screenshot
        screenshotObj.takeScreenShot(canvas);
        screenshotObj.takeScreenShotResult(canvas);
    }

    @Then("^I should be able to see (-?\\d+)$")
    public void SeeTheExpectedResult(String expected) throws InterruptedException, TesseractException, IOException{
        //String result1 = screenshotObj.OCRParse();
        String output = screenshotObj.tesseractOCR();
        String result = output.replaceAll("[\n\r]", "").trim();
        System.out.println("Text get from image: " + result);
        Thread.sleep(Constants.timeout1s);
        Assert.assertEquals(expected, result);
    }
/*
    @Then("I should be able to see")
    public void iShouldBeAbleToSee(DataTable table) throws InterruptedException, TesseractException {
        List<List<String>> data = table.raw();
        String output = screenshotObj.tesseractOCR();
                String result = output.replaceAll("[\n\r]", "").trim();;
        Thread.sleep(Constants.timeout1s);
        Assert.assertEquals(data.get(0).get(1).trim(), result);
    }*/
}
