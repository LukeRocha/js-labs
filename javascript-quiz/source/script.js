const select = document.querySelector;
let points = 0;
let questions = [
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
      a: "<script name:xxx.js>",
      b:
        "The forEach function don't have to return anything and map return a new array",
    },
    correct: "b",
  },
  {
    id: 4,
    question: "Where is the correct place to insert a JavaScript?",
    alternatives: {
      a: "Both the <head> section and the <body> section are correct",
      b: "<head>",
    },
    correct: "a",
  },
  {
    id: 5,
    question: "Inside which HTML element do we put the JavaScript?",
    alternatives: {
      a: "<javascript>",
      b: "<script>",
    },
    correct: "b",
  },
];

function questionTest() {}
