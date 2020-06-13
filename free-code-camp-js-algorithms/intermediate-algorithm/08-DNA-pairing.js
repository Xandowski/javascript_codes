function pairElement(str) {
  const arr = []

  for(let item in str){
    if(str[item] == 'G'){
      arr.push(["G", "C"])
    }
    else if(str[item] == 'C'){
      arr.push(["C", "G"])
    }
    else if(str[item] == 'T'){
      arr.push(["T", "A"])
    }
    else if(str[item] == 'A'){
      arr.push(["A", 'T'])
    }
  }
  return arr;
}

pairElement("GCG");
