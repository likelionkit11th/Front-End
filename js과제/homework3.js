// 1번
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();

console.log(nums);

// 2번
var arr = [200, 100, 300];
arr.splice(2, 0, 10000); 
console.log(arr);

// 3번
// 4

// 4번
// 3

// 5번
// 4

// 6번
// 2

// 7번
// 3,5

// 8번
// 84

// 9번
var result = year.concat('', month, '', day. '', hour, '', minute, '',Second)

// 10번
// ?

// 11번
const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};

const name = prompt("행성의 이름을 입력하세요.");

console.log(planets(name))\

// 12번
const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function(a, b) {
    return a - b;
  })
  .join(" ");

if (unsorted === sorted) {
  console.log("Yes");
} else {
  console.log("No");
