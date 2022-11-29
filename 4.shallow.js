//얉은 복사 Shallow Copy -객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐 !
//Array.from,concat,slice,spread(...),Object.assign
//아무리 많은 오브젝트가 중첩이 되어있어도 메모리 주소만 전달되어진다.

const pizza = { name: '🍕', price: 2 };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log(store1);
console.log(store2);

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);
