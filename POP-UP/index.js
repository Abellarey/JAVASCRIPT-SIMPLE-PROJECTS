const content = document.querySelector(".content");
const btn = document.querySelector(".btn")
const popup = document.querySelector(".popup");
const myback = document.querySelector(".myback");

btn.addEventListener("click", ()=>{
    content.classList.add("active");
    popup.classList.remove("active");
});

myback.addEventListener("click", ()=>{
    content.classList.remove("active");
    popup.classList.add("active");
})