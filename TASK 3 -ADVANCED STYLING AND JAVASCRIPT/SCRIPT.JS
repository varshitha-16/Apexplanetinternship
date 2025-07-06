
const quiz = [
  { q: "which company developed javascript?", options: ["microsoft", "netscape", "google"], answer: "netscape" },
  { q: "which of the following is a javascript datatype ?", options: ["number", "float", "character"], answer: "number" }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[current];
  const container = document.getElementById("quiz-container");
  container.innerHTML = `<p>${q.q}</p>` + q.options.map(opt =>
    `<label><input type="radio" name="answer" value="${opt}"> ${opt}</label><br>`).join('');
}

function nextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return alert("Please select an answer!");

  if (selected.value === quiz[current].answer) score++;

  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("result").textContent = `You scored ${score}/${quiz.length}`;
    document.getElementById("quiz-container").innerHTML = "";
  }
}

loadQuestion();


async function getJoke() {
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    document.getElementById("joke").textContent = "Failed to fetch joke. Try again!";
  }
}
