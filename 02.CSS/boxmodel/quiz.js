const sack = [
  { num: 1, fake: false },
  { num: 2, fake: false },
  { num: 3, fake: true },
  { num: 4, fake: false },
  { num: 5, fake: false },
  { num: 6, fake: false },
  { num: 7, fake: false },
  { num: 8, fake: false },
  { num: 9, fake: false },
  { num: 10, fake: false },
];

function quiz() {
  const sum = [];

  // sack.map((numsack) => {
  //   if (numsack.fake === false) {
  //     sum.push(numsack.num * 10);
  //   } else {
  //     sum.push(numsack.num * 9);
  //   }
  //   return sum;
  // });

  sack.map((numsack) => {
    numsack.fake === false
      ? sum.push(numsack.num * 10)
      : sum.push(numsack.num * 9);
    return sum;
  });

  const Arr = sum.concat();
  const total = Arr.reduce((total, el) => total + el);

  if (total === 550) {
    console.log("모두 금화입니다.");
  } else if (total < 550) {
    console.log(`${550 - total}번째 자루가 가짜 금화입니다.`);
  }
}

quiz();
