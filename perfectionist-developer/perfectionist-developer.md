# Perfectionist Developer
Ricardo is a member of our team, and although he is usually very productive, he suffers from an impulse that leads him to refine and rewrite a part of the work he does every day.

Every day he is able to write **F** number of new functions, but his impulse takes him the same day to delete **R** number of functions, and so every day, incredibly when he finishes his work he does not refactor any function, but sends the pull request a review.

Everyone loves Ricardo's work, but the team's architect is worried about the deadline for the stories he assigns to Ricardo, and he asks you to help him with a program that determines if Ricardo will be able to meet the assignment.

For this, the architect will give you a number **D** corresponding to the number of days of the delivery deadline, **T** the number of total functions that the client expects Ricardo to perform, **F** the number of new functions that Ricardo will write per day, **R** the number of functions that Ricardo will delete each day at the end of his work.

You calculates whether or not Ricardo can fulfill the assigned tasks response with `true` or `false`.

## Funtion description
Complete the function, which will receive an array of cases to be evaluated by the architect.
each case will be composed as follows:

- `case[i][0]` **D** Number of days for the deadline.
- `case[i][1]` **T** Number of functions expected by the client at the end of the deadline.
- `case[i][2]` **F** Number of new functions Ricardo can write in one day.
- `case[i][3]` **R** Number of functions Ricardo will delete at the end of the day.

`[2, 40, 20, 5]` 
In this sample input D = 2, T = 40, F = 20, R = 5.

## Example Case
### Input
`[5, 110, 30, 10]`
### Output
`[true]`
### Explanation
The client expects Ricardo to write 110 functions in 5 days, Ricardo will be able to write 30 functions, but at the end of the day he will delete 10 of the written functions.

Every day Ricardo will write 25 functions, but he will delete 5, at the end of day 4 Ricardo will have 80 functions in code, since on day 5 he could write 30 new functions, he would finish his work and send the pull request without deleting any function, Ricardo would meet the deadline .

|Day|Total Functions|
|---|---|
|Day 1|20|
|Day 2|40|
|Day 3|80|
|Day 4|60|
|Day 5|110|