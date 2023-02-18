const num = -999;

// console.log(Math.abs(num));

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(Math.max(...numArr));
// console.log(Math.min(...numArr));

let maxIndex = numArr.indexOf(Math.max(...numArr));
let secondMAx = numArr.splice(maxIndex, 1);
// console.log(Math.max(...numArr) * secondMAx);
// console.log(secondMAx, numArr);

// const dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

//실습
let arr = [];
let nums = [-1.23, 13, 14.52, -33.53, 30];

let maxNum = Math.max(...nums);
let minNum = Math.min(...nums);

for (let num of nums) {
  arr.push(Math.abs(num));
}
let average = arr.reduce((total, el) => total + el) / arr.length;

let randNum = Math.floor(Math.random() * 101);

//최댓값, 최솟값
console.log(Math.floor(maxNum), Math.floor(minNum));
//평균
console.log(average);
//난수 생성
console.log(randNum);
