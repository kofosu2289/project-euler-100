// find all factors of a given number
const findAllFactors = (number) => {
  let factors = [], i;
 
  for (i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      factors.push(i);
      if (number / i !== i) {
        factors.push(number / i);
      }
    }
    factors.sort((x, y) => { return x - y; }); 
  }
  return factors;
}

const findAllFactorPairs = number => {
  let factors = [], i;
  let freq = {};
  for (i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      let pushed = [i, number / i].sort((x, y) => x - y)
      factors.push(pushed);
      if (!freq[pushed[0]]) {
        freq[pushed[0]] = pushed[1]
      }
      if (number / i !== i) {
        let pushed = [number / i, number / (number / i)].sort((x, y) => x - y)
        factors.push(pushed);
        if (!freq[pushed[0]]) {
          freq[pushed[0]] = pushed[1]
        }
      }
    }
    // factors.sort((x, y) => { return x - y; }); 
  }
  console.log(freq)
  return factors;
}

//determine if a number is prime
const isPrime = number => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

export const largestPrimeFactor = (number) => {
  let factors = findAllFactors(number) // find factors
  let primes = factors.filter(factor => isPrime(factor)) // remove non-prime factors
  return primes[primes.length - 1]; // return largest number in array
} 