// if문

// if (false) {
//   console.log("true 입니다.");
// } else if (true) {
//   console.log("elseif 문 내부입니다.");
// } else {
//   console.log("false 입니다.");
// }

//조건 비교

// let age = 43;

// if (age > 45) {
//   console.log("늙었습니다.");
// } else if (age >= 20 && age <= 40) {
//   console.log("MZ 입니다.");
// } else {
//   console.log("X세대 입니다.");
// }

//nested if condition

// let isOld = true;
// let isRich = false;

// if (isOld) {
//   if (!isRich) {
//     console.log("망했어요.");
//   } else {
//     console.log("낫 배드");
//   }
// }

// let gender = "M";
// let name = "Tom";
// let isAdult = true;

// if ((gender === "F" && name === "Jane") || isAdult === true) {
//   console.log("통과");
// } else {
//   console.log("돌아가");
// }

// let person = {
//   isAdult: true,
//   isVip: false,
//   isDrunken: true,
//   money: true,
// };

// function guard() {
//   if (((person.isAdult || person.isVip) && person.isDrunken) || person.money) {
//     console.log("통과");
//   } else {
//     console.log("돌아가");
//   }
// }

// guard();

// let gender = { gen: "M", height: 190 };

// switch (gender.gen) {
//   case "F":
//     console.log("여성입니다.");
//     break;
//   case "M":
//     console.log("남성입니다.");
//     break;
//   default:
//     console.log("외계인 입니다.");
//     break;
// }

// //삼항 연산자

// gender.gen === "M" && gender.height > 175
//   ? console.log("키 큰 남성 입니다.")
//   : console.log("음...");

let day = new Date().getDay();
let currentDay;
if (day == 0) {
  currentDay = "일요일";
} else if (day == 1) {
  currentDay = "월요일";
} else if (day == 2) {
  currentDay = "화요일";
} else if (day == 3) {
  currentDay = "수요일";
} else if (day == 4) {
  currentDay = "목요일";
} else if (day == 5) {
  currentDay = "금요일";
} else {
  currentDay = "토요일";
}
console.log(currentDay);
// alert(currentDay);

// switch (day) {
//   case 0:
//     console.log("일요일 입니다.");
//     break;
//   case 1:
//     console.log("월요일 입니다.");
//     break;
//   case 2:
//     console.log("화요일 입니다.");
//     break;
//   case 3:
//     console.log("수요일 입니다.");
//     break;
//   case 4:
//     console.log("목요일 입니다.");
//     break;
//   case 5:
//     console.log("금요일 입니다.");
//     break;
//   case 6:
//     console.log("토요일 입니다.");
//     break;
// }
