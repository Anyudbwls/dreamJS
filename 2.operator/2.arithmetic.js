// 산술 연산자 (Arithmetic operators)
/**
 * +
 * -
 * *
 * /
 * %
 * ** 지수
 */

console.log(5 + 2);
console.log(5 % 2);
console.log(5 ** 2); // es7
console.log(Math.pow(5, 2));

//+ 연산자 주의

let text = '두개의' + '문자열';
console.log(text);

text = '1' + 1; //숫ㅈ와 문자열을 더하면 문자열로 변환됨
console.log(text);
