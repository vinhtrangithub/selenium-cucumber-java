package seleniumcucumber.calculatoronline.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import seleniumcucumber.calculatoronline.cores.DriverManager;
import seleniumcucumber.calculatoronline.cores.bases.IBaseTest;

public class AbstractPage implements IBaseTest {
    private final DriverManager driverManager = new DriverManager();

    protected AbstractPage() {
        PageFactory.initElements(driverManager.getDriver(), this);
    }

    public WebDriver getDriver() {
        return driverManager.getDriver();
    }

    public void wait(String time) throws InterruptedException {
        Thread.sleep(Integer.parseInt(time));
    }
}
