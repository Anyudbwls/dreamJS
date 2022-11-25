//퀴즈
//1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';

// console.log(text.charAt(0));
// console.log(text.charAt(1));
// console.log(text.charAt(2));
// console.log(text.charAt(3));
// console.log(text.charAt(4));
// console.log(text.charAt(5));
// console.log(text.charAt(6));
// console.log(text.charAt(7));
// console.log(text.charAt(8));
// console.log(text.charAt(9));
// console.log(text.charAt(10));
// console.log(text.charAt(11));

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

//2.사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';

// console.log(ids.split(','));
const array = ids.split(', ');
console.log(array);

//3. 1초에 한번씩 시계를 (날짜포함)출력
const date = new Date();
//setInterval(() => console.log(date.getDay(), 1000));

setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString('ko-kr'));
}, 1000);
