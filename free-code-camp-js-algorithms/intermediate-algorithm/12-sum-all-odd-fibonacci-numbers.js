function sumFibs(num) {
  const myArr = [1, 1]
  let sum = 2;

  for(let i = 0; i<num-2; i++){
    const next = myArr[i] + myArr[i+1];
    if(next%2 != 0 && next <= num){
      sum+=next
    }
    myArr.push(next);
  }
  return sum
}

sumFibs(4);
