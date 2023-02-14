const orange = document.querySelector(".orange");
const skyBlue = document.querySelector("#skyblue");
const secChild = document.querySelector("ul> *:nth-child(2)");
const unordered = document.querySelector("ul");

secChild.classList.add("orange");

// console.log(orange);
// console.log(skyBlue);
// console.log(secChild);

if (orange.classList.contains("orange") === true) {
  orange.classList.remove("orange");
}

// console.log(orange);

const scream = () => {
  let mkLi = document.createElement("li");
  mkLi.classList.add("orange");
  mkLi.innerText = "오렌지 군단";
  unordered.appendChild(mkLi);
};

secChild.addEventListener("click", scream);
