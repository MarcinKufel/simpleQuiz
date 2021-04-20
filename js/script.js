const question1 = document.querySelector(".js-question1");
const question2 = document.querySelector(".js-question2");
const question3 = document.querySelector(".js-question3");
const question4 = document.querySelector(".js-question4");
const question5 = document.querySelector(".js-question5");
const question6 = document.querySelector(".js-question6");
const question7 = document.querySelector(".js-question7");
const question8 = document.querySelector(".js-question8");
const question9 = document.querySelector(".js-question9");
const question10 = document.querySelector(".js-question10");


const resultButton = document.querySelector(".js-resultButton")
const result = document.querySelector("js-result");

const form = document.querySelector(".js-form");
const form2 = document.querySelector(".js-form2");
const form3 = document.querySelector(".js-form3");
const form4 = document.querySelector(".js-form4");
const form5 = document.querySelector(".js-form5");
const form6 = document.querySelector(".js-form6");
const form7 = document.querySelector(".js-form7");
const form8 = document.querySelector(".js-form8");
const form9 = document.querySelector(".js-form9");
const form10 = document.querySelector(".js-form10");



const answer = document.querySelectorAll(".js-answer");

let sum = 0;



form.addEventListener("submit", (event) => {
    event.preventDefault();



if (answer[0].value == 1 && answer[0].checked) {
    sum = sum + 1;
    console.log(`Dobra odpowiedz ! Suma punktów: ${sum}`);
} else {
    console.log(`Zła odpowiedz ! Suma punktów: ${sum}`);
}

question1.classList.add("question--hidden");
question2.classList.remove("question--hidden");

})

form2.addEventListener("submit", (event) => {
    event.preventDefault();

if (answer[3].value == 1 && answer[3].checked) {
    sum = sum + 1;
    console.log(`Dobra odpowiedz ! Suma punktów: ${sum}`);
} else {
    console.log(`Zła odpowiedz ! Suma punktów: ${sum}`);
}

question2.classList.add("question--hidden");
question3.classList.remove("question--hidden");

})

form3.addEventListener("submit", (event) => {
    event.preventDefault();

if (answer[3].value == 1 && answer[3].checked) {
    sum = sum + 1;
    console.log(`Dobra odpowiedz ! Suma punktów: ${sum}`);
} else {
    console.log(`Zła odpowiedz ! Suma punktów: ${sum}`);
}

question2.classList.add("question--hidden");
question3.classList.remove("question--hidden");

})