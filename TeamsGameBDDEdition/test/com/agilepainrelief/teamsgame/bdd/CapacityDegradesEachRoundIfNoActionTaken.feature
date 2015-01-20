Feature: Teams Degrade if nothing done

Scenario: Capacity degrades each round if no action is taken
  When the team only focuses on delivering stories
  Then capacity decreases by 4 each round    # The support code is responsible for looping & checking
