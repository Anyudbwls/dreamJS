// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// function ArrQuiz(input, from, to) {
//   //파라메타 3개 받아와야해
//   const solution = Array.from(input); //숫ㅅㅎㅅ
//   for (let i = 0; i < solution.length; i++) {
//     if (solution[i] === from) {
//       solution[i] = to;
//     }
//   }
//   return solution;
// }

//배열 수정 금지니까ㅏ const로 할당...문자열로 해야 수정 xx ?

const input = ['🍌', '🍓', '🍇', '🍓'];
const result = input.map((item) => (item === '🍓' ? '🥝' : item));
console.log(result);

function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}

const test = replace(input, '🍓', '🍊');
console.log(test);
console.log('------------');
// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

const SecondQuiz = (['🍌', '🥝', '🍇', '🥝'], '🥝');

function count(array, item) {
  return array.filter((value) => value === item).length;
  // return array.reduce((count, value) => {
  //   if (value === item) {
  //     count++;
  //   }
  //   return count;
  // }, 0);
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));
console.log('------------');
// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
function match(input, search) {
  return input.filter((item) => search.includes(item));
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

//배열 2개

let arr = ['🍌', '🥝', '🍇'];
let arr2 = ['🍌', '🍓', '🍇', '🍓'];
console.log(arr.filter((item) => arr2.includes(item)));
console.log('------------');

// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];

//filter->reduce

const result2 = nums
  .filter((num) => num > 5) //[16,25,34,21]
  .reduce((avg, num, _, array) => avg + num / array.length, 0);
//필터로 걸러낸 4개의 인수들을 담을 avg ,
//avg랑 하나씩 더할 num
//배열의 길이만큼 나눈다.
console.log(result2);
