//정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// class Member {
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
// }

// class regularMember extends Member {
//   constructor(name, department, regularPay) {
//     super(name, department);
//     this.regularPay = regularPay;
//   }
//   monthPay() {
//     console.log(`${this.regularPay}*9*30 =${this.monthPay}`);
//   }
// }

// class partTime extends Member {
//   constructor(name, department, monthPay, partTimePay) {
//     super(name, department, monthPay);
//     this.partTimePay = partTimePay;
//   }
//   monthPay() {
//     console.log(`${this.partTimePay}*9*30 =${this.monthPay}`);
//   }
// }

// const regularmember = new regularMember('유진', '영업부', '');

/**class Member {
  constructor(name, department, monthWork) {
    this.name = name;
    this.department = department;
    this.monthWork = monthWork;
  }
}

class MonthPay extends Member {
  constructor(name, department, monthWork, timepay) {
    super(name, department, monthWork);
    this.timepay = timepay;
  }
  calculatePay() {
    console.log(`${this.monthWork} * ${this.timepay} = ${this.calculatePay}`); return을 해야 값을 반환하겠지... 
  }
}

const yujin = new MonthPay('유진', '영업', 35, 10000);
const alice = new MonthPay('엘리스', '영업', 20, 8000);
console.log(yujin);
console.log(yujin.calculatePay());

=> 내가 푼거 
**/

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000; // 클래스 레벨인 static 을 이용하려여 숫자를 그냥 전달하는게 아니라 상수변수로 정의 했기에 숫자가 무엇을 의미하는지 알수있어서 가독성이 높아진다.
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}

const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());
