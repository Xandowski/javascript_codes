function dropElements(arr, func) {
  const newArr = [...arr]
  let i = 0


  if(func(arr[0])){
    while( func(arr[i]) ){
      i++
    }
    return newArr.slice(0, i)
  }

  else {
    while ( !func(arr[i]) ){
      i++
      if( i > arr.length){
        return []
      }
    }
    return newArr.slice(i)
  }
}
dropElements([1, 2, 3, 4], function(n) {return n === 1; });
