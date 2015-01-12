Feature: Teams Degrade more slowly with only engineering practices
 
 Scenario Outline: slower degradation
 Given My Teams IntialCapacity is 10
 When <Improvement> 
 Then After <Round> rounds the teams capacity to <Capacity>
 Examples: Eng practice only first round
 | Round | Capacity | Improvement |
 | 1	 | 10		| Engineering |
 | 2	 | 8		| Nothing	  |
 | 3	 | 6		| Nothing	  |
 | 4	 | 4 		| Nothing	  |
 | 5	 | 2 		| Nothing	  |
 | 6	 | 0 		| Nothing	  |