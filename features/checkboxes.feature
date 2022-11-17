Feature: checkboxes selecting


Scenario Outline: Test checkboxes page

Given I am on the "checkboxes" page
When I click on the <checkboxes>
Then I see selected <checkboxes> sign

Examples:
     | checkboxes |           
     | 1        |           
     | 2        |           