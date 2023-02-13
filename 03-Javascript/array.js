// const line = ["조성희", "김계환", "김범석", "김정혁"];

// line.push("양재연");

// line.pop();

// line.unshift("양재연");

// for (let i = 0; i < line.length; i += 1) {
//   console.log(line[i]);
// }

// console.log(`${pororo.name}의 나이는 ${pororo.age}`);
// console.log(`${pororo["name"]}의 나이는 ${pororo["age"]}`);

// pororo.gender = "male";

// pororo["height"] = "192";

// delete pororo.gender;

// for (let key in pororo) {
//   console.log(key);
//   console.log(pororo[key]);
// }

const pororo = {
  name: "뽀로로",
  age: 7,
  height: 110,
  weight: 30,
  greeting() {
    console.log(`이름은 ${this.name} 입니다.`);
  },
};

pororo.showHeight = function () {
  console.log(`키는 ${this.height}cm 입니다.`);
};

pororo.greeting();
pororo.showHeight();
