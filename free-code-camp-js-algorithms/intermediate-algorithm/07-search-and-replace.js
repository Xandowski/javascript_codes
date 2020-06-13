function myReplace(str, before, after) {
  const re = /[A-Z]/g
  const str2 = after[0].toUpperCase().concat(after.slice(1))

  if(before.match(re)){
    return str.replace(before, str2)
  }
  else{
    return str.replace(before, after)
  }
  
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
