// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}:đ`); //ę°ě˛´ ěěě ë´ ěě ě ë°ě´í°ě ě ęˇź í ëë this.
//   },
// };
// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}:đ`); //ę°ě˛´ ěěě ë´ ěě ě ë°ě´í°ě ě ęˇź í ëë this.
//   },
// };

//ěěąěí¨ě
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}

const apple = new Fruit('apple', 'đ');
const orange = new Fruit('orange', 'đ');

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(orange.name);
console.log(apple.emoji);
apple.display();

//ěěąě í¨ěëĽź ě´ěŠíěŹ ę°ě˛´ ěěąě ěě˝ę˛ í ěěë¤.
