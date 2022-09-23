Feature: Search keyword on search bar
    As a valid user
    I want to search the data based on my keyword on the application 

    Scenario: Search Valid Data
        Given I open Zero Bank home page
        When I push enter the keyword
        Then I should see a list that match with my keywords
