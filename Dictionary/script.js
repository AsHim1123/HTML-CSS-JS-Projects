const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEL = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

fetchAPI = async (word) => {
  try {
    infoTextEl.style.display = "block";
    meaningContainerEL.style.display = "none  ";
    infoTextEl.innerText = `Searching the meaning of "${word}"...`;
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(URL).then((res) => res.json());
    if (result.title) {
      infoTextEl.style.display = "none";
      meaningContainerEL.style.display = "block";
      titleEl.innerText = word;
      meaningEl.innerText = "Tere Baap ney banaya thaa kya yeh word";
      audioEl.style.display = "none";
    } else {
      infoTextEl.style.display = "none";
      meaningContainerEL.style.display = "block";
      audioEl.style.display = "inline-flex";
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    console.log(error);
    infoTextEl.innerText = `An error happened!!! Try again later.`;
  }
};

inputEl.addEventListener("keyup", (event) => {
  if (event.target.value && event.key == "Enter") {
    fetchAPI(event.target.value);
  }
});
