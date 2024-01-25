'use strict';

let number = Math.floor(Math.random() * 20) + 1;

let btn = document.getElementById("c");
let num = document.querySelector(".number");
let guess = document.getElementById("gs");
let x = 20;
let highScore = 0;


// console.log(check , 'check')
btn.addEventListener('click', function(){
    console.log(number);
    console.log(guess.value);
    if(guess.value==number){
        document.querySelector(".message").textContent = "Correct Number...!!";
        num.textContent = number;
        document.querySelector(".highscore").textContent = 20;
        document.querySelector("body").style.backgroundColor = "green";
        if(x>highScore){
            document.querySelector(".highscore").textContent = x;
        }
    }
    else if(guess.value != number){
        if(x<=1){
            document.querySelector(".message").textContent = "You Lost the Game..!!";
            x--;
            document.querySelector(".score").textContent = x;
            return;
        }
    }
    if(guess.value>number){
        x--;
        document.querySelector(".score").textContent = x;
        document.querySelector(".message").textContent = "too high..!!";
    }
    if(guess.value<number){
        x--;
        document.querySelector(".score").textContent = x;
        document.querySelector(".message").textContent = "too low..!!";
    }
});

let again = document.querySelector('.again');

again.addEventListener('click',function(){
    x=20;
    console.log("hello world");
    document.querySelector(".score").textContent = x;
    document.querySelector(".message").textContent = "Start guessing...";
    num.textContent = "?"
    document.querySelector("body").style.backgroundColor = "#222";
    guess.textContent = " ";
    number = Math.floor(Math.random() * 20) + 1;
})

// again.