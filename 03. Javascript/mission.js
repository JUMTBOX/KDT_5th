let str =
  "이 글은 도커에 대해 1도 모르는 시스템 관리자나 서버 개발자를 대상으로 도커 전반에 대해 얕고 넓은 지식을 담고 있습니다. 도커가 등장한 배경과 도커의 역사, 그리고 도커의 핵심 개념인 컨테이너와 이미지에 대해 알아보고 실제로 도커를 설치하고 컨테이너를 실행해 보도록 하겠습니다.";

// •위의 문장을 80byte 기준으로 잘라서 배열에 담기
// •한글은 2byte, 한글을 제외한 영어, 숫자, 기호, 띄어쓰기는 1byte
// •자르고 난 다음 글자가 공백일 경우는 생략처리

let byteKr = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
let kr = 0;
let emp = 0;

let empStr = "";
let empStr2 = "";
let empStr3 = "";
let empStr4 = "";

let newStr = [...str];

for (let st of newStr) {
  byteKr.test(st) === true ? kr++ : emp++;

  let byte = kr * 2 + emp;

  if (byte <= 80) {
    empStr += st;
  } else if (byte <= 160) {
    empStr2 += st;
  } else if (byte <= 240) {
    empStr3 += st;
  } else {
    empStr4 += st;
  }
  let answer = [empStr].concat([empStr2], [empStr3], [empStr4]);
  console.log(answer);
}
