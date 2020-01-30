const createLimit = length => {
  let limit = ''
  while (length >= 1) {
    length--
    limit += '9';
  }
  return limit
}

const rangeNumbers = (high) => {
  let end = high ** 2
  let arr = [...Array(end).keys()]
  return arr.map(x => x += 1).filter(item => item.toString().length === (end.toString().length));
}

const palindromeRange = arr => {
  let answer = []
  for (let num of arr) {
    let temp = num
    let reverse = 0

    while (temp > 0) {
      let reminder = temp % 10
      reverse = (reverse * 10) + reminder
      temp = Math.floor(temp / 10)
    }

    if (num == reverse) {
      // return reverse
      answer.push(reverse)
    }
  }
  return answer
}

const findAllFactorPairs = number => {
  let freq = {};
  for (let i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      let pushed = [i, number / i].sort((x, y) => x - y)
      if (!freq[pushed[0]]) {
        freq[pushed[0]] = pushed[1]
      }
      if (number / i !== i) {
        let pushed = [number / i, number / (number / i)].sort((x, y) => x - y)
        if (!freq[pushed[0]]) {
          freq[pushed[0]] = pushed[1]
        }
      }
    }
    // factors.sort((x, y) => { return x - y; }); 
  }
  // console.log(freq)
  return freq
}

const lengthCheck = (obj, n) => {
  let present = false
  let length = Object.keys(obj).length
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  let answer = ''
  for (let i = 0; i < length; i++) {
    if (keys[i].length === n && values[i].toString().length === n) {
      present = !present
      answer = Number(keys[i]) * values[i] 
    }
  }
return answer
}

const largestPalindromeProduct = n => {
  let limit = createLimit(n)
  let range = rangeNumbers(limit)
  let palindromes = palindromeRange(range) 
  console.log(`this is the length of palindromes: ${palindromes.length}`)
  let arr = []
  let answer;
  for (let i = palindromes.length - 1; i >= 0; i--) {
    let obj = findAllFactorPairs(palindromes[i])
    if (lengthCheck(obj, n)) {
      arr.push(lengthCheck(obj,n))
    }
  }
  answer = arr[0]
  return answer
}

largestPalindromeProduct(3)




const euler4 = (n) => {
  let limit = ''
  while (length >= 1) {
    length--
    limit += '9';
  }
  var x, y, z, i = limit, latestPalindrome = 0, palindromeDivider = 0;
  for (x = 9; x > 0; x--) {
    for (y = 9; y >= 0; y--) {
      for (z = 9; z >= 0; z--) {
        latestPalindrome = 100001 * x + 10010 * y + 1100 * z;
        for (i = 999; i >= 100; i--) {
          if (latestPalindrome % i === 0) {
            palindromeDivider = latestPalindrome / i
            if(palindromeDivider > 999)break;
            if (palindromeDivider >= 100) {
              return [
                "our palindrome is ",
                palindromeDivider, " x ", i,
                " = ", latestPalindrome ].join("");
            }
          }
        }
      }
    }
  }
};

