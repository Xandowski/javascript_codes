function uniteUnique(arr, ...arg) {
  console.log(arg)

  for(let i = 0; i < arg.length; i++){
    for(let j = 0; j< arg[i].length; j++){
      if(arr.indexOf(arg[i][j]) == -1){
        arr.push(arg[i][j])
      }
    }
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
