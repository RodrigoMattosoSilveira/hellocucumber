Feature: Is it Friday yet?
   Everybody wants to know when it's Friday

   Scenario Outline: Today is or is not Friday
      Given today is now "<day>"
      When I ask whether now it's Friday yet
      Then I should be told now is "<answer>"

   Examples:
      | day            | answer |
      | Friday         | TGIF   |
      | Sunday         | Nope   |
      | anything else! | Nope   |
