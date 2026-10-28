const hero = document.querySelector(".hero-container");
const quesContainer = document.querySelector(".question-container");
const eachQuestion = document.querySelector(".each-ques-container");
const choices = document.querySelector(".choices-container");
const nextBtn = document.querySelector(".next-btn");
const buttonsRestartNext = document.getElementById("btn-start-next");
const answers = [];
const questions = [
  {
    question: "When did Lhean and Ehron get together?",
    choices: [
      "a. February 8, 2022",
      "b. February 9, 2022",
      "c. February 8, 2023",
      "d. February 9, 2023",
    ],
    answers: "c. February 8, 2023",
  },
  {
    question: "What is our first favorite song?",
    choices: [
      "a. Those Eyes",
      "b. Paraluman",
      "c. Lifetime",
      "d. Make It With You",
    ],
    answers: "a. Those Eyes",
  },
  {
    question: "What is our first favorite song?",
    choices: [
      "a. Those Eyes",
      "b. Paraluman",
      "c. Lifetime",
      "d. Make It With You",
    ],
    answers: "a. Those Eyes",
  },
];

let currentQues = 0;
let isAnswered = false;

function startButton(e) {
  if (e.key === "Enter") {
    hero.classList.add("hidden");
    buttonsRestartNext.classList.replace("hidden", "btn-container");
    document.body.removeEventListener("keydown", startButton);
    showQuestions(0);
  }
}

function showQuestions(index) {
  /* Reset the webpage by clearing elements, when next is clicked */
  const activeQues = eachQuestion;
  const choicesQues = choices;

  activeQues.replaceChildren();
  choicesQues.replaceChildren();
  answers.length = 0;

  /* Question creation */
  const ques = document.createElement("p");
  ques.textContent = questions[index].question;
  ques.classList.add("question");

  /* Button creation & Disabler */
  questions[index].choices.forEach((choice) => {
    const buttons = document.createElement("button");
    buttons.textContent = choice;
    answers.push(buttons);
    disableAnswer(index, choice, answers, buttons);

    /* Append buttons and questions in the webpage */
    choicesQues.appendChild(buttons);
  });

  activeQues.append(ques, choicesQues);
}

function validate(index, choice) {
  if (choice === questions[index].answers) {
    console.log("Correct");
  } else {
    console.log("Wrong");
  }
}

function disableAnswer(index, choice, answers, buttons) {
  buttons.addEventListener("click", () => {
    answers.forEach((btn) => {
      btn.disabled = true;
    });
    isAnswered = true;
    validate(index, choice);
  });
}

function proceedBtn() {
  if (isAnswered) {
    if (currentQues < questions.length - 1) {
      currentQues++;
      showQuestions(currentQues);
    }
  } else {
    console.log("ef");
  }
}

document.body.addEventListener("keydown", startButton);
nextBtn.addEventListener("click", proceedBtn);
