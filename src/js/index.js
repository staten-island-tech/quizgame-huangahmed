console.log("connected");

const questions = [
  {
    question: "Have you talked to Mr. Erlenwein?",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
      { text: "idk", correct: false },
      { text: "no comment", correct: false },
    ],
  },
  {
    question: "Rate your personality.",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
      { text: "idk", correct: false },
      { text: "no comment", correct: false },
    ],
  },
  {
    question: "What class do you attend or teach (Choose your favorite)?",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
      { text: "idk", correct: false },
      { text: "no comment", correct: false },
    ],
  },
  {
    question: "How many AP Classes did you take or teach?",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
      { text: "idk", correct: false },
      { text: "no comment", correct: false },
    ],
  },
  {
    question: "Do you coach a sports team or are you on a sports team?",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
      { text: "idk", correct: false },
      { text: "no comment", correct: false },
    ],
  },
  {
    question: "Bonus: Are you Mr. Whalen?",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
      { text: "idk", correct: false },
      { text: "no comment", correct: false },
    ],
  },
];

console.log(questions);

function newFunc() {
  const questionsArr = Array.from(questions);
}

//console.log(questions[0].answers.text);
// array2.forEach((elements) => console.log(elements));
// array3.forEach((element3) => console.log(element3));

const questionContainerElement = document.getElementById("questions");
console.log(questionContainerElement);
const startButton = document.getElementById("start-button");
const buttonAye = document.getElementById("start-button");
console.log(buttonAye);

const answerBtn = document.getElementById("buttons-1");
const answerBtn2 = document.getElementById("buttons-2");
const answerBtn3 = document.getElementById("buttons-3");
const answerBtn4 = document.getElementById("buttons-4");
console.log(answerBtn);
console.log(answerBtn2);
console.log(answerBtn3);
console.log(answerBtn4);

let shuffledQuestion, currentQuestionNum;

startButton.addEventListener("click", startQuiz);

const nextBtn = document.getElementById("next-button");
function startQuiz() {
  console.log("started");
  startButton.classList.add("hide");
  shuffledQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionNum = 0;
  answerBtn.classList.add("show");
  answerBtn2.classList.add("show");
  answerBtn3.classList.add("show");
  answerBtn4.classList.add("show");
  nextBtn.classList.add("show");
  setNextQuestion();
  selectAnswer();
  nextButton();
}

function setNextQuestion() {
  showQuestion(shuffledQuestion[currentQuestionNum]);

  // showAnswer();
  // collectData();
  // clickAnswer();
}

function showQuestion(questions) {
  questionContainerElement.innerText = questions.question;

  // questions.answers.forEach((answer) => {
  //   const button = document.createElement("button");
  //   button.innerText = answers.text;
  //   button.classList.add("answer-btn");
  // });
}

selectAnswer.addEventListener("click", function selectAnswers() {
  if (question.answers.correct === true) {
    +1;
  } else alert("Correct!");
});

nextButton.addEventListener("click", function newQuestions() { });
// function showAnswer(questions) {
//   answerBtn.innerText.html = questions.answers;
// }

//needAnswer();

// function showAnswer() {
//   const passAnswer = questions[0].answers.map((item) => {
//     return questions.text;
//   });

//   answerBtn.innerText = passAnswer[0];
//   console.log(answerBtn);
//   answerBtn2.innerText = passAnswer[1];
//   answerBtn3.innerText = passAnswer[2];
//   answerBtn4.innerText = passAnswer[3];
// }
// showAnswer();

// const index = questions.findIndex(function (questions, answers) {
//   const passAnswer = console.log(questions.text);
//   console.log(passAnswer.text);
// });
