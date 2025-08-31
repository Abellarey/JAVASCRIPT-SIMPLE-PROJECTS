const myh3 = document.getElementById("myh3");
const input = document.getElementById("input");
const myform = document.getElementById("submit");
const scoreP = document.getElementById("score")

const num1 = Math.ceil(Math.random()*20);
const num2 = Math.ceil(Math.random()*20);

myh3.textContent = `What is ${num1} multiply by ${num2}?`;

let Answer = num1 * num2;
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreP.innerText = `score: ${score}`;

myform.addEventListener("click", () =>{
    let userAnswer = +input.value; 
    if(userAnswer === Answer){
       score++;
       updateStorage();
    }
    else{
        score--;
        updateStorage();
    }
});

function updateStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}

