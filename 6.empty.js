//null, undefined
let variable;
console.log(variable); //undefined 정해지지 않은 상태

variable = null; // 비어있다고 할당
console.log(variable);

let activeItem;
activeItem = null;

console.log(typeof 123);
console.log(typeof activeItem);
console.log(typeof undefined);
console.log(typeof null); // object

//null을 할당하면 null이라는 오브젝트를 만들어서 할당하기 떄문에 typeof를 하면 오브젝트로 나옴
// null은 확실하게 비어있다고 말할때, undefined는 아무것도 할당이 안되어있을떄 !
