function factorialize(num) {
  let fact = 1;
  if( num > 1){
    fact =  num * factorialize(num - 1);
  }
  return fact;
}
factorialize(5) ;
