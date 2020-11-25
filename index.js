var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name? \n");
console.log ("\nWelcome "+ userName+ ", to the DO YOU KNOW ANKIT quiz!\n");
var score=0;

var highscores=[{
	name:"Arnie",
	score:"5"
},
{
	name:"Amy",
	score:"4"
}]

//play function

function play(question,answer){
	var userAnswer = readlineSync.question(question+"\n");

	if(userAnswer.toUpperCase() === answer.toUpperCase()){
		console.log("\nCorrect answer!");
		score++
	}
	else{
		console.log("\nWrong answer!");
	}

	console.log("Your current score is: " +score);
	console.log("------------------------\n");
}

//array to store questions and their answers.

var questions= [{
		question: "1. Where do I live?",
		answer: "Bangalore"
},
{
	question: "2. Where did I study engineering?",
	answer: "DSCE"
},
{
	question: "3. What kind of music do I like",
	answer: "Rock"
},
{
	question: "4. What is my favourite sport?",
	answer: "F1"
},
{
	question: "5. My favourite F1 Team?",
	answer: "Ferrari"
}
];

for (var i =0; i<questions.length;i++){
	play(questions[i].question,questions[i].answer)
}

console.log("Thank you for playing the game! Your final score is: "+ score);

console.log("\nHighscores-")
for(i=0;i<highscores.length;i++){
	console.log("Name: "+ highscores[i].name);
	console.log("Score: "+ highscores[i].score);
}
