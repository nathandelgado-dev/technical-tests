# Robot on Mars
NASA has hired us and as a company we will carry out our first robot to Mars.
Our robot moves 1 meter in each direction with the command Left "L" Right "R" Up "U" Down "D".

NASA prepares a list of directions for the robot's movement from the charging base in the example marked as point 0.

However, they are concerned that in case of an emergency the robot will be able to return to the charging base in time and they want us to evaluate the movement plans in a simulator, and tell them the maximum number of instructions that we should send to the robot when it is in its furthest point so that it can return to base.

Calculate what is the maximum number of instructions that should be sent to the robot so that at some point in the journey it returns to the base.

## Function Description
The function will have a list of plans to execute, evaluate each one and return a list with the maximum number of instructions.

### Input format for the funtion
An array is entered that contains a string in each position with the instructions for the robot, example:
```
['RUULLLDDDR', 'ULUUD']
``` 
In the example received 2 instructions. The output will contain an array with 2 numbers for this example.

## Example Case
### Input
`['RUULLLDDDR']`
### Output
`[4]`
### Explanation
**Route:**
RUULLLDDDR
the robot will move as seen in the table.

||||||
|---|---|---|---|---|
|6|5|4|3||
|7|||2||
|8||0|1||
|9|10||||
||||||

Following this route, point 6 would be the farthest point from the base, and it would need 4 instructions to return to the base, RDRD or RRDD or DDRR or DRDR.

