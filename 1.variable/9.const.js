//let 재할당이 가능

let a = 1;
a = 2;

//const 재할당이 불가능
//1. 상수
//2. 상수변수 또는 변수

const text = 'hello';
//text = 'hi'; 코드상으론 문제가 없지만 에러 생김

//1. 상수
const MAX_FRUITS = 5; //상수(상수 그 자체)를 사용할때는 항상 대문자

//2. 재할당이 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

// apple = {}; err

console.log(apple);
apple.name = 'orange';
apple.display = '🍏';
console.log(apple);

// { name: 'orange', color: 'red', display: '🍏' }
// 객체는 힙이라는 공간에 보관되어져있다,
// apple은 메모리 주소만 담고 있음. apple에 또다른 메모리 주소를 담을수 없음.
// let ,const 변수가 가리키고 있는 오브젝트의 값을 변경하는 것은 가능하다.
// 메모리 셀 안에 있는 데이터 주소를 변경하는 것이 아니라,
// 가리키고 있는 특정한 오브젝트 내부를 수정하는 것임으로 변경 가능하다. mutable

// const는 재할당만 불가능 하고 변경은 가능하다.
