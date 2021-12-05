Feature: Account

  Scenario: Create an internal account
    Given an internal account
    When internal account is linked to the account
    Then the account is created