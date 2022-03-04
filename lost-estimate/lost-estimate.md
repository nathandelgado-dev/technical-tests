# Lost Estimate
Diego is a project leader, who very judiciously kept track of the estimates of the tasks assigned to the different teams and people in Excel, but unfortunately the file was corrupted and could not be rescued.

However, Diego had a summary that he delivered to his boss every week, where he told him by team, the number of tasks that said team had, the arithmetic average of the task estimates defined in hours, and the duration of the task with the lowest value. estimated.

Diego needs to know for a presentation today with the client, what is the maximum duration that one of the tasks can have? And he has asked you for help to solve the problem.

## Funtion description
The function receives the list of equipment with 3 values **N,R,T**, and should return an array that represents the number of maximum hours for a task.

- `team[j][0]` **N** The number of tasks assigned in team j.
- `team[j][1]` **T** The average number of hours of tasks in team j.
- `team[j][2]` **R** The duration in hours of the smallest task on team j.

`[3, 2, 1]` 
In this sample Input N = 3, T = 2, R = 1.

## Example Case
### Input
`[[2, 4, 2], [3, 16, 8]]`
### Output
`[6, 32]`
### Explanation
If the team 1 has 2 tasks assigned, the average to do these tasks is 4 hours and the smallest task has an estimated duration of 2 hours, the largest task should be 6 hours.

`AVG(6,2) = 4`

If the team 2 has 3 tasks assigned, the average to do these tasks is 16 hours and the smallest task has an estimated duration of 8 hours, the largest task will never exceed 32 hours.
If we make task 1 the smallest of 8 hours, task 2 we make it the largest possible, which is 32 hours, and task 3 of 8 more hours, the average will be the stipulated 16 hours.

`AVG(32, 8, 8) = 16`
