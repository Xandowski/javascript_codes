function repeatStringNumTimes(str, num) {
  // repeat after me
  let str2 = ""
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      str2 += str
    }
  }

  else {
    str2 = ''
  }
  return str2;
}
