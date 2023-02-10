// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 1) continue;
//   console.log(`${i}번째 입니다.`);
//   if (i === 16) {
//     break;
//   }
// }

//실습
let sum = 0;

for (let i = 1; i <= 1000; i += 1) {
  if (i % 2 === 1) continue;
  {
    sum += i;
  }
}
console.log(sum);
