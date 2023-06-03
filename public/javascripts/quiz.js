function checkAnswers() {
    var correctAnswers = 0;
    
    // Obtenha as respostas selecionadas pelo usuário
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');

    // Obtenha as respostas corretas
    if (q1 && q1.value === "c") {
      correctAnswers++;
    }
    
    if (q2 && q2.value === "a") {
        correctAnswers++;
    }

    if (q3 && q3.value === "c") {
        correctAnswers++;
    }

    if (q4 && q4.value === "a") {
        correctAnswers++;
    }

    if (q5 && q5.value === "d") {
        correctAnswers++;
    }
    
    // Exiba a mensagem de resultado
    var resultMessage = document.getElementById("result");
    if (correctAnswers >= 3) {
      resultMessage.textContent = "Parabéns! Você acertou " + correctAnswers + " perguntas.";
      q1.value = "";
    } else {
      resultMessage.textContent = "Você falhou. Acertou apenas " + correctAnswers + " perguntas.";
    }
  }