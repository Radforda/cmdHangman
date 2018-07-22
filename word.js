Letters=require ("./letter");

var Word=function(){
    self=this;
    this.wordArray=function(word){
        return(word.split(""));
    }
    this.displayWord=function(word, GuessArray){
        var arr=word.split("");
        var word=[];
        for(var i=0;i<arr.length; i++){
            var letter=new Letters(arr[i],GuessArray);
            word.push(letter.display());
        }
        return(word);
    };
    this.guess=function(guess){
        for (var i=0;i<wordArray;i++)
        letter.check(wordArray[i]);
        
    }
   
}

module.exports=Word;

