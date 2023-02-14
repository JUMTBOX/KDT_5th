const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const input = document.querySelector("input");

box1.innerHTML = `<a href="http://naver.com" target="blank">네이버로 이동</a>`;
box2.textContent = "박스 내용 및 스타일 변경";
box2.style.backgroundColor = "orange";
// input.setAttribute("placeholder", "아이디를 입력하세요.");
input.placeholder = "아이디를 입력하세요.";
