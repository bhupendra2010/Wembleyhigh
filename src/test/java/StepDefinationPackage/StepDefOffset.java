package StepDefinationPackage;

import HomePagePackage.OffsetPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefOffset {
    OffsetPage offsetPage=new OffsetPage();
    @When("^User navigate to Results and find offset reports$")
    public void user_navigate_to_Results_and_find_offset_reports() throws Throwable {
    offsetPage.offset();
    }

    @Then("^User can access any offset report$")
    public void user_can_access_any_offset_report() throws Throwable {
    offsetPage.offsetresult();
    }

}
