$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/agilepainrelief/teamsgame/bdd/TeamsDegradeIfNothingChanges.feature");
formatter.feature({
  "id": "teams-degrade-if-nothing-done",
  "description": "",
  "name": "Teams Degrade if nothing done",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "teams-degrade-if-nothing-done;teams-capacity-degrades-steadily-over-rounds;nothing-done-to-improve;2",
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
  "duration": 169708000,
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
  "duration": 1665000,
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
  "duration": 8018000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-if-nothing-done;teams-capacity-degrades-steadily-over-rounds;nothing-done-to-improve;3",
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
  "duration": 98000,
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
  "duration": 48000,
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
  "duration": 113000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-if-nothing-done;teams-capacity-degrades-steadily-over-rounds;nothing-done-to-improve;4",
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
  "duration": 128000,
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
  "duration": 42000,
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
  "duration": 100000,
  "status": "passed"
});
formatter.scenario({
  "id": "teams-degrade-if-nothing-done;teams-capacity-degrades-steadily-over-rounds;nothing-done-to-improve;5",
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
  "duration": 188000,
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
  "duration": 79000,
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
  "duration": 155000,
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
  "duration": 190000,
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
  "duration": 80000,
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
  "duration": 113000,
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
  "duration": 146000,
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
  "duration": 42000,
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
  "duration": 85000,
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
  "duration": 131000,
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
      "val": "6",
      "offset": 37
    }
  ],
  "location": "TeamDegradesStepsdef.After_rounds_the_teams_capacity_to(int,int)"
});
formatter.result({
  "duration": 84000,
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
  "duration": 94000,
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
  "duration": 41000,
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
  "duration": 87000,
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
  "duration": 121000,
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
  "duration": 48000,
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
  "duration": 89000,
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
  "duration": 100000,
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
  "duration": 40000,
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
  "duration": 79000,
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
  "duration": 121000,
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
  "duration": 55000,
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
  "duration": 134000,
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
  "duration": 47000,
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
  "duration": 88000,
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
  "duration": 119000,
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
  "duration": 141000,
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
  "duration": 108000,
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
  "duration": 60000,
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
  "duration": 128000,
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
  "duration": 133000,
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
  "duration": 43000,
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
  "duration": 81000,
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
  "duration": 1219000,
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
  "duration": 857000,
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
  "duration": 836000,
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
  "duration": 194000,
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
  "duration": 130000,
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
  "duration": 96000,
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
  "duration": 166000,
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
  "duration": 160000,
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