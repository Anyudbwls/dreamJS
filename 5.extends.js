// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잘래');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잘래');
//   }
//   play() {
//     console.log('놀자!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잘래');
  }
}
class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); //상속하고 있는 부모클래스
    this.ownerName = ownerName; //자식클래스에만 추가
  }
  play() {
    console.log('놀랭!');
  }

  //부모의 행동을 자식행동으로 덮음
  //오버라이딩
  eat() {
    super.eat();
    console.log('강아지가 먹는다');
  }
}

const dog = new Dog('깜장이', '유진');
console.log(dog);
dog.eat();
