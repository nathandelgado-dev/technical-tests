# Debt
A new application of loans without management fees or interest, wants to test a new payment method in loans, it consists in that the first day of the loan the person must pay only 1 peso, and each day that passes they must pay the double what you paid the day before, and so on. On the last day you will only have to pay what is missing.

Those interested in the application want to make a small simulator that allows knowing the number of days required to pay a debt in full with this system, given the amount to be lent initially.

Given a number N, you must return an integer indicating the number of days required to solve it.

## Funtion description
The function receives an array of debts, and should return an array representing the number of days needed to pay each debt. If not receives an array and this is empty you should return false.

## Example Case
### Input
`[15, 16, 45]`
### Output
`[4, 5, 6]`
### Explanation
If we lend a person 15, they will require 4 days to pay the entire debt.
||||
|---|---|---|
|Day 1|1|Total 1|
|Day 2|1 + 2|Total 3|
|Day 3|1 + 2 + 4|Total 7|
|Day 4|1 + 2 + 4 + 8|Total 15|

So for each loan.
