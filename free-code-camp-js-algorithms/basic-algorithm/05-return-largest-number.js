function largestOfFour(arr) {
  // You can do this!
  let greatest = 0;
  let greatests = []

  for (let i = 0; i <= arr.length; i++) {
    i = 0;
    greatest = arr[i][0]
    for (let j = 1; j < arr[i].length; j++) {

      if (arr[i][j] > greatest) {
        greatest = arr[i][j]
      }
    }
    greatests.push(greatest)
    arr.shift(i)
  }
  console.log(greatests)
  arr = [...greatests]
  return arr;
}
