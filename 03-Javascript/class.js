//class

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  will() {
    console.log(`${this.brand}의 ${this.color} 색깔의 차가 출시 예정입니다.`);
  }
}

let n = new Car("현대", "검정");
n.will();

//생성자 함수 버전

// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.will = function () {
//     console.log(`${this.brand}의 ${this.color} 색깔의 차가 출시 예정입니다.`);
//   };
// }

// let n = new Car("현대", "검정");
// n.will();
