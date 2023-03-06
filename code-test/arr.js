// const fruits = ["사과", "파인애플", "수박", "포도", "아륀지"];

// let obj = fruits.map((item, index) => {
//   return {
//     id: index,
//     name: item,
//   };
// });

// console.log(obj);

// const num = [1, 2, 3, 4, 5];

// let num2 = num.map((num) => num * 4);

// console.log(num2);

//실습
// let arr = [];
// let sum = 0;
// for (let i = 1; i <= 100; i += 1) {
//   arr.push(i);
// }
// arr.map(el => sum += el);
// console.log(sum);

//실습2

// let fruits1 = [
//   "사과",
//   "딸기",
//   "파인애플",
//   "수박",
//   "참외",
//   "오렌지",
//   "자두",
//   "망고",
// ];
// let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고", "포도"];

// let sameArr = [];
// let diffArr = [];

// for (let f of fruits1) {
//   fruits2.includes(f) ? sameArr.push(f) : diffArr.push(f);
// }

// for (let f2 of fruits2) {
//   if (fruits1.includes(f2) !== true) {
//     diffArr.push(f2);
//   }
// }
// console.log(sameArr);
// console.log(diffArr);

// const fruits = ["Apple", "Banana", "Cherry"];
// const findResult = fruits.findIndex((item) => /^A/.test(item));

// const nums = [1, 2, 3, 4, 5];
// const sumResult = nums.reduce((acc, item, index) => {
//   return acc + item;
// }, 0);

// console.log(sumResult);

// const nums = [2, -5, -123, -5480, 24, 0, -69, 349, 3];

// const result1 = nums.reduce(
//   (acc, curr) => {
//     return curr > 0 ? acc[0] + 1 : acc[1] + 1;
//   },
//   [0, 0]
// );

console.log(result1);

// 실습
let numArr = [];
for (let i = 1; i <= 100; i += 1) {
  numArr.push(i);
}
const answer = numArr.reduce((acc, curr) => acc + curr, 0);

console.log(answer);

const fruits = ["사과", "바나나", "포도", "귤", "망고"];

function conLog(...rest) {
  rest.map((el) => {
    console.log(el);
  });
}

// conLog(...fruits);

const str = "apple";
const newStr = [...str];
const strToArr = str.split("");

// console.log(newStr, strToArr);
