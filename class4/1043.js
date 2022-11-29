let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt", "utf-8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let check = new Array(n + 1).fill(-1);
input[1]
  .split(" ")
  .map(Number)
  .forEach((person, idx) => {
    if (idx > 0) {
      check[person] = 0;
    }
  });

const parties = input
  .slice(2)
  .map((party) => party.split(" ").map(Number).slice(1));

for (let i = 0; i < m; i++) {
  parties.forEach((party) => {
    let noKnowns = true;
    for (let i = 0; i < party.length; i++) {
      if (check[party[i]] === 0) {
        noKnowns = false;
        break;
      }
    }
    if (noKnowns) {
      party.forEach((person) => {
        check[person] = 1;
      });
    } else {
      party.forEach((person) => {
        check[person] = 0;
      });
    }
  });
}

let answer = 0;
parties.forEach((party) => {
  let noKnowns = true;
  for (let i = 0; i < party.length; i++) {
    if (check[party[i]] === 0) {
      noKnowns = false;
      break;
    }
  }
  if (noKnowns) {
    answer++;
  }
});

console.log(check);
console.log(answer);
