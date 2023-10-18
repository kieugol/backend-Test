function grayCode(n) {
  if (n < 1 || n > 16) {
    return null;
  }
  
  const result = [0, 1];
  
  for (let i = 1; i < n; i++) {
    const msb = 1 << i;
    for (let j = result.length - 1; j >= 0; j--) {
      result.push(msb | result[j]);
    }
  }
  
  return result;
}

// Example usage:
const n = 2;
const grayCodeSequence = grayCode(n);
if (grayCodeSequence) {
  console.log(grayCodeSequence);
} else {
  console.log("Invalid input...");
}
