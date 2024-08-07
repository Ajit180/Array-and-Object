const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
const medianAge = ages.length % 2 === 0 ? 
  (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2 : 
  ages[Math.floor(ages.length / 2)];

// Find the average age
const averageAge = ages.reduce((acc, age) => acc + age, 0) / ages.length;

// Find the range of ages
const ageRange = maxAge - minAge;

// Compare min - average and max - average
const compareMinAvg = Math.abs(minAge - averageAge);
const compareMaxAvg = Math.abs(maxAge - averageAge);

console.log({ minAge, maxAge, medianAge, averageAge, ageRange, compareMinAvg, compareMaxAvg });
