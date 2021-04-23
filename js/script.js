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
const result = document.querySelector(".js-result");

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

const reloadButton = document.querySelector(".js-reloadButton");

const answers = document.querySelectorAll(".js-answer");

let sum = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[0].checked && !answers[1].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[0].value && answers[0].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question1.classList.add("question--hidden");
        question2.classList.remove("question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question1.classList.add("question--hidden");
        question2.classList.remove("question--hidden");
    }
})

form2.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[2].checked && !answers[3].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[3].value && answers[3].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question2.classList.add("question--hidden");
        question3.classList.remove("question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question2.classList.add("question--hidden");
        question3.classList.remove("question--hidden");
    }
})

form3.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[4].checked && !answers[5].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[5].value && answers[5].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question3.classList.add("question--hidden");
        question4.classList.remove("question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question3.classList.add("question--hidden");
        question4.classList.remove("question--hidden");
    }
})


form4.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[6].checked && !answers[7].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[6].value && answers[6].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question4.classList.add("question--hidden");
        question5.classList.remove("question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question4.classList.add("question--hidden");
        question5.classList.remove("question--hidden");
    }
})

form5.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[8].checked && !answers[9].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[8].value && answers[8].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question5.classList.add("question--hidden");
        question6.classList.remove("question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question5.classList.add("question--hidden");
        question6.classList.remove("question--hidden");
    }
})

form6.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[10].checked && !answers[11].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[11].value && answers[11].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question6.classList.add("question--hidden");
        question7.classList.remove("question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question6.classList.add("question--hidden");
        question7.classList.remove("question--hidden");
    }
})

form7.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[12].checked && !answers[13].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[12].value && answers[12].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question7.classList.add("question--hidden");
        question8.classList.remove("question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question7.classList.add("question--hidden");
        question8.classList.remove("question--hidden");
    }
})

form8.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[14].checked && !answers[15].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[15].value && answers[15].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question8.classList.add("question--hidden");
        question9.classList.remove("question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question8.classList.add("question--hidden");
        question9.classList.remove("question--hidden");
    }
})

form9.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[16].checked && !answers[17].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[16].value && answers[16].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question9.classList.add("question--hidden");
        question10.classList.remove("question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question9.classList.add("question--hidden");
        question10.classList.remove("question--hidden");
    }
})

form10.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[18].checked && !answers[19].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[18].value && answers[18].checked) {
        sum++;
        result.innerHTML = `Good answer! Your final score: ${sum}`;
        question10.classList.add("question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your final score: ${sum}`;
        question10.classList.add("question--hidden");
    }
})

reloadButton.addEventListener("click", () => {
    location.reload();
})
