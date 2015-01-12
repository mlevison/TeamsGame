Feature: Teams Degrade more slowly with only engineering practices
 
 Scenario Outline: slower degradation
 Given My Teams IntialCapacity is 10
 When <Improvement> 
 Then After <Round> rounds the teams capacity to <Capacity>
 Examples: Eng practice only first round
 | Round | Capacity | Improvement |
 | 1	 | 10		| Engineering |
 | 2	 | 8		| Engineering |
 | 3	 | 6		| Engineering |
 | 4	 | 4 		| Engineering |
 | 5	 | 2 		| Engineering |
 | 6	 | 0 		| Nothing	  |