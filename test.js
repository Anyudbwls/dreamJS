const a = [1, 2, 3, 4, 5];

log = console.log;

function mul2(item) {
  return item * 2;
}

log('map');
log(
  a.map((item) => {
    return item * 2;
  })
);
log();

log('filter');
log(a.filter((item) => item < 3));
log();

log('reduce'); //결과값 반환
log(a.reduce((a, b) => a + b));
log();

log('split');
const b = 'abc';
log(b.split(''));
log();

log('join');
const c = ['a', 'b', 'c'];
log(c.join('-'));
log();

log('replace');
const d = 'a b c d a a a';
log(d.replace('a', ''));
log(d);
log();

log('startswith');
const e = 'abcdef';
log(e.startsWith('abc')); // abc로 시작하는지 판별
log();

log('includes'); //특정요소를 가지고 있는지 판별
const f = 'a b c d a a a';
const g = ['a', 'b', 'c', 'd', 'a', 'a', 'a'];
log(f.includes('d'));
log(g.includes('d'));
log();

const aaa = 'a a a a a a';
log(
  aaa
    .split(' ')
    .map((item) => 'b')
    .join(' ')
);

aaa[0] = 'b';
