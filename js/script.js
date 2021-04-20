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

if (answer[5].value == 1 && answer[5].checked) {
    sum = sum + 1;
    console.log(`Dobra odpowiedz ! Suma punktów: ${sum}`);
} else {
    console.log(`Zła odpowiedz ! Suma punktów: ${sum}`);
}

question3.classList.add("question--hidden");
question4.classList.remove("question--hidden");

})


form4.addEventListener("submit", (event) => {
    event.preventDefault();

if (answer[6].value == 1 && answer[6].checked) {
    sum = sum + 1;
    console.log(`Dobra odpowiedz ! Suma punktów: ${sum}`);
} else {
    console.log(`Zła odpowiedz ! Suma punktów: ${sum}`);
}

question4.classList.add("question--hidden");
question5.classList.remove("question--hidden");

})


form5.addEventListener("submit", (event) => {
    event.preventDefault();

if (answer[8].value == 1 && answer[8].checked) {
    sum = sum + 1;
    console.log(`Dobra odpowiedz ! Suma punktów: ${sum}`);
} else {
    console.log(`Zła odpowiedz ! Suma punktów: ${sum}`);
}

question5.classList.add("question--hidden");
question6.classList.remove("question--hidden");

})

form6.addEventListener("submit", (event) => {
    event.preventDefault();

if (answer[11].value == 1 && answer[11].checked) {
    sum = sum + 1;
    console.log(`Dobra odpowiedz ! Suma punktów: ${sum}`);
} else {
    console.log(`Zła odpowiedz ! Suma punktów: ${sum}`);
}

question6.classList.add("question--hidden");
question7.classList.remove("question--hidden");

})

form7.addEventListener("submit", (event) => {
    event.preventDefault();

if (answer[12].value == 1 && answer[12].checked) {
    sum = sum + 1;
    console.log(`Dobra odpowiedz ! Suma punktów: ${sum}`);
} else {
    console.log(`Zła odpowiedz ! Suma punktów: ${sum}`);
}

question7.classList.add("question--hidden");
question8.classList.remove("question--hidden");

})

form8.addEventListener("submit", (event) => {
    event.preventDefault();

if (answer[15].value == 1 && answer[15].checked) {
    sum = sum + 1;
    console.log(`Dobra odpowiedz ! Suma punktów: ${sum}`);
} else {
    console.log(`Zła odpowiedz ! Suma punktów: ${sum}`);
}

question8.classList.add("question--hidden");
question9.classList.remove("question--hidden");

})

form9.addEventListener("submit", (event) => {
    event.preventDefault();

if (answer[16].value == 1 && answer[16].checked) {
    sum = sum + 1;
    console.log(`Dobra odpowiedz ! Suma punktów: ${sum}`);
} else {
    console.log(`Zła odpowiedz ! Suma punktów: ${sum}`);
}

question9.classList.add("question--hidden");
question10.classList.remove("question--hidden");

})

form10.addEventListener("submit", (event) => {
    event.preventDefault();

if (answer[18].value == 1 && answer[18].checked) {
    sum = sum + 1;
    console.log(`Dobra odpowiedz ! Suma punktów: ${sum}`);
} else {
    console.log(`Zła odpowiedz ! Suma punktów: ${sum}`);
}

question6.classList.add("question--hidden");

console.log(`Suma punktów w całym quizie wynosi: ${sum}`);

})