for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue;
    console.log(i, j);
  }
}
// 1 1
// 1 3
// 2 1
// 2 3
// 3 1
// 3 3
