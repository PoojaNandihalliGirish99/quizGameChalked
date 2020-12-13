var readlineSync = require('readline-sync');
var chalk = require('chalk');
const log = console.log;
var userName = readlineSync.question("Hey, Your Name? ")
console.log(chalk.keyword('orange')('Welcome to this fun Game - Some Random Questions are in the line for you %s :\n'), userName);

var score = 0;

var questions = [{
  question:"How many notes are there in a musical scale ? ",
  answer:"7"
},
{
  question:"Which popular video game franchise has released games with the subtitles World At War and Black Ops ? ",
  answer:"call of duty"
},
{
  question:"What’s longer - a nautical mile / a mile ?(choose and type exactly) ",
  answer:"a nautical mile"
},
{
  question:"What number is a baker’s dozen ? ",
  answer:"13"
},
{
  question:"How many players are in a football team ? ",
  answer:"11"
}];


function playThis(question , realAnswer) {
  if(attemptedAnswer.toLowerCase() === realAnswer.toLowerCase()){
    console.log('Correct!..Go on.');
    score++;
  }else{
    console.log('Oops..the right answer is '+ chalk.cyanBright(realAnswer));
  }
  console.log(chalk.bgBlackBright('Your Score = '+ score+'\n'));
 
}

for(var i=0;i<questions.length;i++)
{
  var attemptedAnswer = readlineSync.question(chalk.cyanBright(questions[i].question));
  playThis(questions[i].question, questions[i].answer)
}
if(score == 5){
  console.log(chalk.bgYellowBright('*****************'));
  console.log(chalk.bgYellow('*CONGRATULATIONS*'));
  console.log(chalk.bgYellowBright('*****************'));
  console.log('\nYou scored the highest! Keep learning and exploring :) Challenge others! Have Fun.');

  console.log(chalk.yellow('Send the screenshot and get your name on leaderboard.\n'));

}else if(score == 4){
  console.log(chalk.bgMagentaBright('*****************'));
  console.log(chalk.bgMagenta('*** WELL DONE ***'));
  console.log(chalk.bgMagentaBright('*****************'));
  console.log('\nYou Rock....let\'s see how others score, Take a screenshot and share this challenge.');
  console.log('Send the screenshot and get your name on leaderboard.\n');
}
else{
  console.log(chalk.bgCyanBright('*****************'));
  console.log(chalk.bgCyan('*** NICE  TRY ***'));
  console.log(chalk.bgCyanBright('*****************'));
  console.log('\nYou tried your best! ....let\'s see how others score, share this challenge.');
  console.log('Send the screenshot and get your name on leaderboard.\n');
}
console.log('---------------------');
console.log('LEADERBOARD');
console.log('---------------------');
var leadScores = [{
  name:'PoojaNG',
  leadscore:10
},
{
  name:'PratikaNG',
  leadscore:9
}];
for(var i=0;i<leadScores.length;i++){
  console.log(leadScores[i].name + ' = = = = = ' + leadScores[i].leadscore);
}