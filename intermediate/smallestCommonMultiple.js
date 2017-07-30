function smallestCommons(arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let smallestCommonFound = false;
  let sum = 0;

  while (!smallestCommonFound) {
    sum += max;
    for (let i = min; i < max; i++) {
      if (sum % i == 0) {
        if (i == max - 1) {
          smallestCommonFound = true;
        }
      } else {
        break
      }
    }
  }
  return sum
}


smallestCommons([1,5]);
