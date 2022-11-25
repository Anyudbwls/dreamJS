//접근자 프로퍼티
//함수로 접근하기 싫고 일반속성으로 접근하고 싶다면
// get을 붙여주면 된다

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
console.log(student.firstName); //속성 프로퍼티처럼 접근이 가능

console.log(student.fullName); //get 호출
student.fullName = '김철수'; //할당한다면 set이 호출되면서 value 가 인자로 받음
