//문자열 타입
let string = '안녕하세요 ';
string = `안녕`;
console.log(string);

//특수문자 출력
string = "'안녕!'";
console.log(string);

string = '안녕 \n yujin \t\t 내이름은 \t';
console.log(string);

//MDN 이스케이프

//템플릿 리터럴
let id = '유진';
let greetings = "'안녕!, " + id + "😉\n 즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'!안녕, ${id} 😉
즐거운 하루 보내요!'`;
console.log(greetings);
