Feature: Test online calculator

  Scenario Outline: Test subtraction, division and CE functionalities
    Given I navigate to "https://www.online-calculator.com/full-screen-calculator/"
    When I enter following values and press Equal button
      | value1    | <value1>    |
      | negative1 | <negative1> |
      | operator  | <operator>  |
      | value2    | <value2>    |
      | negative2 | <negative2> |
    Then I should be able to see <expected>

    Examples:
      #Positive cases
      | value1 | negative1 | value2 | negative2 | operator | expected    |
      | 6      | N         | 1      | N         | +        | 7           |
      | 9      | N         | 7      | N         | -        | 2           |
      | 3      | N         | 4      | N         | *        | 12          |
      | 8      | N         | 2      | N         | /        | 4           |
      | 5      | N         | 5      | N         | /        | 1           |
      | 3      | N         | 2      | N         | /        | 1.5         |
      #Negative cases
      | 6      | Y         | 1      | N         | +        | -5          |
      | 9      | N         | 7      | Y         | -        | 16          |
      | 8      | Y         | 4      | N         | *        | -32         |
      | 3      | Y         | 2      | N         | /        | -1.5        |
      | 3      | N         | 0      | N         | /        | Error       |
      | 0      | Y         | 2      | N         | /        | 0           |
      | 9      | N         | 8      | N         | /        | 1.125       |
      | 8      | Y         | 9      | N         | /        | -0.88888889 |
      #Boundary cases
      | 0      | Y         | 0      | N         | +        | 0           |
      | 9      | N         | 9      | Y         | -        | 18          |
      | 9      | N         | 9      | N         | +        | 18          |
      | 0      | N         | 9      | N         | /        | 0           |
      | 0      | N         | 0      | N         | /        | Error       |
      | 0      | Y         | 0      | N         | *        | 0           |
      | 9      | N         | 9      | N         | /        | 1           |
      | 9      | Y         | 9      | N         | *        | -81         |
