const quizData = [
  {
    question: "En aktif Twitter Kullanicisi?",
    a: "Fatih Kadir Akin",
    b: "Ilker Kurtel",
    c: "Didem Kucukkaraaslan",
    d: "Azmi Mengu",
    e: "Onur Arslan",
    correct: "a",
  },
  {
    question: "En Komik Twitter Kullanicisi?",
    a: "Fatih Kadir Akin",
    b: "Ilker Kurtel",
    c: "Didem Kucukkaraaslan",
    d: "Azmi Mengu",
    e: "Onur Arslan",
    correct: "b",
  },
  {
    question: "En gezen Twitter Kullanicisi?",
    a: "Fatih Kadir Akin",
    b: "Ilker Kurtel",
    c: "Didem Kucukkaraaslan",
    d: "Azmi Mengu",
    e: "Onur Arslan",
    correct: "c",
  },
  {
    question: "En uretken Twitter Kullanicisi?",
    a: "Fatih Kadir Akin",
    b: "Ilker Kurtel",
    c: "Didem Kucukkaraaslan",
    d: "Azmi Mengu",
    e: "Onur Arslan",
    correct: "d",
  },
  {
    question: "En az Twitter Kullanicisi?",
    a: "Fatih Kadir Akin",
    b: "Ilker Kurtel",
    c: "Didem Kucukkaraaslan",
    d: "Azmi Mengu",
    e: "Onur Arslan",
    correct: "e",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  deselectedAnswers();

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  // console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2> Test tamamlandi, ${score * 20} puan aldiniz🥳 </h2>
      <button class="submit" onClick="location.reload()">Tekrar Deneyiniz 🌀 </button>
      `;
    }
  }
});
