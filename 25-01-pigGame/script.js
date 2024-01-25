'use strict';

let restart = document.querySelector(".btn--new");
let roll = document.querySelector(".btn--roll");
let hold = document.querySelector(".btn--hold");
let dice = document.querySelector(".dice");

let score1 = document.querySelector("#score--0");
let score2 = document.querySelector("#score--1");

let current1 = document.querySelector("#current--0");
let current2 = document.querySelector("#current--1");

let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');

let scores , currentScore, activePlayer,generate,playing;


function start(){
    console.log("hello1");
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score1.textContent=0;
    score2.textContent=0;

    current1.textContent=0;
    current2.textContent=0;

    dice.classList.add("hidden");
    
    player1.classList.remove("player--winner");
    player2.classList.remove("player--winner");
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
}
start();

roll.addEventListener('click',function(){
    if(playing){
        generate = Math.floor(Math.random() * 6) + 1;
        dice.classList.remove("hidden");
        dice.src = `dice-${generate}.png`;
    
        if(generate!=1){
            currentScore+=generate;
            console.log("hello");
            document.getElementById(`current--${activePlayer}`).textContent= currentScore;
        }else{
            document.getElementById(`current--${activePlayer}`).textContent= 0;
            currentScore = 0;
            activePlayer = activePlayer === 0?1:0;
            player1.classList.toggle("player--active");
            player2.classList.toggle("player--active");
        }
    }
    
})

hold.addEventListener('click',function(){
    if(playing){
        scores[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer];
    
        if(scores[activePlayer]>=10){
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
        }else{
            document.getElementById(`current--${activePlayer}`).textContent= 0;
            currentScore = 0;
            activePlayer = activePlayer === 0?1:0;
            player1.classList.toggle("player--active");
            player2.classList.toggle("player--active");
        }
    }
})

restart.addEventListener("click",start)
