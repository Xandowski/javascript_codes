function titleCase(str) {

  let regex = /\s/g;
  let newStr = ''

  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      newStr += str[i].toUpperCase()
    }

    else if (str[i].match(regex)) {
      newStr += str[i]
      newStr += str[i + 1].toUpperCase()
      i++
    }

    else {
      newStr += str[i].toLowerCase()
    }
  }

  console.log(newStr)
  return newStr;
}
