const factEl = document.getElementById("fact");
const nextBtn = document.getElementById("next");
const shareBtn = document.getElementById("share");

let fact = "";

// Fetch a random cat fact from the API
function getFact() {
  fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat")
    .then(response => response.json())
    .then(data => {
      fact = data.text;
      factEl.textContent = fact;
    })
    .catch(error => {
      console.error(error);
      factEl.textContent = "Oops! Something went wrong.";
    });
}

// Generate a new random fact when the "Next" button is clicked
nextBtn.addEventListener("click", () => {
  getFact();
});

// Share the current fact on Twitter when the "Share" button is clicked
shareBtn.addEventListener("click", () => {
  const tweetText = encodeURIComponent(`Did you know? ${fact} #CatFacts #RandomFacts`);
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
  window.open(tweetUrl, "_blank");
});

// Initialize the PWA by fetching the first fact
getFact();
