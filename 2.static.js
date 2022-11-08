//static 정적 프로퍼티, 메소드

class Fruit {
  //생성자 : new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  //클래스 레벨의 메서드
  static makeRandomFruit() {
    //클래스 레벨의 메서드에서는 this를 참조할수없음.
    return new Fruit('banana', '🍌');
  }
  // 만들어진 오브젝트에 데이터에 접근해서 무언가를 출력해야함.
  //인스턴스와 밀접하게 관련되어있다.
  //인스턴스 레벨의 메서드
  display() {
    console.log(`${this.name}:${this.emoji}`);
  }
}

const banana = Fruit.makeRandomFruit();
console.log(banana);

// console.log(Fruit.name); //클래스에 접근해도 데이터가 없는 템플릿 상태이기 때문에 출력이 안된다.
// Fruit.display(); //속성으로 접근해도 안의 데이터가 없기때문에 출력이 안된다,
//클래스를 통해서 만들어진 객체를 인스턴스라고 부른다.
//apple 은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');

//orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(orange.name);
console.log(apple.emoji); ///곡 생성된 인스턴트를 통해서 출력해야한다
apple.display();

//obj는 객체이고 , 그 어떤 클래스의 인스턴스도 아니다.
//클래스에 속해 있지 않음
const obj = { name: 'yujin' };
