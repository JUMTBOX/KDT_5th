// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const returnObj = Object.assign(obj1, obj2);
// const returnObj2 = { ...obj1, ...obj2 };

// console.log(obj1);
// console.log(obj2);
// console.log(returnObj);
// console.log(returnObj2);
// console.log(obj1 === returnObj);

const user = {
  name: "양재연",
  password: 1234,
  city: "daejeon",
};

const { name: newName, password, city, email = "yjey12@naver.com" } = user;

console.log(email);
