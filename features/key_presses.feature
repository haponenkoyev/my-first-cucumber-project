Feature: key presses


Scenario Outline: As a user, I can press key and see a message about it

Given I am on the "key_presses" page
When I press a <key>
Then I should see a flash message saying "<message>"

Examples:
     | key               | message |
     | h                 |         |
     | backspace         |         |
