let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map((e) => e.replace(/\r/g, ""));
// console.log(input);

let [pocketNum, quesNum] = input[0].split(" ").map((e) => +e);
let pocketList = input.slice(1, pocketNum + 1);
let quesList = input.slice(pocketNum + 1);

let list = {};
for(let i=0; i<pocketList.length; i++) {
    list[pocketList[i]] = i+1;
}

for (let i = 0; i < quesNum; i++) {
  let idx = list[quesList[i]];
  if (idx >= 0) console.log(idx);
  else console.log(pocketList[Number(quesList[i]) - 1]);
}
