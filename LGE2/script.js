//---------- 01 ----------//
// var nums = [100, 200, 300, 400, 500];
// nums.pop();
// nums.pop();
// console.log(nums);

//---------- 02 ----------//
// var arr = [200, 100, 300];
// arr.pop()
// arr.push(10000, 300)
// console.log(arr)

//---------- 03 ----------//
// var arr = [100, 200, 300]
// console.log(typeof(arr))
// // --> object

//---------- 04 ----------//
// 1) 입력 : a=1, 출력 : number (○)
// 2) 입력 : a=2.22, 출력 : boolean (×)
// 3) 입력 : a='p', 출력 : string (○)
// 4) 입력 : a=[1, 2, 3], 출력 : object (○)
// var a = 2.22
// console.log(typeof(a))

//---------- 05 ----------//
// var a = 10;
// var b = 2;

// for (var i = 1; i < 5; i += 2) {
//     a += i;
// }

// console.log(a+b)

// // 14+2 = 16
// // 4) 16

//---------- 06 ----------//
// 1) NaN        (False)
// 2) 1          (True)
// 3) ""         (False)
// 4) 0          (False)
// 5) undefined  (False)

//---------- 07 ----------//
// 1) age   (O)
// 2) Age   (O)
// 3) let   (O)
// 4) _age  (X)
// 5) 1age  (X)

//---------- 08 ----------//
// var d = {
//     'height' : 180,
//     'weight' : 78,
//     'weight' : 84,
//     'temperature' : 36,
//     'eyesight' : 1,
// };

// console.log(d['weight'])
// // 출력값 : 84

//---------- 09 ----------//
// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';

// var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

// console.log(result);

//---------- 10 ----------//
// let num = prompt("숫자 입력");
// num = Number(num);

// for (let i = 1; i < num + 1; i++) {
//     for (let j = 0; j < num - i; j++) {
//         document.write("\u00a0");
//     }
//     for (let j = 0; j < i * 2 - 1; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

//---------- 11 ----------//
// let kr_name = prompt("한글 이름 입력");

// en_name = {
//     수성: "Mercury",
//     금성: "Venus",
//     지구: "Earth",
//     화성: "Mars",
//     목성: "Jupiter",
//     토성: "Saturn",
//     천왕성: "Uranus",
//     해왕성: "Neptune",
// };

// console.log(en_name[kr_name]);
// document.write(en_name[kr_name]);

//---------- 12 ----------//
// let nums = prompt("공백 기준으로 숫자 입력");
// nums_arr = nums.split(" ");
// nums_sort_arr = nums_arr.map(Number);
// nums_sort_arr.sort((a, b) => {
//     return a - b;
// });

// sort_nums = "";
// nums_sort_arr = nums_sort_arr.map(String);
// for (let i = 0; i < nums_sort_arr.length; i++) {
//     sort_nums += nums_sort_arr[i];
//     if (i != nums_sort_arr.length - 1) {
//         sort_nums += " ";
//     }
// }
// console.log(nums == sort_nums);

//---------- 13 ----------//
// let voting = prompt("투표받은 리스트 입력");
// let voting_list = voting.split(" ");
// let name_set = new Set(voting_list);
// let name_list = Array.from(name_set);
// let count_list = [];
// let count = 0;

// for (let i = 0; i < name_list.length; i++) {
//     count = voting_list.filter((element) => name_list[i] === element).length;
//     count_list.push(count);
// }

// max_voting = Math.max.apply(Math, count_list);
// let final_num;

// for (let i = 0; i < count_list.length; i++) {
//     if (count_list[i] == max_voting) {
//         final_num = i;
//     }
// }
// console.log(
//     `${name_list[final_num]}(이)가 총 ${max_voting}표로 반장이 되었습니다.`
// );

//---------- 14 ----------//
// let date = prompt("a월 b일 입력. 숫자만 입력할 것. 공백으로 구분");
// let week_list = ["WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE"];
// let month_list = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// let date_list = date.split(" ");
// let month = Number(date_list[0]);
// let day = Number(date_list[1]);

// let count_day = 0;
// for (let i = 0; i < month - 1; i++) {
//     count_day += month_list[i];
// }
// count_day += day;
// let week = count_day % 7;
// console.log(week_list[week - 1]);

//---------- 15 ----------//
// let students = [
//     "강은지",
//     "김유정",
//     "박현서",
//     "최성훈",
//     "홍유진",
//     "박지호",
//     "권윤일",
//     "김채리",
//     "한지호",
//     "김진이",
//     "김민호",
//     "강채연",
// ];

// let students_sort = students.sort();
// for (let i = 1; i < students.length + 1; i++) {
//     console.log(`번호: ${i}, 이름: ${students[i - 1]}`);
// }

//---------- 16 ----------//
// let sentence = prompt("문장 입력");
// let words = sentence.split(" ");
// let result = "";
// for (let i = 0; i < words.length; i++) {
//     result += words[i][0];
// }
// console.log(result);

//---------- 17 ----------//
// // 1 2\n2 4
// // 1 0\n0 3

// // 1 3 2\n4 1 5
// // 3 2\n6 3

// // 1 2\n3 4\n1 3
// // 4 2\n3 1
// let a = prompt(
//     "행렬 a입력 \\n으로 구분해서 숫자만 적을 것, 숫자는 공백으로 구분할 것"
// );
// let b = prompt(
//     "행렬 b입력 \\n으로 구분해서 숫자만 적을 것, 숫자는 공백으로 구분할 것"
// );

// a = a.split("\\n");
// b = b.split("\\n");

// for (let i = 0; i < a.length; i++) {
//     sub_a = [];
//     _a = a[i].split(" ");
//     _a = _a.map(Number);
//     for (let j = 0; j < _a.length; j++) {
//         sub_a.push(_a[j]);
//     }
//     a[i] = sub_a;
// }

// for (let i = 0; i < b.length; i++) {
//     sub_b = [];
//     _b = b[i].split(" ");
//     _b = _b.map(Number);
//     for (let j = 0; j < _b.length; j++) {
//         sub_b.push(_b[j]);
//     }
//     b[i] = sub_b;
// }

// if (a[0].length !== b.length) {
//     console.log(-1);
// } else {
//     let result = []; // a.length만큼의 arr, arr의 인자 개수 b[0].length
//     for (let i = 0; i < a.length; i++) {
//         let sub_result = [];
//         for (let j = 0; j < b[0].length; j++) {
//             let calc = 0;
//             for (let k = 0; k < b.length; k++) {
//                 calc += a[i][k] * b[k][j];
//             }
//             sub_result.push(calc);
//         }
//         result.push(sub_result);
//     }
//     console.log(result);
// }

//---------- 18 ----------//
// // 0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0
// // 0 1 1 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0
// // 0 1 1 0 0\n0 0 0 1 0\n1 0 0 1 0\n0 0 1 0 0\n0 1 0 0 0
// let input = prompt("지뢰찾기 판 입력 띄어쓰기 구분할 것");
// let input_list = input.split("\\n");
// for (let i = 0; i < input_list.length; i++) {
//     let sub_list = input_list[i].split(" ");
//     input_list[i] = sub_list;
// }

// for (let i = 0; i < input_list.length; i++) {
//     for (let j = 0; j < input_list[i].length; j++) {
//         if (input_list[i][j] === "1") {
//             input_list[i][j] = "f";

//             if (
//                 i != 0 &&
//                 input_list[i - 1][j] != "f" &&
//                 input_list[i - 1][j] != "1"
//             ) {
//                 input_list[i - 1][j] = "*";
//             }
//             if (
//                 j != 0 &&
//                 input_list[i][j - 1] != "f" &&
//                 input_list[i][j - 1] != "1"
//             ) {
//                 input_list[i][j - 1] = "*";
//             }
//             if (
//                 i != input_list.length - 1 &&
//                 input_list[i + 1][j] != "f" &&
//                 input_list[i + 1][j] != "1"
//             ) {
//                 input_list[i + 1][j] = "*";
//             }
//             if (
//                 j != input_list[i].length - 1 &&
//                 input_list[i][j + 1] != "f" &&
//                 input_list[i][j + 1] != "1"
//             ) {
//                 input_list[i][j + 1] = "*";
//             }
//         }
//     }
// }
// console.log(input_list);
// for (let i = 0; i < input_list.length; i++) {
//     for (let j = 0; j < input_list[i].length; j++) {
//         document.write(input_list[i][j]);
//         document.write("\u00a0");
//     }
//     document.write("<br>");
// }

//---------- 19 ----------//
// let player = prompt("선수 입력, 공백으로 구분할 것");
// let count_dish = prompt("각 선수가 먹은 접시 수 순서대로 입력");

// let player_lst = player.split(" ");
// let count_dish_lst = count_dish.split(" ");

// let mapping = {};

// for (let i = 0; i < player_lst.length; i++) {
//     mapping[player_lst[i]] = count_dish_lst[i];
// }

// let mapping_sort = Object.entries(mapping).sort((a, b) => b[1] - a[1]);

// let result = {};
// for (let i = 0; i < mapping_sort.length; i++) {
//     result[mapping_sort[i][0]] = i + 1;
// }
// console.log(result);

//---------- 20 ----------//
// let delivery = prompt("배달원 수 입력");
// let delivery_time = prompt("배달 시간 입력");

// delivery = Number(delivery);
// delivery_time = delivery_time.split(" ");
// delivery_time = delivery_time.map(Number);
// delivery_mapping = [];

// let timer = 0;
// if (delivery_time.length >= delivery) {
//     for (let i = 0; i < delivery; i++) {
//         delivery_mapping.push(delivery_time[i]);
//     }
//     delivery_time.splice(0, delivery);
//     console.log(delivery_mapping);

//     while (true) {
//         for (let i = 0; i < delivery_mapping.length; i++) {
//             if (delivery_mapping[i] !== 0) {
//                 delivery_mapping[i] -= 1;
//             }
//             if (delivery_mapping[i] === 0) {
//                 if (delivery_time.length > 0) {
//                     delivery_mapping[i] = delivery_time[0];
//                     delivery_time.splice(0, 1);
//                 } else {
//                     continue;
//                 }
//             }
//             //console.log(delivery_mapping);
//         }
//         timer += 1;
//         let sum = 0;
//         for (let i = 0; i < delivery_mapping.length; i++) {
//             sum += delivery_mapping[i];
//         }
//         if (sum === 0) {
//             break;
//         }
//     }
// } else {
//     timer = Math.max(...delivery_time);
// }

// console.log(timer);
