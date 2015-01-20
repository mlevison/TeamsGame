$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/agilepainrelief/teamsgame/bdd/CapacityDegradesEachRoundIfNoActionTaken.feature");
formatter.feature({
  "id": "teams-degrade-if-nothing-done",
  "description": "",
  "name": "Teams Degrade if nothing done",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "teams-degrade-if-nothing-done;capacity-degrades-each-round-if-no-action-is-taken",
  "description": "",
  "name": "Capacity degrades each round if no action is taken",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "the team only focuses on delivering stories",
  "keyword": "When ",
  "line": 4
});
formatter.step({
  "name": "capacity decreases by 4 each round    # The support code is responsible for looping \u0026 checking",
  "keyword": "Then ",
  "line": 5
});
formatter.match({
  "location": "CapacityDegradesIfNothingDone.the_team_only_focuses_on_delivering_stories()"
});
formatter.result({
  "duration": 151225000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 22
    }
  ],
  "location": "CapacityDegradesIfNothingDone.capacity_decreases_by_each_round_The_support_code_is_responsible_for_looping_checking(int)"
});
formatter.result({
  "duration": 10469000,
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
  "duration": 221000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nothing",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 724000,
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
  "duration": 182000,
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
  "duration": 318000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nothing",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 59000,
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
  "duration": 96000,
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
  "duration": 257000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nothing",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 87000,
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
  "duration": 143000,
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
  "duration": 259000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nothing",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 88000,
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
  "duration": 159000,
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
  "duration": 386000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BuildServerAdded",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 105000,
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
  "duration": 180000,
  "status": "passed"
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
  "name": "BuildServerAdded Improved",
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
  "duration": 136000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BuildServerAdded",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 57000,
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
  "duration": 141000,
  "status": "passed"
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
  "name": "BuildServerAdded Improved",
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
  "duration": 171000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BuildServerAdded",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 61000,
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
  "duration": 106000,
  "status": "passed"
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
  "name": "BuildServerAdded Improved",
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
  "duration": 107000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BuildServerAdded",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 45000,
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
  "duration": 95000,
  "status": "passed"
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
  "name": "BuildServerAdded Improved",
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
  "duration": 98000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BuildServerAdded",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 67000,
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
  "duration": 159000,
  "status": "passed"
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
  "name": "BuildServerAdded Improved",
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
  "duration": 89000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BuildServerAdded",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 47000,
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
  "duration": 86000,
  "status": "passed"
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
  "duration": 186000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 82000,
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
  "duration": 101000,
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
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 56000,
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
  "duration": 110000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 39000,
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
  "duration": 85000,
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
  "duration": 104000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 37000,
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
  "duration": 78000,
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
  "duration": 98000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 37000,
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
  "duration": 78000,
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
  "duration": 1254000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Social",
      "offset": 0
    }
  ],
  "location": "TeamDegradesStepsdef.ActionTaken(String)"
});
formatter.result({
  "duration": 622000,
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
  "duration": 1544000,
  "status": "passed"
});
formatter.uri("com/agilepainrelief/teamsgame/bdd/TeamsThatPracticeOnlyEngineeringPracticesDegradeMoreSlowly.feature");
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
  "duration": 195000,
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
  "duration": 128000,
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
  "duration": 104000,
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
  "duration": 91000,
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
  "duration": 93000,
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
  "duration": 132000,
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
});