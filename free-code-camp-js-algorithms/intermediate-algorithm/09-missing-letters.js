function fearNotLetter(str) {
  const arr = str.split('').map(letter => letter.charCodeAt(0))

  for(let i = 0; i < arr.length -1; i++){
    if(arr[i]+1 !== arr[i+1]){
      return String.fromCharCode(arr[i] + 1)
    }
  }
}

console.log(fearNotLetter("abce"));
