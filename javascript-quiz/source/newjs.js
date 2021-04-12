const quizContainer = document.querySelector(".quiz");
const resultsContainer = document.querySelector(".results");
const submitButton = document.getElementById("submit-button");
const questions = [
  {
    id: 1,
    question: "Is JavaScript case sensitive?",
    alternatives: {
      a: "Yes",
      b: "No",
    },
    correct: "a",
  },
  {
    id: 2,
    question: "How do you declare a function in Js?",
    alternatives: {
      a: "function = my.function{}",
      b: "function myFunction(){}",
    },
    correct: "b",
  },
  {
    id: 3,
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    alternatives: {
      a: "script name:xxx.js",
      b: "script src='xxx.js",
    },
    correct: "b",
  },
  {
    id: 4,
    question: "Where is the correct place to insert a JavaScript?",
    alternatives: {
      a: "Both the <head> section and the <body> section are correct",
      b: "in the <head> section",
    },
    correct: "a",
  },
  {
    id: 5,
    question: "Inside which HTML element do we put the JavaScript?",
    alternatives: {
      a: "javascript",
      b: "script",
    },
    correct: "b",
  },
  {
    id: 6,
    question: "Who invented JavaScript?",
    alternatives: {
      a: "Douglas Crockford",
      b: "Brendan Eich",
    },
    correct: "b",
  },
  {
    id: 7,
    question: "Which one of these is a JavaScript package manager?",
    alternatives: {
      a: "Node.js",
      b: "npm",
    },
    correct: "b",
  },
  {
    id: 8,
    question: "Which tool can you use to ensure code quality?",
    alternatives: {
      a: "ESLint",
      b: "jQuery",
    },
    correct: "b",
  },
];
function startQuiz() {
  setTimeout(() => {
    document.querySelector(".player-inputs").style.display = "none";
    document.querySelector(".quiz-area").style.display = "flex";
  }, 400);
  buildQuiz();
}
submitButton.addEventListener("click", showResults);

function buildQuiz() {
  const output = [];
  questions.forEach((question, questionIndex) => {
    const answers = [];
    for (alternative in question.alternatives) {
      answers.push(
        `<label>
            <input type="radio" name="question${questionIndex}" value="${alternative}">
            ${alternative} :
            ${question.alternatives[alternative]}
          </label>`
      );
    }
    output.push(
      `<div class="question"> ${question.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
    );
  });
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = document.querySelectorAll(".answers");
  let score = 0;

  questions.forEach((question, questionIndex) => {
    const answerContainer = answerContainers[questionIndex];
    const selector = `input[name=question${questionIndex}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === question.correct) {
      score++;
      answerContainers[questionIndex].style.color = "green";
    } else {
      answerContainers[questionIndex].style.color = "red";
    }
  });
  resultsContainer.innerHTML = `${score} out of ${questions.length}`;
}
