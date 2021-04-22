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
    question: "Are you a human?",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
      { text: "idk", correct: false },
      { text: "no comment", correct: false },
    ],
  },
  {
    question: "Is AP Comp Sci your favorite classes?",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
      { text: "idk", correct: false },
      { text: "no comment", correct: false },
    ],
  },
  {
    question: "Did you take AP Classes?",
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

const answerBtn = document.getElementById("buttons-1");
const answerBtn2 = document.getElementById("buttons-2");
const answerBtn3 = document.getElementById("buttons-3");
const answerBtn4 = document.getElementById("buttons-4");

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
}

answerBtn.addEventListener("click", greenButton);
function greenButton() {
  console.log("pressed");
  answerBtn.classList.add("answer.btn-correct");
  answerBtn2.classList.remove("show");
  answerBtn3.classList.remove("show");
  answerBtn4.classList.remove("show");
  alert("Yay, that is plus one.");
  +1;
}
answerBtn2.addEventListener("click", redButton1);
answerBtn3.addEventListener("click", redButton2);
answerBtn4.addEventListener("click", redButton3);

function redButton1() {
  console.log("eh");
  alert("Ew, that is minus one.");

  answerBtn.classList.remove("show");
  answerBtn3.classList.remove("show");
  answerBtn4.classList.remove("show");
  -1;
}

function redButton2() {
  console.log("eh");
  alert("Ew, that is minus one.");

  answerBtn.classList.remove("show");
  answerBtn2.classList.remove("show");
  answerBtn4.classList.remove("show");
  +1;
}

function redButton3() {
  console.log("eh");
  alert("Ew, that is minus one.");
  answerBtn.classList.remove("show");
  answerBtn2.classList.remove("show");
  answerBtn3.classList.remove("show");
  -1;
}

function setNextQuestion() {
  showQuestion(shuffledQuestion[currentQuestionNum]);
}

function showQuestion(questions) {
  questionContainerElement.innerText = questions.question;
}

nextBtn.addEventListener("click", newQuestions);
function newQuestions() {
  resetState();
}

function resetState() {
  answerBtn.classList.add("show");
  answerBtn2.classList.add("show");
  answerBtn3.classList.add("show");
  answerBtn4.classList.add("show");
  nextBtn.classList.add("show");
  currentQuestionNum++;
  setNextQuestion();
  if (shuffledQuestion.length > currentQuestionNum + 1) {
  } else {
    startButton.innerText = "restart!";
    startButton.classList.remove("hide");
    startQuiz();
  }
}
//nextButton.addEventListener("click", function newQuestions() {});
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
