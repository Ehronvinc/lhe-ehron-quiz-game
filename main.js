const hero = document.querySelector(".hero-container");
const quesContainer = document.querySelector(".question-container");
const eachQuestion = document.querySelector(".each-ques-container");
const choices = document.querySelector(".choices-container");
const nextBtn = document.querySelector(".next-btn");
const buttonsRestartNext = document.getElementById("btn-start-next");
const score = document.getElementById("score-ct");
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
];

let currentQues = 0;
let isAnswered = false;
let scoreCtr = 0;

function startButton(e) {
  if (e.key === "Enter") {
    hero.classList.add("hidden");
    score.classList.replace("hidden", "score-text");
    score.innerHTML = scoreCount();
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
    scoreCtr++;
    scoreCount();
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
      isAnswered = false;
      showQuestions(currentQues);
    }
  } else {
    console.log("ef");
  }
}

/* Score Counter */
function scoreCount() {
  return (score.innerHTML = `<p>Score: ${scoreCtr}/10</p>`);
}

document.body.addEventListener("keydown", startButton);
nextBtn.addEventListener("click", proceedBtn);
