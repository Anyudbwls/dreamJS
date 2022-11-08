//매개변수의 기본값 무조건 undefined
//매개변수의 정보는 함수내부에서 접근이 가능한 arguments 객체에 저장됨
//매개변수 기본갑 default parameters a=1, b=1

function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments[2]);
  return a + b;
}

add(2, 2);

//rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 8);

function checkPar(num1, num2) {
  return num1 + num2; // 3 + undefined = NaN
}
console.log(checkPar(3)); //숫자랑 undefined랑 더하면 숫자가 아님

function parDefault(x, y) {
  x = x || 0;
  y = y || 0;

  return x + y;
}
console.log(parDefault(1));
console.log(parDefault(1, 2));
