//원시타입은 값이 복사되어 전달됨

let a = 1;
let b = a; // 1
b = 2;
console.log(a);
console.log(b);

//객체 타입은 참조값 (메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  name: '사과',
};
console.log(apple);

let orange = apple; //참조값이 복사됨
console.log(apple);

orange.name = '오렌지'; // 참조값이 복사된 상테이기때문에 name을 바꿔주면 apple의 값도 바뀜
console.log(apple);
console.log(orange);
