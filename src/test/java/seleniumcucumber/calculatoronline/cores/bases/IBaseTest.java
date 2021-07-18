package seleniumcucumber.calculatoronline.cores.bases;

import seleniumcucumber.calculatoronline.cores.*;

public interface IBaseTest {
    NavigateOperations navigationObj = new NavigateOperations();
    ScreenshotOperations screenshotObj = new ScreenshotOperations();
}
