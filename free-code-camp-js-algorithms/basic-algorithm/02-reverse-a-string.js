function reverseString(str) {
  let newStr = str.split('').reverse().join('')
  return newStr;
}

console.log(reverseString("hello"));
