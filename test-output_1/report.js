$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/bhupe/WembleyHigh/src/test/Resources/school.feature");
formatter.feature({
  "line": 1,
  "name": "User can find school homework",
  "description": "",
  "id": "user-can-find-school-homework",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10927106200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "user-can-find-school-homework;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on school homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigate to school learning",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should able to select required date homework",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_on_school_homepage()"
});
formatter.result({
  "duration": 173370400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_navigate_to_school_learning()"
});
formatter.result({
  "duration": 2071192500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_able_to_select_required_date_homework()"
});
formatter.result({
  "duration": 2869901200,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"#year_8\" data-type\u003d\"anchor\"\u003e...\u003c/a\u003e is not clickable at point (615, 539). Other element would receive the click: \u003cdiv id\u003d\"cb_cookie_policy_popup\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d84.0.4147.135)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-98TS530D\u0027, ip: \u0027192.168.0.29\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\bhupe\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52312}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 342d5a3179909d45e1a2b9305f4ac2d6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat HomePagePackage.Home.week(Home.java:24)\r\n\tat StepDefinationPackage.StepDef.user_should_able_to_select_required_date_homework(StepDef.java:24)\r\n\tat ✽.Then User should able to select required date homework(C:/Users/bhupe/WembleyHigh/src/test/Resources/school.feature:6)\r\n",
  "status": "failed"
});
});