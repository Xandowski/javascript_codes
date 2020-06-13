function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      num = arr[i]

      return num
    }

    else if (i == arr.length - 1) {
      return undefined;
    }
  }

}
