Feature: Teams Degrade if nothing done

Scenario: Teams Capacity Degrades Round Over Round
Given My Teams IntialCapacity is 10
 When I don't improve Engineering Practice or Social Practice
 Then After 2 rounds the teams capacity to 6