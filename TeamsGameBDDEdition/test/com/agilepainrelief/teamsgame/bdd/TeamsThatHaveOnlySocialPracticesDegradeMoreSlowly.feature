Feature: Teams Degrade more slowly with only social practices
 
 Scenario Outline: slower degradation
 Given My Teams IntialCapacity is 10
 When Social Improved
 Then After <Round> rounds the teams capacity to <Capacity>
 Examples: Social Practice Only First round
 | Round | Capacity | 
 | 1	 | 10		| 
 | 2	 | 8		| 
 | 3	 | 6		| 
 | 4	 | 4 		| 
 | 5	 | 2 		| 
 | 6	 | 0 		|