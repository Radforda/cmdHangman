var Word=require("./word");
var Letter=require("./letter.js");
var prompt = require('prompt');
var inquirer = require('inquirer');
var GuessArray=[];
var guessString=GuessArray.toString();
var currentWord="";
var correct=0;
var numberOfWords=1;
var incorrectGuessNumber=0;
var previousNumberCorrect=-1;







var promptUser=function(){
    console.log("Guess a letter!!")
    var schema = {
        properties: {
          Letter: {
            pattern: /^[a-zA-Z]+$/,
            message: 'Make sure you enter a only a letter!!',
            required: true
          }, 
        }
      };
     
      prompt.start();
    
      prompt.get(schema, function (err, result) {
          result.Letter=result.Letter.toLowerCase()
        
        for (var i=0; i< GuessArray.length; i++){
            if(result.Letter===GuessArray[i]){
                console.log("You already guessed that!! Try Again!")
                promptUser();
                return;
            }
        }
        if(result.Letter.length!==1){
            console.log("Make sure you only enter one letter at a time!! Try again!");
            promptUser();
            return;
        }
        console.log("\n---------------------------------------------------------");
        console.log("---------------------------------------------------------\n");
        GuessArray.push(result.Letter);
        console.log('Guesses so far: '+GuessArray+'\n');
        var word=new Word(currentWord);
        console.log(word.displayWord(currentWord,GuessArray).join(" ")+"\n");
        for(var j=0;j<GuessArray.length; j++){    
            for(var i=0; i<word.wordArray(currentWord).length; i++){
                if(GuessArray[j]===word.wordArray(currentWord)[i]){
                    correct++;   
                }
            }
        }
        console.log(previousNumberCorrect+" number correct "+correct);
        if (previousNumberCorrect===correct){
            incorrectGuessNumber++;
        };
        previousNumberCorrect=correct;
        correct=0;
        console.log("Word number: "+numberOfWords+"\n"+"Incorrect Guesses: "+incorrectGuessNumber+" \n");
        console.log("\n---------------------------------------------------------\n");
       
        checkWinLose();
        
      });
    
}

var checkWinLose=function(){
    if(incorrectGuessNumber===10){
        console.log("You lost..... try again!");
        return;
    }
    
    if(correct===currentWord.length){
        console.log("\n you win!!!");
        console.log("\n---------------------------------------------------------\n");
        numberOfWords++;
        if(numberOfWords<4){
            console.log("\n Next word!");
            startGame();
            return;
        }else{
            console.log("\n Congrats you Won the game! See you next time. :)")
        }
    }else{
   
    promptUser();
    };
}

function startGame(){
    
    
    GuessArray=[];
    incorrectGuessNumber=0;
    previousNumberCorrect=0;
    var wordArr=["abstract","arguments", "await","boolean","break", "byte",'case','catch','char','class','const','continue','debugger','default','delete','do','double','else','enum','eval','export','extends','false','final','finally','float','for','function','goto','if','implements','import','in','instanceof','int','interface','let','long','native','new','null','package','private','protected','public','return','short','static','super','switch','synchronized','this','throw','throws','transient','true','try','typeof','var','void','volatile','while','with','yield'];
    currentWord=wordArr[Math.floor(Math.random() * wordArr.length)]
    var word=new Word(currentWord);
    if(numberOfWords===1){
        console.log("\n Welcome to the Javascript word guess game. Your goal is to correctly guess 4 javascript reserved words. Watch out you only have 10 guesses per word!  Here is your first one good luck!!\n ")
    };
    
    console.log(word.displayWord(currentWord, GuessArray).join(" ")+"\n");
   
    console.log("\n ---------------------------------------------------------\n");

    promptUser();
}








startGame();
