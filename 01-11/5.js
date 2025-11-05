// Because the inner condition i < 3 never changes — i stays 2 inside inner loop, so i < 3 is always true, j increases forever.
for(let i = 2; i < 3; i++){
  for(let j = 0; i < 3; j++){
    console.log(i, j);
  }
}
