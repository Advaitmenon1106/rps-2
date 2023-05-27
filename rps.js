let counter = 0;
let comp_score = 0;
let player_score = 0;
let ties = 0;

choices = ['rock', 'paper', 'scissor'];

function result(c, p){
    alert('Computer chose '+ c +', you chose '+ p);
}

while (counter<5){
    //Random computer choice
    // While loop checks for < 5 because the counter starts from 0, so all the way to 4 would be 5 games in all

    let computer_choice_ind = Math.floor(Math.random()*3);
    let comp_choice = choices[computer_choice_ind];
    
    /* Dear reader, If you feel like testing my code's validity, you may do so by 
       removing the comment slashes beside the line below.

       Doing so will give you what the computer has chosen randomly, on an alert box, before you can make your choice.

       Removing the commenting will therefore allow you to test out different cases: Wins, losses and ties,
       and how each result affects the final score*/

    //alert(comp_choice); 

    //Player input

    function player_input(i){
        while (choices.indexOf(i) == -1){
            i = prompt("[Game "+ (counter+1)+"] Wrong choice! Make a choice between 'rock', 'paper' and 'scissor'.").toLowerCase();
        }
        return i;
    }

    let playerInp = player_input(prompt("[Game "+ (counter+1)+"] Make a choice").toLowerCase());

    

    if (playerInp == comp_choice){
        result(comp_choice, playerInp);
        alert('Tied!');
        ties++;
    }

    else if(comp_choice == 'rock' && playerInp == 'scissor'){
        result(comp_choice, playerInp);
        alert('You lost!');
        comp_score++;
    }

    else if(comp_choice == 'scissor' && playerInp == 'rock'){
        result(comp_choice, playerInp);
        alert('You won!');
        player_score++;
    }

    else if(choices.indexOf(comp_choice)<choices.indexOf(playerInp)){
        result(comp_choice, playerInp);
        alert('You won!');
        player_score++;
    }

    else if(choices.indexOf(comp_choice)>choices.indexOf(playerInp)){
        result(comp_choice, playerInp);
        alert('You lost!');
        comp_score++
    }

    counter++;
    alert("The score so far:- \n Computer: "+ comp_score+ " | Player's Score: "+ player_score + " | Ties: " + ties);
}

alert("Final Scores:-\n Computer: "+ comp_score+ " | Player's Score: "+ player_score + " | Ties: " + ties);
