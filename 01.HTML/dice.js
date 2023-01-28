const btn = document.querySelector("button");

function roll() {
  console.log(Math.floor(Math.random() * 6) + 1);
}

btn.addEventListener("click", roll);
