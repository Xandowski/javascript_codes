function mutation(arr) {

  let tf = 0

  for (let i = 0; i < arr[1].length; i++) {
    let rx = new RegExp(arr[1][i], "gi")
    if (arr[0].match(rx)) {
      tf = true
    }
    else {
      return false
    }
  }
  console.log(tf)
  return tf;
}
