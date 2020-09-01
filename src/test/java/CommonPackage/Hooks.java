package CommonPackage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;

public class Hooks {
    DriverFactory driverFactory=new DriverFactory();

    @Before
    public void open(){
        driverFactory.openbrowser();
    }
    //@After
    public void close() throws IOException {
        TakesScreenshot screenshot = ((TakesScreenshot) driverFactory);
        File sourcefile = screenshot.getScreenshotAs(OutputType.FILE);
        File destinationfile = new File("C:\\Users\\bhupe\\OneDrive\\Desktop\\Screenshots");
        FileUtils.copyFile(sourcefile,destinationfile);
        //driverFactory.closebrowser();
    }
}
