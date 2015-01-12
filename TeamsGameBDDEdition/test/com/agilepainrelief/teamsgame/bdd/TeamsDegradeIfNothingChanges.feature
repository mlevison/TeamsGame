Feature: Teams Degrade if nothing done
 
 Scenario Outline: Teams Capacity Degrades Steadily over rounds
 Given My Teams IntialCapacity is 10
 When Nothing
 Then After <Round> rounds the teams capacity to <Capacity>
 Examples: Nothing Done to Improve
 | Round | Capacity | 
 | 1	 | 10		| 
 | 2	 | 6		| 
 | 3	 | 2		| 
 | 4	 | 0 		| 