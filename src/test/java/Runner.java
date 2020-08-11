import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\bhupe\\WembleyHigh\\src\\test\\Resources\\school.feature",format = {"pretty","html:test-output_1","json:target/cucumber-reports/CucumberTestReport.json"},
        plugin = {"html:target/cucumber-html-report",
                "json:target/cucumber-json-report.json",
                "junit:target/cucumber-xml-report.xml",
                "pretty:target/cucumber-pretty-report.txt"})

public class Runner {
}
