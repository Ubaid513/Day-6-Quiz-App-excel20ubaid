function checkAnswer() {
  const answer = document.getElementById("answer-input").value;
  if (answer.toLowerCase() == "delhi") {
    document.getElementById("result").innerHTML = "Correct👍"
  } else {
    document.getElementById("result").innerHTML = "Incorrect😨"
  }
}

function checkAnswer2() {
  const answer = document.getElementById("answer-input-2").value;
  if (answer.toLowerCase() == "yes") {
    document.getElementById("result-2").innerHTML = "😍Aww thank you so much"
  } else {
    document.getElementById("result-2").innerHTML = "Why you have to be so mean😭"
  }
}
