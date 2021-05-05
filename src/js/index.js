import { questions } from "./question";

const questionContainer = document.getElementById("questions");
const answerButton = document.querySelectorAll(".answer-btn");
console.log(answerButton);

const startButton = document.getElementById("start-button");

let shuffledQuestion, currentQuestionNum;

startButton.addEventListener("click", startQuiz);

const nextBtn = document.getElementById("next-button");
function startQuiz() {
  startButton.classList.add("hide");
  answerButton.forEach(function (oneButton) {
    oneButton.classList.add("show");
  });
  nextBtn.classList.add("show");
  shuffledQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionNum = 0;
  showQuestion(shuffledQuestion[currentQuestionNum]);
  setNextQuestion();
  selectAnswer();
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  // question.answers.forEach((answer) => {
  //   const button = document.createElement("button");
  //   button.innerText = answer.text;
  //   button.classList.add(".answer-btn");
  // });
}

function selectAnswer() {
  console.log(Array.from(answerButton));
  for (let i = 0; i < answerButton.length; i++) {
    answerButton[i].addEventListener("click", selected);
  }
  function selected() {
    alert("recieved");
    answerButton.forEach(function (oneButton) {
      oneButton.classList.remove("show");
    });
  }
}

function setNextQuestion() {
  if (questions[i] > questions.length) {
    nextBtn.classList.remove("show");
  }
  nextBtn.addEventListener("click", nextOne);
  function nextOne() {
    console.log("hello");
    currentQuestionNum++;
    document.getElementById("questions").innerHTML =
      questions[currentQuestionNum]["question"];
  }
}

//function showQuestion(questions) {
// questionContainerElement.innerText = questions.question;
//const answerButtons = document.querySelectorAll(".answer-btn"); //node list of answer buttons
// const answerButtonsArr = Array.from(answerButtons); //make an array
// answerButtonsArr.forEach((btn) => {
//   btn.addEventListener("click", function (event) {
//     console.log(event.target.innerText);
//event.target.innerText = questions.answerButtonsArr;
//     });
//   });
// }
// showQuestion();

// const answerBtn = document.getElementById("buttons-1");
// const answerBtn2 = document.getElementById("buttons-2");
// const answerBtn3 = document.getElementById("buttons-3");
// const answerBtn4 = document.getElementById("buttons-4");

// function resetState() {
//   answerBtn.classList.add("show");
//   answerBtn2.classList.add("show");
//   answerBtn3.classList.add("show");
//   answerBtn4.classList.add("show");
//   nextBtn.classList.add("show");
//   currentQuestionNum++;
//   setNextQuestion();
//   if (shuffledQuestion.length > currentQuestionNum + 1) {
//   } else {
//     startButton.innerText = "restart!";
//     startButton.classList.remove("hide");
//     startQuiz();
//   }
// }

// answerBtn.addEventListener("click", greenButton);
// function greenButton() {
//   answerBtn.classList.add("answer.btn-correct");
//   answerBtn2.classList.remove("show");
//   answerBtn3.classList.remove("show");
//   answerBtn4.classList.remove("show");
//   alert("Yay, that is plus one.");
//   +1;
// }
// answerBtn2.addEventListener("click", redButton1);
// answerBtn3.addEventListener("click", redButton2);
// answerBtn4.addEventListener("click", redButton3);

// function redButton1() {
//   alert("Ew, that is minus one.");

//   answerBtn.classList.remove("show");
//   answerBtn3.classList.remove("show");
//   answerBtn4.classList.remove("show");
//   -1;
// }

// function redButton2() {
//   alert("Ew, that is minus one.");

//   answerBtn.classList.remove("show");
//   answerBtn2.classList.remove("show");
//   answerBtn4.classList.remove("show");
//   +1;
// }

// function redButton3() {
//   alert("Ew, that is minus one.");
//   answerBtn.classList.remove("show");
//   answerBtn2.classList.remove("show");
//   answerBtn3.classList.remove("show");
//   -1;
// }

// nextBtn.addEventListener("click", newQuestions);
// function newQuestions() {
//   resetState();
// }

// nextButton.addEventListener("click", function newQuestions() {});
// function showAnswer(questions) {
//   answerBtn.innerText.html = questions.answers;
// }

// needAnswer();

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
