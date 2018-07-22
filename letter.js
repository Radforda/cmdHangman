function Letters(letter, guesses){
    self=this;
    this.letterName = letter;
    this.guessed = false;
 
    this.display = function() {
        this.check();
        if(self.guessed == true){
        return(self.letterName);
        }else{
            return("_");
        };
    }
    this.check =function(){
        
        for(var i=0; i<guesses.length; i++){
            if(letter===guesses[i]){
                this.guessed=true;
                
                
            }
        }
        
    }
    
};

module.exports=Letters;