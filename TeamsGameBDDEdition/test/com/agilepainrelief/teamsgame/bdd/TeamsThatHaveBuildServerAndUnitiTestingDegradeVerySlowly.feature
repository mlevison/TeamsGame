Feature: Teams Degrade more slowly with only engineering practices
 
 Scenario Outline: slower degradation
 Given My Teams IntialCapacity is 10
 When BuildServerAdded and UnitTesting Improved
 Then After <Round> rounds the teams capacity to <Capacity>
 Examples: Eng practice only first round
 | Round | Capacity | 
 | 1	 | 10		| 
 | 2	 | 8		| 
 | 3	 | 6		| 
 | 4	 | 4 		| 
 | 5	 | 2 		| 
 | 6	 | 0 		| 
 
 Scenario: UnitTesting Without No BuildServerAdded Dissallowed
  Given My Teams IntialCapacity is 10
  When UnitTesting Improved
  But No BuildServerAdded Change
  Then Disallowed