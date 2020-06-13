function translatePigLatin(str) {
  const re = /^[^aeiou]+/g;

  const arr = [...str]

  if(str.match(/^[aeiou]/g)){
     return str.concat('way')
  }
  else{
    const str2 = str.match(re)
    const newArr = [...str2.toString()]
    arr.splice(0, (newArr.length))
    arr.push(str2+'ay')
    let newStr = arr.join('').toString()
    return newStr
  }
}

translatePigLatin("algorithm")

