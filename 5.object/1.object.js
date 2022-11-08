//object literal {key :vaule}
//new object ()
// object.create();
//key - 문자, 숫자, 문자열 ,심볼
// value -원시값,객체 함수

let apple = {
  name: 'apple',
  'hello-bye': '👐',
  0: 1,
  ['hello-value']: '👏',
};

//속성, 데이터에 접근하기 위해서는
apple.name; // 마침표 표기법 dot notation
console.log(apple['hello-bye']); // 대괄호 표기법 bracket notation
apple['name'];

//속성추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);
console.log(apple);

//속성추가
delete apple.emoji;
console.log(apple);
