const question1 = document.querySelector(".js-question1");
const question2 = document.querySelector(".js-question2");

const resultButton = document.querySelector(".js-resultButton")
const result = document.querySelector("js-result");

const form = document.querySelector(".js-form");
const form2 = document.querySelector(".js-form2");

let sum = 0;

console.log("dddds");

form.addEventListener("click", (event) => {
    event.preventDefault();

const answer = document.querySelector(".js-answer");

if (answer) {
    sum = sum + 1;
    console.log(sum);
}

console.log(sum);

})

console.log(sum);