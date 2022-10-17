let fs = require("fs");
// '/dev/stdin'
let input = fs
    .readFileSync('예제.txt')
    .toString()
    .split("\n")
// console.log(input)

let goal = Number(input[0]);
let nums = new Array(10).fill(1);
input[2] && input[2].split(' ').map((e) => {
    nums[+e] = 0;
    return +e;
})

// console.log(nums)

const check = (num) => {
    let flag = true;
    num.split('').map((e) => +e).forEach((e) => {
        if (nums[e] !== 1) flag = false;
    })
    return flag;
}

let ans = String(goal).length;
if (Number(input[1]) !== 10) {
    if (!check(String(goal))) {
        let i = 1;
        while (1) {
            if (goal - i >= 0 && check(String(goal - i))) {
                ans = String(goal - i).length + i;
                break;
            } else if (check(String(goal + i))) {
                ans = String(goal + i).length + i;
                break;
            }
            i++;
        }
    }

    if (Math.abs(100 - goal) > ans)
        console.log(ans);
    else
        console.log(Math.abs(100 - goal))
} else {
    console.log(Math.abs(100 - goal))
}