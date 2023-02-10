// let i = 0;

// while (i < 10) {
//   console.log(`인사를 ${i + 1} 번째 드립니다.`);
//   i++;
// }

//do -while 비교=

// let index = 0;

// do {
//   console.log(`${index}입니다.`);
// } while (index < 10);

let a = 2;

while (a < 10) {
  let b = 1;
  console.log(`-----${a}단--------`);
  while (b < 10) {
    console.log(`${a} x ${b} = ${a * b}`);
    b++;
  }
  a++;
}
