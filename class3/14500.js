let fs = require("fs");
// '/dev/stdin'
let input = fs.readFileSync("예제.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map((e) => +e);
let map = input.slice(1).map((e) => e.split(" ").map((e) => +e));
// console.log(map)

let max = 0;

// ㅁㅁㅁㅁ
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= m - 4; j++) {
    let sum = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i][j + 3];
    if (sum > max) max = sum;
  }
  if (i <= n - 4) {
    for (let j = 0; j < m; j++) {
      let sum = map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 3][j];
      if (sum > max) max = sum;
    }
  }
}

// ㅁㅁ
// ㅁㅁ
for (let i = 0; i <= n - 2; i++) {
  for (let j = 0; j <= m - 2; j++) {
    let sum = map[i][j] + map[i][j + 1] + map[i + 1][j] + map[i + 1][j + 1];
    if (sum > max) max = sum;
  }
}

// ㅁ
// ㅁ
// ㅁㅁ
for (let i = 0; i <= n - 3; i++) {
  for (let j = 0; j <= m - 2; j++) {
    let sum = map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 2][j + 1];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 3; i++) {
  for (let j = 0; j <= m - 2; j++) {
    let sum =
      map[i][j + 1] + map[i + 1][j + 1] + map[i + 2][j + 1] + map[i + 2][j];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 2; i++) {
  for (let j = 0; j <= m - 3; j++) {
    let sum = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1][j];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 2; i++) {
  for (let j = 0; j <= m - 3; j++) {
    let sum = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1][j + 2];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 3; i++) {
  for (let j = 0; j <= m - 2; j++) {
    let sum = map[i][j] + map[i][j + 1] + map[i + 1][j + 1] + map[i + 2][j + 1];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 3; i++) {
  for (let j = 0; j <= m - 2; j++) {
    let sum = map[i][j] + map[i][j + 1] + map[i + 1][j] + map[i + 2][j];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 2; i++) {
  for (let j = 0; j <= m - 3; j++) {
    let sum =
      map[i + 1][j] + map[i + 1][j + 1] + map[i + 1][j + 2] + map[i][j + 2];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 2; i++) {
  for (let j = 0; j <= m - 3; j++) {
    let sum = map[i][j] + map[i + 1][j] + map[i + 1][j + 1] + map[i + 1][j + 2];
    if (sum > max) max = sum;
  }
}

// ㅁ
// ㅁㅁ
//   ㅁ
for (let i = 0; i <= n - 3; i++) {
  for (let j = 0; j <= m - 2; j++) {
    let sum = map[i][j] + map[i + 1][j] + map[i + 1][j + 1] + map[i + 2][j + 1];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 3; i++) {
  for (let j = 0; j <= m - 2; j++) {
    let sum = map[i + 1][j] + map[i][j + 1] + map[i + 1][j + 1] + map[i + 2][j];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 2; i++) {
  for (let j = 0; j <= m - 3; j++) {
    let sum = map[i + 1][j] + map[i + 1][j + 1] + map[i][j + 1] + map[i][j + 2];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 2; i++) {
  for (let j = 0; j <= m - 3; j++) {
    let sum = map[i][j] + map[i][j + 1] + map[i + 1][j + 1] + map[i + 1][j + 2];
    if (sum > max) max = sum;
  }
}

// ㅁㅁㅁ
//   ㅁ
for (let i = 0; i <= n - 2; i++) {
  for (let j = 0; j <= m - 3; j++) {
    let sum =
      map[i + 1][j] + map[i + 1][j + 1] + map[i + 1][j + 2] + map[i][j + 1];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 3; i++) {
  for (let j = 0; j <= m - 2; j++) {
    let sum = map[i][j] + map[i + 1][j] + map[i + 2][j] + map[i + 1][j + 1];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 2; i++) {
  for (let j = 0; j <= m - 3; j++) {
    let sum = map[i][j] + map[i][j + 1] + map[i][j + 2] + map[i + 1][j + 1];
    if (sum > max) max = sum;
  }
}
for (let i = 0; i <= n - 3; i++) {
  for (let j = 0; j <= m - 2; j++) {
    let sum =
      map[i + 1][j] + map[i][j + 1] + map[i + 1][j + 1] + map[i + 2][j + 1];
    if (sum > max) max = sum;
  }
}

console.log(max);
