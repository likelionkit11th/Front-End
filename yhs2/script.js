// 문제 1
var nums = [100, 200, 300, 400, 500];
nums = nums.slice(0, 3);

// 문제 2
var arr = [200, 100, 300];
arr.splice(2, 0, 10000)

// 문제 3
var arr = [100, 200, 300];
console.log(typeof(arr)); // 4) object

// 문제 4
a = 2.22;
typeof(a); // 2) boolean이 아니라 number

// 문제 5
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

// for 문 1회 실행 시 a == 11
// for 문 2회 실행 시 a == 14

console.log(a+b); // 16

// 문제 6
const x = 1;
if (x) {
  console.log('x가 true일 때 출력') // 1은 true
}

// 문제 7
// 3) let은 예약어이므로 변수명으로 사용 불가
// 5) 1age는 숫자로 시작하므로 변수명으로 사용 불가

// 문제 8
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']); // 84

// 문제 9
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

console.log(result); // 2019/04/26 11:34:27

// 문제 10
/* const nol = prompt();
for (let i = 0; i < nol; i++) {
    const blank = '　'.repeat(nol - i - 1);
    const star = '＊'.repeat(2 * i + 1);
    console.log(blank + star)
} */

// 문제 11
const planetList = {
    '수성': 'Mercury',
    '금성': 'Venus',
    '지구': 'Earth',
    '화성': 'Mars',
    '목성': 'Jupiter',
    '토성': 'Saturn',
    '천왕성': 'Uranus',
    '해왕성': 'Neptune'
}

// const planetNameKor = prompt('행성의 한글 이름');
// console.log(planetList[planetNameKor]);

// 문제 12
// const numbers = prompt().split(' ').map(Number);

function compareNumbers(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] > list[i + 1]) {
            return false;
        } else {
            return true;
        }
    }
}

/* if (compareNumbers(numbers)) {
    console.log('YES');
} else {
    console.log('NO');
} */

// 문제 13
/* const voteList = prompt().split(' ');

let Count = {};

for (let i = 0; i < voteList.length; i++) {
    if (Count[voteList[i]]) {
        Count[voteList[i]]++;
    } else {
        Count[voteList[i]] = 1;
    }
}

let elected = '';
let highestCount = 0;

for (let name in Count) {
    if (highestCount < Count[name]) {
        highestCount = Count[name];
        elected = name;
    }
}

console.log(`${elected}(이)가 총 ${highestCount}표로 반장이 되었습니다.`); */

// 문제 14
// const a_Month = prompt('a');
// const b_Day = prompt('b');

// 문제 15
const students = ['강은지', '김유정', '박현서', '최성훈', '홍유진', '박지호', '권윤일', '김채리', '한지호', '김진이', '김민호', '강채연'];
students.sort();

for (let i = 1; i < students.length; i++) {
    console.log(`번호: ${i + 1}, 이름: ${students[i]}`);
}

// 문제 16
// const phrase = prompt().split(' ');
let shortenedPhrase = '';

/* for (let i = 0; i < phrase.length; i++) {
    shortenedPhrase += phrase[i][0];
}

console.log(shortenedPhrase); */

// 문제 17
/* 잘 되지 않아 시간을 넉넉히 갖고 다시 풀어볼 예정입니다. */

// 문제 18


// 문제 19


// 문제 20
