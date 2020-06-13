function primes(num) {
  let sum = 0

  for ( let i = 2; i <= num; i++){
    if ( isPrime(i) ){
      sum+=i
    }
  }

  return sum
}

function isPrime (n) {
  for (let i = 2; i < n; i++){
    if( n % i === 0 ){
      return false
    }
  }

  return true
}
