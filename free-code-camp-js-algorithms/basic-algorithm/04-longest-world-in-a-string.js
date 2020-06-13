function findLongestWordLength(str) {
  let longestWorld = str.split(' ')
  let aux = 0;
  for( let i = 0; i < longestWorld.length; i++ ) {
    if( longestWorld[i].length > aux){
      aux = longestWorld[i].length
    }
  }
  return aux;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
