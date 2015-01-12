Feature: Teams Degrade more slowly with only social practices
 
 Scenario Outline: slower degradation
 Given My Teams IntialCapacity is 10
 When <Improvement> 
 Then After <Round> rounds the teams capacity to <Capacity>
 Examples: Eng practice only first round
 | Round | Capacity | Improvement |
 | 1	 | 10		| Social |
 | 2	 | 8		| Social |
 | 3	 | 6		| Social |
 | 4	 | 4 		| Social |
 | 5	 | 2 		| Social |
 | 6	 | 0 		| Nothing	  |