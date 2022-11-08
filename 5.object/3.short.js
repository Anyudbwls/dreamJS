const x = 0;
const y = 0;

//x라는 키이름에 0이 들어가고 y이라는 키 이름에 0들어감.
const coordinate = { x, y }; //{ x: x, y: y };

console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}

//키와 벨류가 가지고 있는 변수가 똑같음으로 생략가능하다.
