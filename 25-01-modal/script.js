'use strict';

let select = document.querySelectorAll(".show-modal");
let cross = document.querySelector(".close-modal");
let hidden = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

let open = function(){
    hidden.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

let close = function(){
    hidden.classList.add("hidden");
    overlay.classList.add("hidden");
}

for(let i=0;i<select.length;i++){
    select[i].addEventListener('click',open);
}

cross.addEventListener('click',close);
overlay.addEventListener('click',close);

document.addEventListener('keydown',function(e){
    if(e.key==="Escape" && !hidden.classList.contains('hidden')){
        close();
    }
});

