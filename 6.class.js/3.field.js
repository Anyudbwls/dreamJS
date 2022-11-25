//접근제어자 -캡슐화
//private(#), public(기본), protected

class Fruit {
  #name;
  #emoji; //외부로 부터 전달 받은 데이터로 할당
  #type = '과일'; //클래스로 만들떄 바로 과일로 초기화 하고 싶을때
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  display() {
    console.log(`${this.#name}:${this.#emoji}`);
  }
}

const apple = new Fruit('apple', '🍎');

//클래스는 템플릿에 지나치지 않아서 안에 있는 데이터들을 호출할려면
//할당된 이름을 출력해야한다.
//apple.#name = '오렌지'; #을 붙인 필드는 외부에서 접근이 불가능함.
console.log(apple);
