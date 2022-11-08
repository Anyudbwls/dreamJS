const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}:🍎`); //객체 아에서 내 자신의 데이터에 접근 할때는 this.
  },
};

apple.display();

//객체는 서로 연관된 정보오 ㅏ함수들을 묶어서 관리할수있음.
