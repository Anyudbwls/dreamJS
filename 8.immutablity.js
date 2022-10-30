//함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 X
//상태변경이 필요한 경우에는 , 새로운 상태 (오브젝트, 값 )만들어서 반환해야함
// 원시값- 값에 의한 복사 (copy/call by value)
// 객체값 - 참조에 의한 복사 (메모리 주소) (call/copy by reference)

let num = 5;
function display(num) {
  num = 6;
  return num;
}

// console.log(display(num));
// console.log(num);

// object
function display(obj) {
  // 순수 함수 X 외부 객체의 값을 바꾸고 있음
  obj.num = 5;
  return obj;
}

function display1(obj) {
  const object = { ...obj };
  // 순수 함수 X 외부 객체의 값을 바꾸고 있음
  object.num = 5;
  return object;
}

function main() {
  const obj = { num: 1 };
  console.log('inner', display(obj));
  console.log('outer', obj);
}

function main1() {
  const obj = { num: 1 };
  console.log('inner', display1(obj));
  console.log('outer', obj);
}

main1();
