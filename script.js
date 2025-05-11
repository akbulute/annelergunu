const heart = document.getElementById("heart");
const flap = document.getElementById("flap");
const paper = document.getElementById("paper");
const fullNote = document.getElementById("fullNote");

let flapOpened = false;
let noteOpened = false;

heart.addEventListener("click", () => {
  if (!flapOpened) {
    flap.style.transform = "rotateX(-180deg)";
    paper.classList.add("show");
    flapOpened = true;
  }
});

paper.addEventListener("click", () => {
  if (flapOpened && !noteOpened) {
    paper.classList.remove("show");
    paper.classList.add("opened");
    fullNote.style.display = "block";
    noteOpened = true;
  }
});
