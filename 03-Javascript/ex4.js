const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

function changeBgColor() {
  if (box1.classList.contains("orange") === false) {
    box1.classList.remove("skyblue");
    box1.classList.add("orange");
  } else if (box1.classList.contains("orange") === true) {
    box1.classList.remove("orange");
    box1.classList.add("skyblue");
  }
}
////////////////////////////////////////////////
function changeBgColor2() {
  if (box2.classList.contains("orange") === false) {
    box2.classList.remove("skyblue");
    box2.classList.add("orange");
  } else if (box2.classList.contains("orange") === true) {
    box2.classList.remove("orange");
    box2.classList.add("skyblue");
  }
}

box1.addEventListener("click", changeBgColor);
