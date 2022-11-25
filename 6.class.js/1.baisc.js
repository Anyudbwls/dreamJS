//객체를 손쉽게 만들 수 있는 템플랏
//1. 생성자 함수 (오래된 고전적인 방법 )
//2.클래스 class

class Fruit {
  //생성자 : new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display() {
    console.log(`${this.name}:${this.emoji}`);
  }
}

//클래스를 통해서 만들어진 객체를 인스턴스라고 부른다.
//apple 은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');

//orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(orange.name);
console.log(apple.emoji);
apple.display();

//obj는 객체이고 , 그 어떤 클래스의 인스턴스도 아니다.
//클래스에 속해 있지 않음
const obj = { name: 'yujin' };
