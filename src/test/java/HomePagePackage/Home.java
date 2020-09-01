package HomePagePackage;

import CommonPackage.DriverFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

public class Home extends DriverFactory {

    public void baseurl(){
        driver.getCurrentUrl();
        //driver.findElement(By.id("_cb_accept")).click();
    }
public void learning(){
    Actions act=new Actions(driver);
    act.moveToElement(driver.findElement(By.linkText("Home Learning"))).build().perform();
    act.moveToElement(driver.findElement(By.linkText("Science"))).click().perform();
}
public void week(){
    JavascriptExecutor js=(JavascriptExecutor)driver;
    js.executeScript("window.scrollBy(0,500)");
    driver.findElement(By.linkText("13th July 2020")).click();
    driver.findElement(By.linkText("Year 8")).click();
    driver.findElement(By.linkText("Lesson 2 - Weight and Mass")).click();
}
}
