function smallestCommons(arr) {
  const nArr = [...arr]
  nArr.sort(sortc)
  const newArr = rangeOfNumbers(nArr[0], nArr[nArr.length - 1])

  newArr.sort(sortd)

  let quotient = 0
  let loop = 1
  let i

  do {
    quotient = newArr[0] * loop * newArr[1]
    for(i = 2; i < newArr.length; i++){
      if(quotient % newArr[i] !== 0){
        break
      }
    }

    loop++
  } while( i !== newArr.length)

  return quotient
}

function sortc( a, b) {
  return (a - b)
}

function sortd( a, b ) {
  return (b - a)
}

function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum + 1) {
    return []
  }
  else {
    const arr = [startNum];
    arr.push(...rangeOfNumbers(startNum + 1, endNum))
    return arr
  }
};

console.log(smallestCommons([23, 18]))
