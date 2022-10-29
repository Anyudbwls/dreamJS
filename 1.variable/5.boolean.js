//불리언 타입
let bolTrue = true;
let bolFalse = false;

console.log(bolTrue);
console.log(bolFalse);

// 값에 !! 붙이면 true , false 로 변환시켜준다.

console.clear();
console.log(!!0);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log(!!'');
console.log(!!-0);

console.log(!!1);
console.log(!!-1);
console.log(!!'hello');
console.log(!!{}); //오브젝트 자체가 있기에 True
console.log(!!Infinity); //유한대
