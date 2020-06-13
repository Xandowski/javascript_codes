function confirmEnding(str, target) {

  let rx = new RegExp(target + "$", "i")

  return rx.test(str)

}
