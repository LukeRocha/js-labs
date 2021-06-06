//Content containers
const quizContainer = document.querySelector(".quiz");
const resultsContainer = document.querySelector(".results");
const submitButton = document.getElementById("submit-button");
// Questions
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
      a: "In the head section",
      b: "Both the head section and the body section are correct",
    },
    correct: "b",
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

//DOM manipulation to Hide the intro container
function startQuiz() {
  document.querySelector(".player-inputs").style.display = "none";
  document.querySelector(".quiz-area").style.display = "flex";
  buildQuiz();
}

//Render the questions

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
      `<div class="slide">
        <div class="question">${question.question} </div>
        <div class="answers">${answers.join("")} </div>
        </div>`
    );
  });
  quizContainer.innerHTML = output.join("");
}

//Buttons to slide throught questions
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}
showSlide(currentSlide);
//Evaluete the quiz
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

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener("click", showResults);
