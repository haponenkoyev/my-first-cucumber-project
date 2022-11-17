Feature: hovers  pictures page

Scenario Outline: hovers page

Given I am on the "hovers" page
When I hover on <picture>
Then I should see <picture> figcaption with content

Examples:
     | picture              | message      |
     | 1                    | name: user1  |
     | 2                    | name: user2  |
     | 3                    | name: user3  |
