const playerName = document.querySelector("#player-name").value;
const questions = [
  {
    id: 1,
    question: "JavaScript is case sensitive?",
    alternatives: {
      a: "True",
      b: "False",
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
];

function startQuiz() {
  setTimeout(() => {
    document.querySelector(".player-inputs").style.display = "none";
    document.querySelector(".quiz-area").style.display = "flex";
  }, 400);
  renderQuestions();
}

function renderQuestions() {
  for (question of questions) {
    createQuestionElements();
  }
}

function createQuestionElements() {
  index = question.id;
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const ul = document.createElement("ul");
  const alternative1 = document.createElement("li");
  const alternative2 = document.createElement("li");
  h2.innerHTML = `Question ${question.id} of ${questions.length}`;
  h3.innerHTML = question.question;
  alternative1.innerHTML = question.alternatives.a;
  alternative2.innerHTML = question.alternatives.b;
  div.append(h2);
  div.append(h3);
  div.append(ul);
  ul.appendChild(alternative1);
  ul.appendChild(alternative2);
  document.querySelector(".quiz-area").append(div);
  alternative1.className = "quiz-alternative";
  alternative2.className = "quiz-alternative";
}

function checkAnswer() {
  const li = document.querySelectorAll(".quiz-alternative");
  for (question of questions) {
    addEventListener("click", function () {
      if (li === question.correct) {
        console.log("certo");
      }
      console.log("nao");
    });
  }
}
