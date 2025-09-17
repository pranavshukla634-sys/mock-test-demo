const questions = [
  { q: "भारत की राजधानी क्या है?", options: ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"], answer: 2 },
  { q: "5 + 7 = ?", options: ["11", "12", "13", "10"], answer: 1 },
  { q: "सबसे बड़ा ग्रह कौन सा है?", options: ["पृथ्वी", "शनि", "बृहस्पति", "मंगल"], answer: 2 }
];

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quiz = document.getElementById("quiz");
const qNumber = document.getElementById("q-number");
const qTotal = document.getElementById("q-total");
const totalQuestionsSpan = document.getElementById("total-questions");
const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");
const scoreSpan = document.getElementById("score");
const scoreTotal = document.getElementById("score-total");
const retryBtn = document.getElementById("retry-btn");
const quitBtn = document.getElementById("quit-btn");

let current = 0;
let score = 0;
let selected = null;

function init() {
  totalQuestionsSpan.textContent = questions.length;
  qTotal.textContent = questions.length;
  scoreTotal.textContent = questions.length;
}

function showQuestion(i) {
  const item = questions[i];
  qNumber.textContent = i + 1;
  questionText.textContent = item.q;
  optionsDiv.innerHTML = "";
  selected = null;
  nextBtn.disabled = true;

  item.options.forEach((opt, idx) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = opt;
    div.onclick = () => selectOption(div, idx);
    optionsDiv.appendChild(div);
  });
}

function selectOption(elem, idx) {
  Array.from(optionsDiv.children).forEach(c => c.classList.remove("selected"));
  elem.classList.add("selected");
  selected = idx;
  nextBtn.disabled = false;
}

startBtn.onclick = () => {
  startScreen.classList.add("hidden");
  quiz.classList.remove("hidden");
  current = 0;
  score = 0;
  showQuestion(current);
};

nextBtn.onclick = () => {
  if (selected === null) return;
  if (selected === questions[current].answer) score++;
  current++;
  if (current < questions.length) {
    showQuestion(current);
  } else {
    quiz.classList.add("hidden");
    result.classList.remove("hidden");
    scoreSpan.textContent = score;
  }
};

retryBtn.onclick = () => {
  result.classList.add("hidden");
  startScreen.classList.remove("hidden");
};

quitBtn.onclick = () => {
  quiz.classList.add("hidden");
  startScreen.classList.remove("hidden");
};

init();
