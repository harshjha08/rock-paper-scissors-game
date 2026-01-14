(function () {
    const link = document.getElementById("dynamic-style");

    function applyCSS() {
        if (window.innerWidth <= 768) {
            link.href = "mobile.css";
        } else {
            link.href = "style.css";
        }
    }

    applyCSS();
    window.addEventListener("resize", applyCSS);
})();

// user and comp score initial value 
let userScore = 0;
let compScore = 0;
// number of rounds to play
let turn = 0;
// taking input from user for number of counts
let userEnterTurn = document.getElementById("gameTurn"); 
//user and computer score and updating score on main game window
let userScoreP = document.getElementById("user-score");
let CompScoreP = document.getElementById("comp-score");
//user and computer score on final score window after finishing game
let finalUserScoreP = document.getElementById("final-user-score");
let finalCompScoreP = document.getElementById("final-comp-score");
// getting user choice from interface 
let choices = document.querySelectorAll(".choice");
// main msg box on game window for showing winner 
let msgBox = document.getElementById("msg-box");
// msg box on final score board after finishing game
let finalMsg = document.getElementById("finalMsg");
//btns on main game window 
let resetBtn = document.getElementById("resetBtn"); // for reset game
let finishBtn = document.getElementById("finishBtn"); // for ending game and showing final score and winner window
// containers used in game for changing interface
let gameContainer = document.querySelector(".game-container"); // main game container
let endContainer = document.querySelector(".end-game-container"); // end game conatiner
let userInfoSaver = document.querySelector(".about-user-box"); // user info saver e.g. name and round count saver
// btns: fetching play again btn placed on end game container to play again
let playAgainBtn = document.getElementById("playAgain");
// btns: user name and round count saver button on start game window
let startGameBtn = document.getElementById("submitUserBtn");
// fetching user name from Interface enterd by user
let userName = document.getElementById("userNameInput");
// user name placed on game window
let displayName = document.getElementById("displayName");
// exit btn on end game container for exiting game and refresh entire game 
let exitBtn = document.getElementById("gameShutdown");
//user and computer img placed on main game window
let userImg = document.getElementById("userImg");
let compPic = document.getElementById("compImg");


//start game function 
startGameBtn.addEventListener("click", () => {
    if(userName.value === "" || userEnterTurn.value === ""){
       startGameBtn.innerText = "Complete Setup";
       setTimeout(() => {
          startGameBtn.innerText = "Play";
       }, 1500);
    }else{
        startGameBtn.innerText = "Loading Game......";
        setTimeout(() => {
             userImg.src = randomUserPic();
    compPic.src = randomComPic();
        let randomtagName = randomNickName();
    gameContainer.style.display = "flex";
    userInfoSaver.style.display = "none";
     userName = userName.value;
     displayName.innerText = userName + randomtagName;
        }, 500);
    }
})
// exit game 
exitBtn.addEventListener("click", () => {
    exitBtn.innerText = "Exiting....";
    setTimeout(() => {
        document.querySelector(".about-user-box").style.display = "flex";
        gameContainer.style.display = "none";
        endContainer.style.display ="none";
        startGameBtn.innerText = "Play";
        location.reload();
    },1000);
})
// random pic genration for user
let randomUserPic = () => {
    let userPic = [
"boy1.jpg", 
"boy2.jpg",
"boy3.jpg",
"boy4.jpg",
"boy5.jpeg",
"boy6.jpg",
"boy7.jpg",
"boy8.jpeg",
"boy9.jpeg",
"boy10.jpg",
"boy11.jpg",
"boy12.jpg",
"boy13.jpg",
"girl1.svg",
"girl2.webp",
"girl3.jpeg",
"girl4.jpg",
"girl5.jpg",
"girl6.jpg",
"girl7.webp", 
"girl8.jpeg"
     ];
    let userPicIdx = Math.floor(Math.random() * 20); 
    return userPic[userPicIdx];
}
// random pic genration for computer
let randomComPic = () => {
    let compPic = [
"comp1.webp",
"comp2.jpg",
"comp3.jpg",
"comp4.webp",
"comp5.jpg"
    ];
    let compPicIdx = Math.floor(Math.random() * 4);
    return compPic[compPicIdx];
}
// random userTag genration 
let randomNickName = () => {
    let name = [
        "_khatra65", 
        "_proX92", 
        "_Apex07", 
        "_Phantom21", 
        "_Vortex99", 
        "_NovaX", 
        "_Titan47", 
        "_Spectre9", 
        "_RogueX1", 
        "_Shadow88", 
        "_Blaze77", 
        "_Zenith5", 
        "_legend77", 
        "_noobSlayer", 
        "_darkWolf", 
        "_king89", 
        "_fireShot", 
        "_ghost21", 
        "_stormX", 
        "_alpha99"
    ];
    let randomNameIdx = Math.floor(Math.random() * 19);
    return name[randomNameIdx];
}
// play again function to play again with same username and round count
playAgainBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    turn = 0;
    userScoreP.style.color = "rgb(244, 20, 20)";
    CompScoreP.style.color = "rgb(244, 20, 20)";
     gameContainer.style.display = "flex";
     endContainer.style.display = "none";
     userScoreP.innerText = userScore;
    CompScoreP.innerText = compScore;
    msgBox.innerText = "Play Your Move";
    msgBox.style.background = "rgb(11, 11, 73)";
})
// by default game end after exceeding round count entered by user
let defaultGameEnd = () => {
    gameContainer.style.display = "none";
     endContainer.style.display = "flex";
    finalUserScoreP.innerText = userScore;
    finalCompScoreP.innerText = compScore;
     let finalUserName = document.getElementById("finaldisplayName");
    let randomtagName = randomNickName();
    finalUserName.innerText = userName + randomtagName;
    if(userScore === compScore){
        finalMsg.innerText = "Match Is Draw Play Again";
    }else if(userScore>compScore){
        finalMsg.innerText = "Congratulations You Won!";
    }else{
        finalMsg.innerText = "You lost the match";
    }
}
//finish game function used for ending game manually no matter round count
finishBtn.addEventListener("click", () => {
    if(turn == 0){
        finishBtn.innerText = "Play first";
        setTimeout(() => {
          finishBtn.innerText = "Finish";
        }, 1000);
    }else{gameContainer.style.display = "none";
     endContainer.style.display = "flex";
    finalUserScoreP.innerText = userScore;
    finalCompScoreP.innerText = compScore;
     let finalUserName = document.getElementById("finaldisplayName");
    let randomtagName = randomNickName();
    finalUserName.innerText = userName + randomtagName;
    if(userScore === compScore){
        finalMsg.innerText = "Match Is Draw Play Again";
    }else if(userScore>compScore){
        finalMsg.innerText = "Congratulations You Won!";
    }else{
        finalMsg.innerText = "You lost the match";
    }}
    
     
})
//Game reset function for reseting game after setting scores and turn 0 and resseting UI
resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    turn = 0;
    userScoreP.innerText = userScore;
    CompScoreP.innerText = compScore;
    userScoreP.style.color = "rgb(244, 20, 20)";
    CompScoreP.style.color = "rgb(244, 20, 20)";
    msgBox.innerText = "Play Your Move";
    msgBox.style.background = "rgb(11, 11, 73)";
})

//computer choice genration to play game
let genCompCh = () => {
    let choices = ["rock", "paper", "scissor"];
    let choiceIdx = Math.floor(Math.random() * 2);
    return choices[choiceIdx];
} 
// draw game function , apply when user and comp choice would be same
let drwaGame = (userchoice, comChoice) => {
    msgBox.innerText = `Match is draw both choosed ${userchoice}`;
    msgBox.style.background = "rgb(17, 56, 65)";
    userScoreP.style.color = "blue";
    CompScoreP.style.color = "blue";
    CompScoreP.innerText = compScore;
    userScoreP.innerText = userScore;
}

// showing winner , this function shows winner in msg box after checking conditions
let showWinner = (userWin, userchoice, comChoice) => { // parameters used: userWin(True/False), UserChoice, computer choice
    if(userWin){ //if function gets userwin true
        userScore++;
        userScoreP.innerText = "+" + userScore;
        userScoreP.style.color = "green";
        CompScoreP.style.color = "red";
        CompScoreP.innerText = compScore;
        msgBox.innerText = `You win your ${userchoice} beaten ${comChoice}`;
        msgBox.style.background = "green";
    }else{ // if userwin false
        compScore++;
        CompScoreP.innerText = "+" + compScore;
        CompScoreP.style.color = "green";
        userScoreP.style.color = "red";
         userScoreP.innerText = userScore;
        msgBox.innerText = `You lost ${comChoice} beaten ${userchoice}`;
        msgBox.style.background = "red";
    }
}
//playing game function
let playGame = (userchoice) => { // this msg checks who is winner user or computer using real game logic
    let comChoice = genCompCh();
    if(userchoice === comChoice){ // when user and computer choose same
        drwaGame(userchoice, comChoice); // it will call drawGame function to proceed furthure
    }else{// if both choosed different this block will apply
        let userWin = true; //taking userWin variable
        if(userchoice === "rock"){ // paper scissor
             userWin = comChoice === "paper" ? false : true;
        }else if( userchoice === "paper"){ // rock and scissor
            userWin = comChoice === "scissor"? false : true;
        }else{ //scissor --- rock and paper
            userWin = comChoice === "rock"? false:true
        }
        showWinner(userWin, userchoice, comChoice);// this will call show winer function to show winner on Interface by passing these parameters
}
}

// function for taking user choice from game interface via clicking options rock,paper,scissor
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");// fetching id of choosed option to know what user choosed
         playGame(userchoice);// passing user choice to play game function to proceed furthure
        turn++; // on every click this will increase 1,2,3,
        if(turn>userEnterTurn.value){ // checking turn on every click 
            //if user enterd turn = 5 then user can click and choose only 5 times on 6th tap game will end automatically 
            defaultGameEnd();// this will call default game end function to end game and it will show final result 
        }
    })
})