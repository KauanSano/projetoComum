function checkAnswers() {
  var correctAnswers = 0;

  // Obtenha as respostas selecionadas pelo usuário
  var q1 = document.querySelector('input[name="q1"]:checked');
  var q2 = document.querySelector('input[name="q2"]:checked');
  var q3 = document.querySelector('input[name="q3"]:checked');
  var q4 = document.querySelector('input[name="q4"]:checked');
  var q5 = document.querySelector('input[name="q5"]:checked');
  var q6 = document.querySelector('input[name="q6"]:checked');
  var q7 = document.querySelector('input[name="q7"]:checked');
  var q8 = document.querySelector('input[name="q8"]:checked');
  var q9 = document.querySelector('input[name="q9"]:checked');
  var q10 = document.querySelector('input[name="q10"]:checked');

  // Obtenha as respostas corretas
  if (q1 && q1.value === "c") {
    correctAnswers++;
  }

  if (q2 && q2.value === "c") {
    correctAnswers++;
  }

  if (q3 && q3.value === "a") {
    correctAnswers++;
  }

  if (q4 && q4.value === "c") {
    correctAnswers++;
  }

  if (q5 && q5.value === "d") {
    correctAnswers++;
  }

  if (q6 && q6.value === "a") {
    correctAnswers++;
  }

  if (q7 && q7.value === "a") {
    correctAnswers++;
  }

  if (q8 && q8.value === "b") {
    correctAnswers++;
  }

  if (q9 && q9.value === "a") {
    correctAnswers++;
  }

  if (q10 && q10.value === "d") {
    correctAnswers++;
  }

  // Exiba a mensagem de resultado
  var resultMessage = document.getElementById("result");
  if (correctAnswers >= 7) {
    resultMessage.textContent =
      "Parabéns! Você acertou " + correctAnswers + " perguntas.";
  } else {
    resultMessage.textContent =
      "Você falhou. Acertou apenas " + correctAnswers + " perguntas.    ";

    var refreshButton = document.createElement("button");
    refreshButton.textContent = "Tentar novamente?";
    refreshButton.className = "btn-falha";
    resultMessage.appendChild(refreshButton);

    refreshButton.addEventListener("click", function () {
      location.reload();
    });
  }
}
