//카운터 만들기
//0이상의 값으로 초기화 한뒤 하나씩 숫자 증가
//counter

// class Counter {
//   constructor(value) {
//     this.value = value; //0이상의 값으로 초기화 ,0보다 높으면
//   }
//   increment() {
//     return this.value++;
//   }
// }

class Counter {
  #value; //내부의 프라이빗 필드
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      //초기값이 숫자가 아니거나 0보다 작다면 0으로 초기값
      this.#value = 0;
    } else {
      this.#value = startValue; //0보다 높다면 그냥 그 숫자부터 카운터
    }
  }
  get value() {
    return this.#value; //현재값을 읽기만 할 수 있음
  }
  increment = () => {
    this.#value++; //현재값을 증가만 할 수 있음
  };
}

const counter = new Counter(0);
counter.increment();
counter.increment(); //1
console.log(counter.value);

// 무조건 0이상의 값이여야 하니까
// 0이상의 값이거나 0으로 초기화 해서 초기값을 설정 해야하니까
//초기값이 변하지 않게 프라이빗으로 함.
