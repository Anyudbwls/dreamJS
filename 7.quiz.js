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

// const answer = ArrQuiz(input, '🍓', '🥝'); //3개 인자 배열input , input 안에 있는 딸기 , 딸기랑 바꾸는 키위
// console.log(answer);

// const test = ArrQuiz(input, '🍌', '🍊');
// console.log(test);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

const SecondQuiz = (['🍌', '🥝', '🍇', '🥝'], '🥝');

function count(array, item) {
  let counter = 0;
  {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == item) {
        counter++;
      }
    }
    return counter;
  }
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

let arr = ['🍌', '🥝', '🍇'];
let arr2 = ['🍌', '🍓', '🍇', '🍓'];

console.log(arr.filter((item) => arr2.includes(item)));
