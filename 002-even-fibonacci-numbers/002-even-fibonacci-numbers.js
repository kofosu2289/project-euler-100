export const fiboEvenSum = (number) => {
  let arr = [];
  let sum = 0;

  // create modified fibonacci sequence
  for (let i = 0; i <= number - 1; i++) {
    if (i === 0) {
      arr[i] = 1
    } else if (i === 1) {
      arr[i] = 2
    } else {
      arr[i] = arr[i-1] + arr[i-2]
    }
  }

  // add up even numbered items in fibonacci sequence
  arr.forEach((num, i) => {
    if (i < arr.length) {
      if (num % 2 === 0) {
        sum += num
      } 
    }
  })
  return sum;
}