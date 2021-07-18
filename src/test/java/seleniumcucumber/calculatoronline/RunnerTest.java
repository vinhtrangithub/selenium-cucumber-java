package seleniumcucumber.calculatoronline;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "pretty",
                "json:target/reports/cucumber-json-reports/json-report.json",
                "html:target/reports/cucumber-html-reports/html-report.html"
        },
        glue = {"seleniumcucumber.calculatoronline.steps"
        },
        features = {"classpath:features/calculator.feature"}
)
public class RunnerTest {
}
