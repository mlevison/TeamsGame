Feature: Teams Degrade if nothing done
 
 Scenario Outline: Teams Capacity Degrades Steadily over rounds
 Given My Teams IntialCapacity is 10
 When <Improvement>
 Then After <Round> rounds the teams capacity to <Capacity>
 Examples: Nothing Done to Improve
 | Round | Capacity | Improvement |
 | 1	 | 10		| Nothing	  |
 | 2	 | 6		| Nothing	  |
 | 3	 | 2		| Nothing	  |
 | 4	 | 0 		| Nothing	  |