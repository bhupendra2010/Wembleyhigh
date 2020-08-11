package StepDefinationPackage;

import HomePagePackage.Home;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef {
    Home home=new Home();

    @Given("^User is on school homepage$")
    public void user_is_on_school_homepage() throws Throwable {
        home.baseurl();
    }

    @When("^User navigate to school learning$")
    public void user_navigate_to_school_learning() throws Throwable {
        home.learning();

    }

    @Then("^User should able to select required date homework$")
    public void user_should_able_to_select_required_date_homework() throws Throwable {
        home.week();
    }
}
