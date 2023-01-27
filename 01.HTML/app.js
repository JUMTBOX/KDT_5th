const btn = document.querySelector("button");

const func = () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
};

btn.addEventListener("click", func);
