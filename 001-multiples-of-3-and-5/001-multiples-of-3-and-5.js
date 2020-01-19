/**
 * Calculate the sum of all natural numbers that are multiple of 'multiplesOf' up to 'maxInclusive'
 * @param {number} multiplesOf Sum only numbers that are evenly divisible by this number
 * @param {number} maxInclusive Consider natural numbers up to this number
 * @returns {number}
 */
export const sumOfMultiples = (multiplesOf = 1, maxInclusive = 10) => {
  const maxFactor = Math.floor(maxInclusive / multiplesOf);
  return multiplesOf * maxFactor * (maxFactor + 1) / 2;
};

/**
 * Calculate the sum of all natural numbers that are multiple of 3 or 5 and lower than 'number'
 * @param {number} number Sum natural numbers lower than this number
 * @returns {number}
 */
export const multiplesOf3and5 = (number) => {
  const sum3 = sumOfMultiples(3, number - 1);
  const sum5 = sumOfMultiples(5, number - 1);
  const sum15 = sumOfMultiples(15, number - 1);
  return sum3 + sum5 - sum15;
};