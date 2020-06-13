function steamrollArray(arr) {
  const newArr = []

  arr.forEach(item => {
    if(Array.isArray(item)) {
      newArr.push(...steamrollArray(item))
    }
    else {
      newArr.push(item)
    }
  })
  return newArr
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
