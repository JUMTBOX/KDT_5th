// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }
//   will() {
//     console.log(`${this.brand}의 ${this.color} 색깔의 차가 출시 예정입니다`);
//   }
// }

// class ElecCar extends Car {
//   constructor(brand, color, fuel) {
//     super(brand, color);
//     this.fuel = fuel;
//   }
//   will() {
//     super.will();
//     console.log(`그리고 이 차는 ${this.fuel}로 움직입니다.`);
//   }
// }

// let tesla = new ElecCar("테슬라", "빨강", "전기");
// tesla.will();

//실습

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return super.getArea();
  }
}

let rect = new Rectangle(10, 20);

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return super.getArea() / 2;
  }
}

let triangle = new Triangle(10, 20);

class Circle extends Shape {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * 3.14;
  }
}

let circle = new Circle(10, 20, 5);

console.log(`사각형의 넓이는 ${rect.getArea()}입니다.`);
console.log(`삼각형의 넓이는 ${triangle.getArea()}입니다.`);
console.log(`원의 넓이는 ${circle.getArea().toFixed(2)} 입니다.`);

///////////////////생성자 함수로 super구현

// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.drive = function () {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행중입니다.`);
//   };
// }

// function ElecCar(brand, color, fuel) {
//   Car.call(this, brand, color);
//   this.fuel = fuel;

//   //오버라이딩
//   this.drive = function () {
//     console.log(
//       `${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 주행중입니다.`
//     );
//   };
// }

// ElecCar.prototype = Object.create(Car.prototype);
// ElecCar.prototype.constructor = ElecCar;

// const tesla = new ElecCar("테슬라", "파랑", "전기");
// tesla.drive();
