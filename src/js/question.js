const questions = [
  {
    question: "Have you talked to Mr. Erlenwein?",
    answers: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
      { text: "i dont know", correct: false },
      {text: "i don't wanna say anything", correct: false }
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
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
];

for (i = 0; i < questions.length; i++) {
  const specific = questions[i].answers;
  console.log(specific);
}

//questions[i].answers.length.array.forEach((answers) => {});

export { questions };
