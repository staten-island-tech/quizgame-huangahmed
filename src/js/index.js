console.log("connected");

const questions = [
  {
    question: "Have you talked to Mr. Erlenwein?",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "Rate your personality",
    answers: [
      { text: "Mediocre", correct: false },
      { text: "Outstanding", correct: true },
      { text: "Horrible", correct: false },
      { text: "Pretty Good", correct: true },
    ],
  },
  {
    question: "What class do you attend or teach (Choose your favorite)",
    answers: [
      { text: "AP Computer Science", correct: false },
      { text: "AP Psychology", correct: true },
      { text: "English", correct: true },
      { text: "AP Calc BC", correct: false },
    ],
  },
  {
    question: "How many AP Classes did you take or teach?",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: true },
      { text: "7(+)", correct: false },
    ],
  },
  {
    question: "Do you coach a sports team or are you on a sports team",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
      { text: "I am planning on joining", correct: true },
      { text: "I am in clubs", correct: false },
    ],
  },
  {
    question: "Bonus: Are you Mr. Whalen?",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
];

const questionContainerElement = document.getElementById("questions");
console.log(questionContainerElement);

const answerBtn = document.getElementById("buttons");
console.log(answerBtn);

const startButton = document.getElementById("start-button");
console.log(startButton);

startButton.addEventListener("click", startQuiz);

const buttonAye = document.getElementById("start-button");
console.log(buttonAye);

const buttonYay = document.getElementById("buttons");
console.log(buttonYay);

const nextBtn = document.getElementById("next-button");
function startQuiz() {
  console.log("started");
  startButton.classList.add("hide");
  // questionContainerElement.add("show");
  // nextBtn.classList.remove("hide");
  // nextBtn.classList.add("show");
  // setNextQuestion();
}

function setNextQuestion() {}
