//삼항 조건 연산자
// 조건식? 표현식(참):표현식 (거짓)
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('😆');
}

fruit === 'apple' ? console.log('🍎') : console.log('😆');

let emoji = fruit === 'apple' ? '🍎' : '😆';
console.log(emoji);
