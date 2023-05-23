/* 1번
var nums = [100, 200, 300, 400, 500];
nums.splice(3, 2);
console.log(nums);
*/

/* 2번
var arr = [200, 100, 300];
arr.splice(2, 0, 10000)
console.log(arr);
*/

/* 3번
var arr = [100, 200, 300];
console.log(typeof(arr));
// 출력 -> object
*/

/* 4번
다음 변수 a를 typeof(a)로 넣었을 때
출력될 값과의 연결이 알맞지 않은 것은?
// 정답 -> 2) 입력 : a = 2.22 
              출력 : boolean(x)  number(o)
*/

/* 5번
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);
// 출력 -> 16
*/

/* 6번
다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
True를 찾아주세요.

1)  NaN
2)  1
3)  ""
4)  0
5)  undefined
// 정답 -> 2번
*/

/* 7번
다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

1)  age
2)  Age
3)  let
4)  _age
5)  1age
// 정답 -> 3, 5
*/

/* 8번
var d = {
  'height':180,
  'weight':78,
  'weight':84,
  'temperature':36,
  'eyesight':1
};

console.log(d['weight']);
// 출력 -> 84
*/

/* 9번
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`

console.log(result);
*/

/* 10번
const input = Number(prompt('입력'));

for (let i = 0; i < input; i++)
{
  let blank = ' '.repeat(input - i - 1);
  let starts = '*'.repeat(2 * i + 1);
  console.log(blank + starts);
}
*/

/* 11번
const input = prompt('입력');
const planet = {
  '수성':'Mercury', 
  '금성':'Venus', 
  '지구':'Earth', 
  '화성':'Mars', 
  '목성':'Jupiter', 
  '토성':'Saturn', 
  '천왕성':'Uranus',
  '해왕성':'Neptune'
}
console.log(planet[input]);
*/

/* 12번
const input = prompt('입력').split(" ").map(Number);
let result = 'YES';

for (let i = 1; i < input.length; i++)
{
  if (input[i] < input[i - 1])
  {
    result = 'NO';
  }
}

console.log(result);
*/

/* 13번
const input = prompt('입력').split(" ");
let arr = {};

for (i of input)
{
  if (arr[i] == undefined)
  {
    arr[i] = 1;
    continue;
  }
  arr[i]++;
}
console.log(arr);
*/

/* 14번
const input = prompt('입력').split(" ").map(Number);
const monthDayCount = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const week = ['WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE'];

function solution (a, b){
  let cnt = 0;
  for (let i = 0; i < a - 1; i++)
  {
    cnt += monthDayCount[i];
  }

  for (let i = 0; i < b - 1; i++)
  {
    cnt += 1
  }
  return week[cnt % 7];
}
console.log(solution(input[0], input[1]));
*/

/* 15번
let students = [
    "강은지",
    "김유정",
    "박현서",
    "최성훈",
    "홍유진",
    "박지호",
    "권윤일",
    "김채리",
    "한지호",
    "김진이",
    "김민호",
    "강채연"
];

let students_sort = students.sort();
for (let i = 1; i < students.length + 1; i++) {
    console.log(`번호: ${i}, 이름: ${students[i - 1]}`);
}
*/

/* 16번
const input = prompt('입력').split(" ");
let arr = "";

for (element of input)
{
  arr += element[0];
}
console.log(arr);
*/

/* 17번
const a = prompt('입력').split(",");
const b = prompt('입력').split(",");
a_arr = [];
b_arr = [];

for (let i = 0; i < a.length; i++)
{
  a_arr.push(a[i].split(" "));
}

for (let i = 0; i < b.length; i++)
{
  b_arr.push(b[i].split(" "));
}

result = [];

if (a[0].length != b.length)
{
  console.log(-1);
}
else
{
  for (i of a_arr)
  {
    r_arr = [];
    for (let j = 0; j < b_arr.length; j++)
    {
      let sum = 0;
      for (let k = 0; k < b_arr[j].length; k++)
      {
        sum += i[k] * b_arr[j][k];
      }
      r_arr.push(sum);
    }
    result.push(r_arr);
  }
  console.log(result);
}
*/

/* 18번
let flag = prompt('입력').split("\\n");
let flag_arr = [];
for (i of flag)
{
  flag_arr.push(i.split(" ").map(Number));
}

let col_len = flag_arr.length;
let row_len = flag_arr[0].length;

for (let i = 0; i < col_len; i++)
{
  for (let j = 0; j < row_len; j++)
  {
    if (flag_arr[i][j] === 1)
    {
      flag_arr[i][j] = 'f';

      if (i != 0 && flag_arr[i - 1][j] == 0)
      {
        flag_arr[i - 1][j] = '*';
      }

      if (i != col_len - 1 && flag[i + 1][j] == 0)
      {
        flag_arr[i + 1][j] = "*";
      }

      if (j != 0 && flag_arr[i][j - 1] == 0)
      {
        flag_arr[i][j - 1] = "*";
      }

      if (j != row_len - 1 && flag[i][j + 1] == 0)
      {
        flag_arr[i][j + 1] = "*";
      }
    }
  }
}
console.log(flag_arr);
*/

/* 19번
let player = prompt("입력");
let cnt = prompt("입력");
let player_list = player.split(" ");
let cnt_list = cnt.split(" ").map(Number);
let dict = {};
for (let i = 0; i < player_list.length; i++) {
    dict[player_list[i]] = cnt_list[i];
}

let dict_sort = Object.entries(dict).sort((a, b) => b[1] - a[1]);

let result = {};
for (let i = 0; i < dict_sort.length; i++) {
    result[dict_sort[i][0]] = i + 1;
}
console.log(result);
*/

/* 20번
function solution(n,l){
	let a = 0
  let arr = [];

  for (let i = 0; i < n; i++)
  {
    arr.push(0);
  }

  for (let i = 0; i < n; i++)
  {
    for (let j = a; j < l.length; j += n)
    {
      arr[a] += l[j];
    }

    a++;
  }
  let maxValue = 0;

  for (element of arr)
  {
    if (maxValue < element)
    {
      maxValue = element;
    }
  }

  return maxValue;
}

const 배달원 = 3;
const 배달시간 = [1,2,1,3,3,3];


console.log(solution(배달원, 배달시간));
// 출력값 = 5
*/