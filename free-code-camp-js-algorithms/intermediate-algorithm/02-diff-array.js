function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.forEach(item => {
    if (arr2.indexOf(item) === -1) {
      newArr.push(item)
    }
  })

  arr2.forEach(item => {
    if (arr1.indexOf(item) === -1) {
      newArr.push(item)
    }
  })

  return newArr;
}
