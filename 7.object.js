// 연관된 데이터들을 함께 모아 패키지화 시킴 = 객체 Object
//객체는 힙에 저장된다.

let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

let orange = {
  name: '오렌지',
  color: 'orange',
  display: '🍊',
};

let banana = {
  name: 'Banana',
  color: 'yellow',
  display: '🍌',
};

console.log(apple.color);
console.log(apple.display);

console.log(orange.display);
console.log(orange.name);

console.log(banana.name);
console.log(banana.color);

console.log(apple);
console.log(orange);
console.log(banana);
