function binaryAgent(str) {
  const newArr = str.split(' ')
  const decimals = []
  let newStr = ''

  for(let i = 0; i < newArr.length; i++){
    binaryToDecimal(newArr[i].split(''), decimals)
  }

  decimals.forEach(item => {
    newStr+=String.fromCharCode(item)
  })

  return newStr;
}

function binaryToDecimal(b, arr) {
  let sum = 0
  for( let i = b.length-1, j = 0; i >= 0; i--, j++) {
    sum+=Math.pow(2, j)*b[i]
  }
  return arr.push(sum)
}


console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 0010000001100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))
