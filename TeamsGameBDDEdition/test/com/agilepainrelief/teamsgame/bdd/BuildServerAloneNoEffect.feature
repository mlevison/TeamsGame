Feature: Teams Degrade if BuildServerAlone Implemented
 
 Scenario Outline: Teams Capacity Degrades Steadily over rounds
 Given My Teams IntialCapacity is 10
 When BuildServerAdded Improved
 Then After <Round> rounds the teams capacity to <Capacity>
 Examples: BuildServerAlone has no meaningful effect
 | Round | Capacity | 
 | 1	 | 10		| 
 | 2	 | 6		| 
 | 3	 | 2		| 
 | 4	 | 0 		| 