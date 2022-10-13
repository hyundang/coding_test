let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("예제.txt").toString().split("\n");
// console.log(input);

let len = input[0];
input = input.slice(1).map((e) => e.split(" "));

let tickets = [];
let sorted = [];
input.map((e) => (tickets = tickets.concat(e)));
sorted = tickets.map((e) => e);
sorted = sorted.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  else if (a[0] < b[0]) return -1;
  else return parseInt(a.slice(2)) - parseInt(b.slice(2));
});

let stack = [];
let i = 0;
let j = 0;
while (i < sorted.length) {
  if (j < tickets.length && tickets[j] === sorted[i]) {
    j++;
    i++;
  } else if (stack.length !== 0 && stack[stack.length - 1] === sorted[i]) {
    stack.pop();
    i++;
  } else {
    if (j >= tickets.length) break;
    stack.push(tickets[j]);
    j++;
  }
}

if (stack.length > 0) console.log("BAD");
else console.log("GOOD");
