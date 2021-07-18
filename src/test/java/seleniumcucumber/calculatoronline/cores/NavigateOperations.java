package seleniumcucumber.calculatoronline.cores;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import seleniumcucumber.calculatoronline.cores.bases.IBaseTest;
import seleniumcucumber.calculatoronline.pages.AbstractPage;

public class NavigateOperations extends AbstractPage implements IBaseTest {

    /**
     * Method to open link
     *
     * @param url : String : URL for navigation
     */
    public void navigateTo(String url) {
        getDriver().get(url);
    }

    /**
     * method to switch to default content
     */
    public void switchToDefaultContent() {
        getDriver().switchTo().defaultContent();
    }
}
