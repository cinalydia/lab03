/*eslink-env browser*/
//Global variables
var score1;
var score2;
var score3;
var total = 0;
var average;

//prompt user for the test scores
score1 = window.prompt("What is the first score?");
total += parseInt(score1, 10);

score2 = window.prompt("What is the second score?");
total += parseInt(score2, 10);

score3 = window.prompt("What is the third score?");
total += parseInt(score3, 10);

//Calculate the average
average = total / 3;

//Display the result
document.write("The first score: " + score1 + "<br>");
document.write("The first score: " + score2 + "<br>");
document.write("The first score: " + score3 + "<br>");
document.write("The average of the 3 scores: " + parseInt(average));