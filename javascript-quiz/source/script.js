const playerName = document.querySelector("#player-name").value;
const questions = [
  {
    id: 1,
    question: "Is JavaScript case sensitive?",
    alternatives: {
      a: "Yes",
      b: "No",
    },
    correct: "Yes",
  },
  {
    id: 2,
    question: "How do you declare a function in Js?",
    alternatives: {
      a: "function = my.function{}",
      b: "function myFunction(){}",
    },
    correct: "function myFunction(){}",
  },
  {
    id: 3,
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    alternatives: {
      a: "script name:xxx.js",
      b: "script src='xxx.js",
    },
    correct: "script src='xxx.js",
  },
  {
    id: 4,
    question: "Where is the correct place to insert a JavaScript?",
    alternatives: {
      a: "Both the <head> section and the <body> section are correct",
      b: "in the <head> section",
    },
    correct: "Both the <head> section and the <body> section are correct",
  },
  {
    id: 5,
    question: "Inside which HTML element do we put the JavaScript?",
    alternatives: {
      a: "javascript",
      b: "script",
    },
    correct: "script",
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
  ul.className = "testing";
}

// document.addEventListener("click", (e) => {
//   console.log(e.target);
// });
// document.getElementById("parent-list").addEventListener("click",function(e) {
//   // e.target is our targetted element.
//               // try doing console.log(e.target.nodeName), it will result LI
//   if(e.target && e.target.nodeName == "LI") {
//       console.log(e.target.id + " was clicked");
//   }
// });
