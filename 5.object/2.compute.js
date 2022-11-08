const obj = {
  name: '유진',
  age: 24,
};
//코딩하는 시점에 정적으로 접근이 확정될때 쓸수있음
obj.name;
obj.age;

//동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  return (obj[key] = value);
}
addKey(obj, 'job', 'engineer');
console.log(obj);

function deleteKey(obj, key) {
  return obj[key];
}
