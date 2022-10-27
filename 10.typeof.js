//typeof :데이터 타입을 확인
//값을 타입 문자열로 반환
//컴파일 언어(java,c)에선 타입을 명시해두고 병수명을 작성 하고 할당 한다. 한번 타입을 명시하면 바꿀수없다.
//js는 동적으로 약한 타입

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; //<-할당된 값에 따라 타입이 결정된다.
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.clear();
let primitiveNum = 123;
primitiveNum = 234;
console.log(primitiveNum); // 234

const primitiveStr = '메모리안에 저장됨';
console.log(primitiveStr);

let objWho = {
  name: 'yujin',
  age: 24,
  sex: 'female',
};

console.log(objWho);
console.log(objWho.name);
console.log(objWho.age);

const objFruit = {
  apple: 'red',
  banana: 3,
  orange: '🍊',
};

console.log(objFruit);

objFruit.apple = '🍏';
console.log(objFruit.apple);
console.log(objFruit);
