// 기본 반복문

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr.length; i += 1) {
  console.log(i);
}

for (let i of arr) {
  console.log(i);
}

//이중 반복문(최대한 지양)

for (let i = 0; i < 3; i += 1) {
  console.log(`상위 for문 입니다. ${i + 1}번째 작동 중`);
  for (let j = 0; j < 5; j += 1) {
    console.log(`       하위 for 문 입니다. i는 ${i}, j는 ${j} 입니다!`);
  }
}

for (let i = 2; i < 10; i += 1) {
  for (let j = 1; j < 10; j += 1) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//실습1
let answer = 0;
for (let i = 1; i <= 100; i += 1) {
  if (i % 2 == 0 || i % 5 == 0) {
    answer += i;
  }
}
console.log(answer);
