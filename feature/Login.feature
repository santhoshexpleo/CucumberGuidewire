Feature: Login Action

@Login
Scenario: Successfull login with valid credentials
    When User is on Login page
    And  User enters the username
    And User enters password
    And User clicks on Login button
    Then user verify title
     