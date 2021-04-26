const question = document.querySelectorAll(".js-question");
const resultButton = document.querySelector(".js-section__resultButton")
const result = document.querySelector(".js-result");
const form = document.querySelectorAll(".js-form");
const reloadButton = document.querySelector(".js-reloadButton");
const answers = document.querySelectorAll(".js-answer");

let sum = 0;

form[0].addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[0].checked && !answers[1].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[0].value && answers[0].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question[0].classList.add("section__question--hidden");
        question[1].classList.remove("section__question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question[0].classList.add("section__question--hidden");
        question[1].classList.remove("section__question--hidden");
    }
})

form[1].addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[2].checked && !answers[3].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[3].value && answers[3].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question[1].classList.add("section__question--hidden");
        question[2].classList.remove("section__question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question[1].classList.add("section__question--hidden");
        question[2].classList.remove("section__question--hidden");
    }
})

form[2].addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[4].checked && !answers[5].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[5].value && answers[5].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question[2].classList.add("section__question--hidden");
        question[3].classList.remove("section__question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question[2].classList.add("section__question--hidden");
        question[3].classList.remove("section__question--hidden");
    }
})


form[3].addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[6].checked && !answers[7].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[6].value && answers[6].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question[3].classList.add("section__question--hidden");
        question[4].classList.remove("section__question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question[3].classList.add("section__question--hidden");
        question[4].classList.remove("section__question--hidden");
    }
})

form[4].addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[8].checked && !answers[9].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[8].value && answers[8].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question[4].classList.add("section__question--hidden");
        question[5].classList.remove("section__question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question[4].classList.add("section__question--hidden");
        question[5].classList.remove("section__question--hidden");
    }
})

form[5].addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[10].checked && !answers[11].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[11].value && answers[11].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question[5].classList.add("section__question--hidden");
        question[6].classList.remove("section__question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question[5].classList.add("section__question--hidden");
        question[6].classList.remove("section__question--hidden");
    }
})

form[6].addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[12].checked && !answers[13].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[12].value && answers[12].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question[6].classList.add("section__question--hidden");
        question[7].classList.remove("section__question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question[6].classList.add("section__question--hidden");
        question[7].classList.remove("section__question--hidden");
    }
})

form[7].addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[14].checked && !answers[15].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[15].value && answers[15].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question[7].classList.add("section__question--hidden");
        question[8].classList.remove("section__question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question[7].classList.add("section__question--hidden");
        question[8].classList.remove("section__question--hidden");
    }
})

form[8].addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[16].checked && !answers[17].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[16].value && answers[16].checked) {
        sum++;
        result.innerHTML = `Good answer! Your score: ${sum}`;
        question[8].classList.add("section__question--hidden");
        question[9].classList.remove("section__question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your score: ${sum}`;
        question[8].classList.add("section__question--hidden");
        question[9].classList.remove("section__question--hidden");
    }
})

form[9].addEventListener("submit", (event) => {
    event.preventDefault();

    if (!answers[18].checked && !answers[19].checked) {
        result.innerHTML = "Please check any answer";
    } else if (answers[18].value && answers[18].checked) {
        sum++;
        result.innerHTML = `Good answer! Your final score: ${sum}`;
        question[9].classList.add("section__question--hidden");
    } else {
        result.innerHTML = `Bad answer! Your final score: ${sum}`;
        question[9].classList.add("section__question--hidden");
    }
})

reloadButton.addEventListener("click", () => {

    for (i = 1; i <= 9; i++) {
        if (answers[i].checked) {
            answers[i].checked = false;
            question[i].classList.add("section__question--hidden");
        } else {
            question[i].classList.add("section__question--hidden");
        }
    }
    question[0].classList.remove("section__question--hidden");
    sum = 0;
    result.innerHTML = "";
})
