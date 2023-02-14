// let helloTest = "H-E-L-L-O";
// let helloTestArr = helloTest.split("-").reverse().join("");

// console.log(helloTestArr);

// 실습
const kdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];
const result1 = kdtCurriculum.shift().split("").reverse().join("");
const result2 = kdtCurriculum.pop().split("").reverse().join("");
console.log(result1);
console.log(result2);
