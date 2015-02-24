$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/agilepainrelief/teamsgame/bdd/BuildServerAloneNoEffect.feature");
formatter.feature({
  "id": "teams-degrade-if-buildserveralone-implemented",
  "description": "",
  "name": "Teams Degrade if BuildServerAlone Implemented",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "teams-degrade-if-buildserveralone-implemented;teams-capacity-degrades-steadily-over-rounds;buildserveralone-has-no-meaningful-effect;2",
  "description": "",
  "name": "Teams Capacity Degrades Steadily over rounds",
  "keyword": "Scenario Outline",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "BuildServerAdded Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 1 rounds the teams capacity to 10",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 171122000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BuildServerAdded",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 1043000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 6
    },
    {
      "val": "10",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 10043000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-if-buildserveralone-implemented;teams-capacity-degrades-steadily-over-rounds;buildserveralone-has-no-meaningful-effect;3",
  "description": "",
  "name": "Teams Capacity Degrades Steadily over rounds",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "BuildServerAdded Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 2 rounds the teams capacity to 6",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 180000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BuildServerAdded",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 84000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 6
    },
    {
      "val": "6",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 156000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-if-buildserveralone-implemented;teams-capacity-degrades-steadily-over-rounds;buildserveralone-has-no-meaningful-effect;4",
  "description": "",
  "name": "Teams Capacity Degrades Steadily over rounds",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "BuildServerAdded Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 3 rounds the teams capacity to 2",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 176000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BuildServerAdded",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 82000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 151000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-if-buildserveralone-implemented;teams-capacity-degrades-steadily-over-rounds;buildserveralone-has-no-meaningful-effect;5",
  "description": "",
  "name": "Teams Capacity Degrades Steadily over rounds",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "BuildServerAdded Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 4 rounds the teams capacity to 0",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 180000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BuildServerAdded",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 6
    },
    {
      "val": "0",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 143000,
  "status": "passed"
});
formatter.uri("com/agilepainrelief/teamsgame/bdd/TeamsDegradeIfNothingChanges.feature");
formatter.feature({
  "id": "teams-degrade-if-nothing-done",
  "description": "",
  "name": "Teams Degrade if nothing done",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "teams-degrade-if-nothing-done;teams-capacity-degrades-steadily-over-rounds;nothing-done-to-improve-#-using-a-scenario-outline-to-make-it-clear-that-failure-to-improve-doesn\u0027t-affect-the-teams-capacity-at-the-end-of-round1;2",
  "description": "",
  "name": "Teams Capacity Degrades Steadily over rounds",
  "keyword": "Scenario Outline",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Nothing Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 1 rounds the teams capacity to 10",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 301000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nothing",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 73000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 6
    },
    {
      "val": "10",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 149000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-if-nothing-done;teams-capacity-degrades-steadily-over-rounds;nothing-done-to-improve-#-using-a-scenario-outline-to-make-it-clear-that-failure-to-improve-doesn\u0027t-affect-the-teams-capacity-at-the-end-of-round1;3",
  "description": "",
  "name": "Teams Capacity Degrades Steadily over rounds",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Nothing Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 2 rounds the teams capacity to 6",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 137000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nothing",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 6
    },
    {
      "val": "6",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-if-nothing-done;teams-capacity-degrades-steadily-over-rounds;nothing-done-to-improve-#-using-a-scenario-outline-to-make-it-clear-that-failure-to-improve-doesn\u0027t-affect-the-teams-capacity-at-the-end-of-round1;4",
  "description": "",
  "name": "Teams Capacity Degrades Steadily over rounds",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Nothing Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 3 rounds the teams capacity to 2",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 121000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nothing",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-if-nothing-done;teams-capacity-degrades-steadily-over-rounds;nothing-done-to-improve-#-using-a-scenario-outline-to-make-it-clear-that-failure-to-improve-doesn\u0027t-affect-the-teams-capacity-at-the-end-of-round1;5",
  "description": "",
  "name": "Teams Capacity Degrades Steadily over rounds",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Nothing Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 4 rounds the teams capacity to 0",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 121000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nothing",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 6
    },
    {
      "val": "0",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 135000,
  "status": "passed"
});
formatter.uri("com/agilepainrelief/teamsgame/bdd/TeamsThatHaveBuildServerAndUnitiTestingDegradeVerySlowly.feature");
formatter.feature({
  "id": "teams-degrade-more-slowly-with-only-engineering-practices",
  "description": "",
  "name": "Teams Degrade more slowly with only engineering practices",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-engineering-practices;slower-degradation;eng-practice-only-first-round;2",
  "description": "",
  "name": "slower degradation",
  "keyword": "Scenario Outline",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "BuildServerAdded and UnitTesting Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 1 rounds the teams capacity to 10",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 133000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 6
    },
    {
      "val": "10",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-engineering-practices;slower-degradation;eng-practice-only-first-round;3",
  "description": "",
  "name": "slower degradation",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "BuildServerAdded and UnitTesting Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 2 rounds the teams capacity to 8",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 6
    },
    {
      "val": "8",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-engineering-practices;slower-degradation;eng-practice-only-first-round;4",
  "description": "",
  "name": "slower degradation",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "BuildServerAdded and UnitTesting Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 3 rounds the teams capacity to 6",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "6",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-engineering-practices;slower-degradation;eng-practice-only-first-round;5",
  "description": "",
  "name": "slower degradation",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "BuildServerAdded and UnitTesting Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 4 rounds the teams capacity to 4",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 137000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 6
    },
    {
      "val": "4",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-engineering-practices;slower-degradation;eng-practice-only-first-round;6",
  "description": "",
  "name": "slower degradation",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "BuildServerAdded and UnitTesting Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 5 rounds the teams capacity to 2",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 117000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-engineering-practices;slower-degradation;eng-practice-only-first-round;7",
  "description": "",
  "name": "slower degradation",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "BuildServerAdded and UnitTesting Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 6 rounds the teams capacity to 0",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 117000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 6
    },
    {
      "val": "0",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-engineering-practices;unittesting-without-no-buildserveradded-dissallowed",
  "description": "",
  "name": "UnitTesting Without No BuildServerAdded Dissallowed",
  "keyword": "Scenario",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 17
});
formatter.step({
  "name": "UnitTesting Improved",
  "keyword": "When ",
  "line": 18
});
formatter.step({
  "name": "No BuildServerAdded Change",
  "keyword": "But ",
  "line": 19
});
formatter.step({
  "name": "Disallowed",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UnitTesting",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BuildServerAdded",
      "offset": 3
    }
  ],
  "location": "TeamDegradesStepsdef.actionNotTaken(String)"
});
formatter.result({
  "duration": 1674000,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.agilepainrelief.teamsgame.bdd.TeamDegradesStepsdef.actionNotTaken(TeamDegradesStepsdef.java:37)\n\tat ✽.But No BuildServerAdded Change(com/agilepainrelief/teamsgame/bdd/TeamsThatHaveBuildServerAndUnitiTestingDegradeVerySlowly.feature:19)\n"
});
formatter.match({
  "location": "TeamDegradesStepsdef.actionDisallowed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("com/agilepainrelief/teamsgame/bdd/TeamsThatHaveOnlySocialPracticesDegradeMoreSlowly.feature");
formatter.feature({
  "id": "teams-degrade-more-slowly-with-only-social-practices",
  "description": "",
  "name": "Teams Degrade more slowly with only social practices",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-social-practices;slower-degradation;social-practice-only-first-round;2",
  "description": "",
  "name": "slower degradation",
  "keyword": "Scenario Outline",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Social Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 1 rounds the teams capacity to 10",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 1330000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 83000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 6
    },
    {
      "val": "10",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 136000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-social-practices;slower-degradation;social-practice-only-first-round;3",
  "description": "",
  "name": "slower degradation",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Social Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 2 rounds the teams capacity to 8",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 212000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 62000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 6
    },
    {
      "val": "8",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 123000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-social-practices;slower-degradation;social-practice-only-first-round;4",
  "description": "",
  "name": "slower degradation",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Social Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 3 rounds the teams capacity to 6",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 142000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "6",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-social-practices;slower-degradation;social-practice-only-first-round;5",
  "description": "",
  "name": "slower degradation",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Social Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 4 rounds the teams capacity to 4",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 170000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 6
    },
    {
      "val": "4",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 136000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-social-practices;slower-degradation;social-practice-only-first-round;6",
  "description": "",
  "name": "slower degradation",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Social Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 5 rounds the teams capacity to 2",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 147000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 63000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-more-slowly-with-only-social-practices;slower-degradation;social-practice-only-first-round;7",
  "description": "",
  "name": "slower degradation",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "My Teams IntialCapacity is 10",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "Social Improved",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "After 6 rounds the teams capacity to 0",
  "keyword": "Then ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "TeamDegradesStepsdef.My_Teams_IntialCapacity_is(int)"
});
formatter.result({
  "duration": 129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.actionTaken(String)"
});
formatter.result({
  "duration": 62000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 6
    },
    {
      "val": "0",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
});