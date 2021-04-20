const question1 = document.querySelector(".js-question1");
const question2 = document.querySelector(".js-question2");

const resultButton = document.querySelector(".js-resultButton")
const result = document.querySelector("js-result");

const form = document.querySelector(".js-form");
const form2 = document.querySelector(".js-form2");

let sum = 0;



form.addEventListener("submit", (event) => {
    event.preventDefault();

const answer = document.querySelectorAll(".js-answer");

if (answer[0].value == 1 && answer[0].checked) {
    sum = sum + 1;
    console.log(`Dobra odpowiedz ! Suma punktów: ${sum}`);
} else {
    console.log(`Zła odpowiedz ! Suma punktów: ${sum}`);
}

})

