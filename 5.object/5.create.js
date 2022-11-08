// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}:🍎`); //객체 아에서 내 자신의 데이터에 접근 할때는 this.
//   },
// };
// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}:🍊`); //객체 아에서 내 자신의 데이터에 접근 할때는 this.
//   },
// };

//생성자함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(orange.name);
console.log(apple.emoji);
apple.display();

//생성자 함수를 이용하여 객체 생성을 손쉽게 할수있다.
