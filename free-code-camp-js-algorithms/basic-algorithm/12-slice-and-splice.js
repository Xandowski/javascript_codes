function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let arr3 = [...arr2]
  arr3.splice(n, 0, ...arr1.slice(0, arr1.length))
  return arr3;
}
