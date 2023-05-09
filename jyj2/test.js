// 1번
var nums = [100, 200, 300, 400, 500];
nums = nums.filter((item) => item !== 400 && item !== 500);

console.log(nums);

// 2번
var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);

// 3번
// 4) object

// 4번
// 2)

// 5번
// 4)

// 6번
// 2)

// 7번 
// 3), 5)

// 8번
// 84

// 9번
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

console.log(result);

// 10번
let num = prompt('10번. 별을 출력할 줄 수를 입력하세요.');
let star = 1;
for(let i=num; i>0; i--) {
    for(let j=i-1; j>0; j--) {
        console.log(" ");
    }
    for(let k=0; k<star; k++) {
        console.log("*");
    }
    star+=2;
}

// // 11번
const planet = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
const planetE = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

let planetInput = prompt('11번. 행성의 이름을 입력하세요.');
for(let i=0; i<planet.length; i++) {
    if(planetInput === planet[i]) console.log(planetE[i]);
    else if(i === planet.length-1) {
        if(planetInput !== planet[i]) console.log("잘못된 입력입니다.");
    }
}

// 12번
let sortInput = prompt('12번. 숫자를 입력하세요.');
let sortArr = sortInput.split(" ");
let count = 0;

for(let i=0; i<sortArr.length-1; i++) {
    if (parseInt(sortArr[i]) < parseInt(sortArr[i+1])) {
        count++;
    }
}

if (count === sortArr.length-1) {
    console.log("YES");
} else {
    console.log("NO");
}


// 13번
let voteInput = prompt('13번. 투표를 받은 이름을 입력하세요');
let voteArr = voteInput.split(" ");

let voteResult = {};
let winner = "";

for(let index in voteArr) {
    let val = voteArr[index];
    voteResult[val] = voteResult[val] === undefined ? 1 : voteResult[val] = voteResult[val] + 1;
}

winner = Object.keys(voteResult).reduce(function(a, b){
    return voteResult[a] > voteResult[b] ? a : b
});

console.log(`${winner}(이)가 총 ${voteResult[winner]}표로 반장이 되었습니다.`);

// 14번
let dateInput = prompt('14번. 2020년 a월 b일의 a, b를 입력하세요.');
let dateArr = dateInput.split(" ");

function solution(a, b) {
    let answer = '';
    let sumB = b;
    const dayOfWeek = ['TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON'];
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    days.forEach((day, i) => {
        if (i < a - 1) sumB += day;
    });
    answer = dayOfWeek[sumB % 7];
    return answer;
}

console.log(solution(parseInt(dateArr[0]), parseInt(dateArr[1])))

// 15번
students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연']

function numberingStudents(students, isAscending) {
    const result = students
        .sort((a, b) => {
            if (isAscending) {
                return a > b ? -1 : 1;
            } else {
                return a < b ? -1 : 1;
            }
        })
        .map((student, index) => `번호: ${index + 1}, 이름: ${student}`)
        .join("\n");

    return result;
}

const studentResult = numberingStudents(students, true);
console.log(studentResult);

// 16번
let syntax = prompt('16번. 문장을 입력하세요');
let syntaxArr = syntax.split(" ");
let syntaxResultArr = new Array();

for(let i=0; i<syntaxArr.length; i++) {
    let syntaxFirst = syntaxArr[i].split('')[0];
    syntaxResultArr.push(syntaxFirst);
}

let syntaxResult = ""
for(let i=0; i<syntaxResultArr.length; i++) {
    syntaxResult += syntaxResultArr[i];
}

console.log(syntaxResult);

// 17번
a = [[1, 2],
    [2, 4]]

b = [[1, 0],
    [0, 3]]

function multiplyMatrix(a, b) {
    const result = [];
    if (a[0].length === b.length) {
        for (let i = 0; i < a.length; i++) {
            const row = [];
            for (let j = 0; j < b[0].length; j++) {
                let temp = 0;
                for (let k = 0; k < b.length; k++) {
                    temp += a[i][k] * b[k][j];
                }
                row.push(temp);
            }
            result.push(row);
        }
        return result;
    } else return -1;
}

console.log(multiplyMatrix(a, b))

// 18번
minesweeper = '0 1 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 0 0';
minesweeper = minesweeper.replace('1','f');
minesweeper = minesweeper.split(' ');

for(let i=0; i<minesweeper.length; i++) {
    if(minesweeper[i] == 'f') {
        if(i%5 > 0) minesweeper[i-1] = '*'
        if((i+5)%5 > 0) minesweeper[i+1] = '*'
        if(i>4) minesweeper[i-5] = '*'
        if(i<20) minesweeper[i+5] = '*'
    }
}

for(let j=0; j<minesweeper.length; j++) {
    if(j%5===0 && j!==0) console.log(" ")
    console.log(minesweeper[j], " ");
}

// 19번
let nameArr = prompt('19번. 선수 이름을 입력하세요.').split(" ");
let dish = prompt('19번. 접시의 수를 입력하세요.').split(" ");

let tournament = {};
let temp;

for(let i=0; i<dish.length; i++) {
    if(dish[i] < dish[i+1]) {
        temp = dish[i+1];
        dish[i+1] = dish[i];
        dish[i] = temp;

        temp = nameArr[i+1];
        nameArr[i+1] = nameArr[i];
        nameArr[i] = temp;
    }
}

for (let j=0; j<dish.length; j++) {
    tournament[nameArr[j]] = dish[j];
}

console.log(tournament)

// 20번
function deliverySolution() {
    const DILIVERY_MAN_COUNT = 3;
    let deliveryTime = [1, 2, 1, 3, 3, 3];

    let arr = Array.from({ length: DILIVERY_MAN_COUNT }, () => 0);
    let result = 0;

    while (deliveryTime.length !== 0) {
        for (let i = 0; i < DILIVERY_MAN_COUNT; i += 1) {
            if (arr[i] === 0 && deliveryTime.length !== 0) {
                arr[i] = deliveryTime.shift();
            }
        }
        arr.map((_, idx) => (arr[idx] -= 1));
        result += 1;
    }

    result += Math.max(...arr);

    console.log(result);
}

deliverySolution();