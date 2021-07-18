package seleniumcucumber.calculatoronline.steps;

import cucumber.api.java.en.Given;
import seleniumcucumber.calculatoronline.pages.AbstractPage;

public class CommonSteps extends AbstractPage {
    // Step to navigate to specified URL
    @Given("^I navigate to \"([^\"]*)\"$")
    public void navigate_to(String link) {
        navigationObj.navigateTo(link);
    }
}
