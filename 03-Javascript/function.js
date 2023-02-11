function helloFunc() {
  console.log("안녕");
}

helloFunc();

function returnFunc() {
  console.log("return");
  return console.log("return to base");
}

let str = returnFunc();

let noNameFunc = function () {
  return console.log("noName");
};

let str = noNameFunc();

function sayHello(name) {
  console.log(`Hello~${name}`);
}

sayHello("henry");

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 20));

const squre = (num = 2) => {
  return num ** 2;
};

console.log(squre());

//실습!
const triangle = (밑변, 높이) => {
  return (밑변 * 높이) / 2;
};

const circle = (반지름) => {
  return 반지름 ** 2 * 3.14;
};

const pythagoras = (a, b) => {
  return Math.sqrt(a ** 2 + b ** 2);
};

console.log(triangle(3, 4));
console.log(circle(5));
console.log(pythagoras(9, 12));
