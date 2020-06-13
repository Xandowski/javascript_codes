function chunkArrayInGroups(arr, size) {
  let newArr = []

  for (let i = 0, j = 0; arr.length > 0; i++) {

    if (arr.length >= size) {
      newArr.push(arr.slice(j, size))
      arr.splice(j, size)
    }

    else {
      newArr.push(arr.slice(j, arr.length))
      arr.splice(j, size)
    }

  }
  return newArr;
}
