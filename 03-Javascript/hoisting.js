//함수 선언문과 표현식의 차이(호이스팅 개념)  선언문 -- 함수 선언 이전에 호출이 가능, 표현식 -- 함수 선언 이전에 호출 불가능

Hello();

function Hello() {
  console.log("Hello");
}

let sayHello = function () {
  console.log("Hello");
};

sayHello();

//화살표 함수

let bye = () => {
  console.log("bye");
};

bye();

//함수 선언문 방식
function sum(num1, num2) {
  return num1 + num2;
}
//함수 표현식
let ssum = function (num1, num2) {
  return num1 + num2;
};
//화살표 함수 (표현식과 같이 호이스팅이 되지 않음)
let sssum = (num1, num2) => {
  return num1 + num2;
};
