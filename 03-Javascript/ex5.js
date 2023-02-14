// function deleteThis(t) {
//   t.remove();
// }

///////이벤트.target 활용
const listEl = document.querySelector("li");

listEl.addEventListener("click", (e) => {
  e.target.remove();
});
