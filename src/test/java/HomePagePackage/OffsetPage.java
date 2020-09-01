package HomePagePackage;

import CommonPackage.DriverFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;

public class OffsetPage  extends DriverFactory {

    public void offset(){
        Actions actions=new Actions(driver);
        actions.moveToElement(driver.findElement(By.linkText("Results"))).build().perform();
        actions.moveToElement(driver.findElement(By.linkText("Ofsted Report"))).click().build().perform();
    }
    public void offsetresult(){
        driver.findElement(By.linkText("Please click here for our latest section 5 Ofsted report")).click();
    }
}
