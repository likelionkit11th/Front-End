//문제 1
// var nums = [100, 200, 300, 400, 500];
// nums.pop();
// nums.pop();
// console.log(nums);

//문제 2
// var arr = [200, 100, 300];
// arr.splice(2, 0, 10000)
// console.log(arr);

//문제 3
//4) object


//문제 4
//2)  입력 : a = 2.22,   출력 : boolean

//문제 5
//4) 16

//문제 6
//2) 1

//문제 7
//3) let
//5) 1age

//문제 8
//84

//문제 9
// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';

// var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`

// console.log(result);

//문제 10
// var input = prompt();

// for(var i = 0; i < input; i++) {
//   for(var j = input-i-1; j > 0; j--) {
//     document.write('&nbsp');
//   }
//   for(var j = 0; j < 2*i+1; j++) {
//     document.write('*');
//   }
//   document.write('<br>');
// }

//문제 11
// var planetName = prompt();

// function getPlanetEnglishName(planetName) {
//   switch(planetName) {
//     case "수성":
//       return "Mercury";
//     case "금성":
//       return "Venus";
//     case "지구":
//       return "Earth";
//     case "화성":
//       return "Mars";
//     case "목성":
//       return "Jupiter";
//     case "토성":
//       return "Saturn";
//     case "천왕성":
//       return "Uranus";
//     case "해왕성":
//       return "Neptune";
//     default:
//       return "해당하는 행성이 없습니다.";
//   }
// }

// console.log(getPlanetEnglishName(planetName));

//문제 12
// var num = prompt();

// const numArr = num.split(" ");

// function isSorted(numArr) {
//   for(let i = 0; i < numArr.length - 1; i++) {
//     if(numArr[i] > numArr[i+1]) {
//       return false;
//     }
//     return true;
//   }
// }

// if(isSorted(numArr)) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

//문제 13
// let studentName = prompt();

// let student = studentName.split(" ");
// let voteCount = {};

// for(let i = 0; i < student.length; i++) {
//   if(voteCount[student[i]]) {
//     voteCount[[student[i]]]++;
//   } else {
//     voteCount[student[i]] = 1;
//   }
// }

// let winner = "";
// let maxVoteCount = 0;

// for(let name in voteCount) {
//   if(maxVoteCount < voteCount[name]){
//     maxVoteCount = voteCount[name]
//     winner = name
//   }
// }

// console.log(`${winner}(이)가 총 ${maxVoteCount}표로 반장이 되었습니다.`);

//문제 14

//문제 15
// let students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연']

// students.sort();

// for(let i = 0; i < students.length; i++) {
//   console.log(`번호: ${i+1}, 이름: ${students[i]}`);
// }

//문제 16
// const sentence = prompt();

// const word = sentence.split(" ");
// let newWord = "";

// for(let i = 0; i < word.length; i++) {
//   newWord += word[i].charAt(0);
// }

// console.log(newWord);

//문제 17
"use strict"
const a = [[1, 2], [2, 4]];
const b = [[1, 0], [0, 3]];

const columnNum = a[0].length;
const rowNum = b.length;

function isMultiplicable(columnNum, rowNum) {
  return columnNum === rowNum
}

function multiply(a, b) {
  const resultArr = [];
  for(let i = 0; i < a.length; i++) {
    const arr = [];
    for(let j = 0; j < b[0].length; j++) {
      let sum = 0;
      for(let k = 0; k < a[0].length; k++) {
        sum += a[i][k] * b[k][j];
      }
      arr.push(sum);
    }
    resultArr.push(arr);
  }
  console.log(resultArr);
}

if(isMultiplicable(columnNum, rowNum)) {
  multiply(a,b)
} else {
  console.log(-1);
}


//문제 18


//문제 19


//문제 20