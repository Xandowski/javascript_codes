function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  let arr2 = []

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i] == false) {
      arr2.push(arr[i])
    }
  }

  return arr2;
}
