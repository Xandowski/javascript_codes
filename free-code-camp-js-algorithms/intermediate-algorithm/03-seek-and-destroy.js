function destroyer(arr) {

  let newArr = [...arguments]
  newArr.shift()

  let myArr = []

  arr.filter((item, index) => {
    if (newArr.indexOf(item) === -1) {
      myArr.push(item)
    }
  })

  return myArr
}
