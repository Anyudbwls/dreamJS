// while(조건) {}
//조건이 fasle 가 될떄까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('alive');
  if (i === 4) {
    break;
  }
  i++;
}

do {
  console.log('do-while alive');
} while (isActive);

//조건이 맞을 떄만 실행 하고 싶다면 while
// 꼭 한번은 실행해야만 한다면 do-while
