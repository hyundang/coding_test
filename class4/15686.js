let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const map = [];
let chickens = [];
let houses = [];
input.slice(1).forEach((e) => {
  let arr = e.split(" ").map(Number);
  
  // 집, 치킨집 좌표 저장
  arr.forEach((a, idx) => {
    if (a === 1) houses.push([map.length, idx]);
    if (a === 2) chickens.push([map.length, idx]);
  });
  
  map.push(arr);
});

function getPermutations(arr, selectNum) {
  let res = [];
  if (selectNum == 1) return arr.map((e) => [e]);
  arr.forEach((fixed, idx, origin) => {
    let newArr = [...origin.slice(idx + 1)];
    let permutations = getPermutations(newArr, selectNum - 1);
    let connected = permutations.map((e) => [fixed, ...e]);
    res.push(...connected);
  });
  return res;
}

// 치킨집 선택하는 경우의 수 선택 
let arr = [];
for (let i = 0; i < chickens.length; i++) arr.push(i);
let cases = getPermutations(arr, m);

let answer = [];
cases.forEach((c) => {
  // 각 경우의 수에 따른 치킨배달 총 거리(=sum) 계산
  let sum = 0;
  houses.forEach((house) => {
    let [hx, hy] = house;
    let min = -1;
    c.forEach((idx) => {
      let [cx, cy] = chickens[idx];
      if (min < 0 || min > Math.abs(cx - hx) + Math.abs(cy - hy))
        min = Math.abs(cx - hx) + Math.abs(cy - hy);
    });
    sum += min;
  });
  answer.push(sum);
});

console.log(Math.min(...answer));
