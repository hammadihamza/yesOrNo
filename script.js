const word_btn = document.getElementById("word_btn");
const word_result = document.getElementById("word_result");

word_btn.addEventListener("click", getRandomWord);

function getRandomWord() {
  fetch("https://yesno.wtf/api")
    .then((res) => res.json())
    .then((data) => {
      let word = data.answer;
      word_result.innerHTML = `<p>${word}
      </p>
      <br>
      <img src="${data.image}">`;
    });
}
