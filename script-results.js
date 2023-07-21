let seconds = 30;
let elem = document.getElementById("demo");
let timerId = 0;
let questionNumber = 0;
let correctAnswer = 0;

let incorrectAnswer = 0;

let posizioneArray = 0;

function countdown() {
  if (seconds == -1) {
    console.log("finish");
    clearTimeout(timerId);
  } else {
    elem.innerHTML = seconds;
    seconds--;
  }
}

function tempo() {
  timerId = setInterval(countdown, 1000);
}
tempo();

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let buttonsContainer = document.querySelector("#btn-container");

const nextButton = document.getElementById("next");
const questionsCreator = () => {
  let h3 = document.querySelector("h3");

  h3.innerHTML = `QUESTION ${questionNumber}<span class = "purple-p">/10</span>`;
  const questionTitle = document.getElementById("question-title");
  console.log(questionTitle);
  let random = Math.floor(Math.random() * questions.length);
  console.log(random);
  posizioneArray = random;
  questionTitle.innerText = `${questions[random].question}`;
  let answers = [];
  for (let j = 0; j < questions[random].incorrect_answers.length; j++) {
    answers.push(questions[random].incorrect_answers[j]);
  }
  answers.push(questions[random].correct_answer);
  console.log(answers);

  for (i = 0; i < answers.length; i++) {
    const firstButtonDiv = document.getElementById("btn" + i);
    firstButtonDiv.disabled = false;
    firstButtonDiv.style.backgroundColor = "rgb(255 255 255 / 11%)";
    firstButtonDiv.classList.add("answers-btn");
    firstButtonDiv.innerText = `${answers[i]}`;
  }

  if (answers.length === 2) {
    document.getElementById("btn" + 2).style.display = "none";
    document.getElementById("btn" + 3).style.display = "none";
  } else {
    document.getElementById("btn" + 2).style.display = "";
    document.getElementById("btn" + 3).style.display = "";
  }

  seconds = 30;
  timerId = 0;
};

function onVerifica(id) {
  // const titolo = document.getElementById("question-title").innerText;
  // const risposta = questions.find(a => a.question === titolo);

  risposta = questions[posizioneArray];
  const rispostaData = document.getElementById(id);

  questionNumber++;
  console.log("numero", questionNumber);

  if (risposta.correct_answer === rispostaData.innerText) {
    rispostaData.style.backgroundColor = "green";
    correctAnswer++;
  } else {
    rispostaData.style.backgroundColor = "red";
    incorrectAnswer++;
  }

  console.log("risposta esetta: " + correctAnswer + "     risposta sbagliata " + incorrectAnswer);

  for (let index = 0; index < 4; index++) {
    document.getElementById("btn" + index).disabled = "true";
  }
  newPage();
}

nextButton.onclick = questionsCreator;

const newPage = () => {
  if (questionNumber === 10) {
    const myOldBody = document.getElementsByTagName("body")[0];
    console.log("container", myOldBody);
    let title = "";
    let evaluation = "";
    let certificate = "";

    if (correctAnswer >= 6) {
      title = "Congratulations!";
      evaluation = "You passed the exam.";
      certificate =
        " We'll send you the certificate in few minutes. Check your email (including promotions /  spam folder)";
    } else {
      title = "Bad Luck!";
      evaluation = "";
      certificate = "You didn't pass the exam.";
    }

    myOldBody.innerHTML = `<div class= "container"> <header>
    <img class="logo" src="./assets (1)/epicode_logo.png" alt="epicode-logo" />
  </header>

  <main>
    <div class="main-question">
      <h1 class="title">Results</h1>
      <h3 class="title under-title">The summary of your answers:</h3>
    </div>
  </main>
  <div class="correct-left">
    <h2 class="correct-title">Correct</h2>
    <div>
      <h2 class="percentage bold">${(correctAnswer / 10) * 100}%</h2>
      <div>
        <h5 class="number-questions">${correctAnswer}/10 questions</h5>
      </div>
    </div>
  </div>
  <div class="chart-container">
    <div class="donut">
      <div class="hole">
        <h6>${title}<br /><span>${evaluation}</span></h6>
        <p>
        ${certificate}
        </p>
      </div>
    </div>
  </div>
  <div class="wrong-right">
    <h2 class="correct-title">Wrong</h2>
    <div>
      <h2 class="percentage bold">${100 - (correctAnswer / 10) * 100}%</h2>
      <div>
        <h5 class="number-questions">${incorrectAnswer}/10 questions</h5>
      </div>
    </div>
  </div>

  <footer class="footer-results">
  <form action="./feedback.html">
    <button class="feedback-button" type="submit">RATE US</button>
  </form>
  </footer>
  </div>`;
  }
};
