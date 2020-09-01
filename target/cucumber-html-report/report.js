$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/bhupe/WembleyHigh/src/test/Resources/offset.feature");
formatter.feature({
  "line": 1,
  "name": "School offset report",
  "description": "",
  "id": "school-offset-report",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8819533000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "offset reports",
  "description": "",
  "id": "school-offset-report;offset-reports",
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
  "name": "User navigate to Results and find offset reports",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User can access any offset report",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_on_school_homepage()"
});
formatter.result({
  "duration": 102577500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefOffset.user_navigate_to_Results_and_find_offset_reports()"
});
formatter.result({
  "duration": 1232429800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefOffset.user_can_access_any_offset_report()"
});
formatter.result({
  "duration": 156597700,
  "status": "passed"
});
});