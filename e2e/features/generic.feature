Feature: Create a new warrior user and test questionnaire

  Scenario: Automation Warrior User should be created successfully
    Given Warrior as Automation user
    When User create warrior
    And Start journey
    Then User should be created

  Scenario: As a Automation Warrior User Complete news questionnaire
    Given Create Automation Warrior
    And Start journey
    When User goto news questionnaire
    And Confirm start from the beginning in case of wrong answer
    And Provide correct answers for all Questions
    Then User should redirect on leaderboard page

  Scenario: As a Automation Warrior User Complete Take the bus questionnaire
    Given Create Automation Warrior
    And Start journey
    When User goto the bus questionnaire
    And Confirm start from the beginning in case of wrong answer at any of bus questions
    And Provide correct answers for all take the bus questions
    Then User should redirect on leaderboard page

  Scenario: As a Automation Warrior User Complete the restaurant questionnaire
    Given Create Automation Warrior
    And Start journey
    When User goto restaurant questionnaire
    And Confirm start from the beginning in case of wrong answer at any of restaurant questions
    And Provide correct answers for all take the restaurant questions
    Then User should redirect on leaderboard page

  Scenario: As a Automation Warrior User Complete the Go to the office questionnaire
    Given Create Automation Warrior
    And Start journey
    When User go to the office questionnaire
    And Confirm start from the beginning in case of wrong answer at any of go to the office questions
    And Provide correct answers for all take the go to the office questions
    Then User should redirect on leaderboard page