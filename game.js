scoreboard.setAttribute('style', 'font-size: 35px; margin-top: 3%');
scoreboard.innerHTML = 'Player (you) : '+ playerScore + ' | Computer : '+ compScore + '| Ties : '+ ties;


imgRock.addEventListener('click', ()=>{
    compChoiceIndex = Math.floor(Math.random()*3);
    compChoice = choices[compChoiceIndex];
    //alert(compChoice + ' ' + compChoiceIndex);
    if (compChoiceIndex == 0){
        scoreboard.innerHTML = 'Player (you) : '+ playerScore + ' | Computer : '+ compScore + '| Ties : '+ (ties+1);
        roundResult.innerHTML = 'Computer chose ' + compChoice + ', you chose rock. Tied!'; 
    }
    else if (compChoiceIndex == 1){
        scoreboard.innerHTML = 'Player (you) : '+ playerScore + ' | Computer : '+ (compScore+1) + '| Ties : '+ ties;
        roundResult.innerHTML = 'Computer chose ' + compChoice + ', you chose rock. You\'ve lost this round!';  
    }
    else if (compChoiceIndex == 2){
        scoreboard.innerHTML = 'Player (you) : '+ (playerScore+1) + ' | Computer : '+ compScore + '| Ties : '+ ties;
        roundResult.innerHTML = 'Computer chose ' + compChoice + ', you chose rock. You\'ve won!'; 
    }
    
})

imgPaper.addEventListener('click', ()=>{
    compChoiceIndex = Math.floor(Math.random()*3);
    compChoice = choices[compChoiceIndex];
    //alert(compChoice + ' ' + compChoiceIndex);
    if (compChoiceIndex == 0){

        
        roundResult.innerHTML = 'Computer chose ' + compChoice + ', you chose paper. You\'ve won!'; 
    }
    else if (compChoiceIndex == 1){
         
        roundResult.innerHTML = 'Computer chose ' + compChoice + ', you chose paper. Tied!';  
    }
    else if (compChoiceIndex == 2){
        
        roundResult.innerHTML = 'Computer chose ' + compChoice + ', you chose paper. You\'ve lost this round!'; 
    }
    
})

imgScissor.addEventListener('click', ()=>{
    compChoiceIndex = Math.floor(Math.random()*3);
    compChoice = choices[compChoiceIndex];
    //alert(compChoice + ' ' + compChoiceIndex);
    if (compChoiceIndex == 0){

        
        roundResult.innerHTML = 'Computer chose ' + compChoice + ', you chose scissor. You\'ve lost this round!'; 
    }
    else if (compChoiceIndex == 1){
        
        roundResult.innerHTML = 'Computer chose ' + compChoice + ', you chose scissor. You\'ve won this round!';  
    }
    else if (compChoiceIndex == 2){
        
        roundResult.innerHTML = 'Computer chose ' + compChoice + ', you chose scissor. Tied!'; 
    }
    
})