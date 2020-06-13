function getIndexToIns(arr, num) {
  let temp = 0;
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

  for (let i = 0; i <= arr.length; i++) {

    if (arr.length == 0) {
      return 0
    }

    if (num <= arr[i]) {
      return i
    }

    else if (num > arr[arr.length - 1]) {
      return arr.length
    }


  }

}
