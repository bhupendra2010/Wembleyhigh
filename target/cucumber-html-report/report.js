$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/bhupe/WembleyHigh/src/test/Resources/school.feature");
formatter.feature({
  "line": 1,
  "name": "User can find school homework",
  "description": "",
  "id": "user-can-find-school-homework",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9720903600,
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
  "duration": 244736300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_navigate_to_school_learning()"
});
formatter.result({
  "duration": 1979489400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_able_to_select_required_date_homework()"
});
formatter.result({
  "duration": 2118059900,
  "status": "passed"
});
});