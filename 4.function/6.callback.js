// 콜백 함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//전달된 action은 콜백함수이다.
//전달된 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스 (참조값)가 전달된다.
//그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 된다.
function calculator(a, b, action) {
  // if (a < 0 || b < 0) {
  //   return;
  // }
  let result = action(a, b);
  return result;
}

const cal = (a, b, action) => action(a, b);

const addResult = cal(1, 2, add); //레퍼런스 (참조)전달
const multiplyResult = cal(5, 10, multiply);

console.log(addResult, multiplyResult);
