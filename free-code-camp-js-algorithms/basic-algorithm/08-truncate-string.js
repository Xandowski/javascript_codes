function truncateString(str, num) {
  // Clear out that junk in your trunk

  let str2 = ''

  if (num >= str.length) {
    return str
  }

  else {
    for (let i = 0; i < num; i++) {
      str2 += str[i]
    }
    str2 += '...'
    return str2;
  }

}
