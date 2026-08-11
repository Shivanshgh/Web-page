function openEnvelope() {

  const envelope =
    document.getElementById("envelope");

  envelope.classList.toggle("open");
}



const letter =
  document.getElementById("letter");

const scrollHint =
  document.getElementById("scrollHint");


letter.addEventListener("scroll", () => {

  if (letter.scrollTop > 10) {

    scrollHint.style.display = "none";

  }

});