function maxLengthOfRepeatedSubarray(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  
  // validation
  const invalidNum1 = nums1.find(val => !(val >= 0 && val <= 100))
  const invalidNum2 = nums2.find(val => !(val >= 0 && val <= 100))
  if (
    !(1 <= nums1.length && nums1.length <= 1000) ||
    !(1 <= nums2.length && nums2.length <= 1000)
    || invalidNum1 !== undefined
    || invalidNum2 !== undefined
  )  {
    return null
  }
  
  
  // Create a 2D array to store the lengths of common subarrays
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  let maxLength = 0;
  
  // Fill in the dp array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        maxLength = Math.max(maxLength, dp[i][j]);
      }
    }
  }
  
  return maxLength;
}

// Example usage:
const nums1 = [1, 2, 3, 2, 100];
const nums2 = [3, 2, 1, 4, 7];
const maxLength = maxLengthOfRepeatedSubarray(nums1, nums2);
if (maxLength) {
  console.log("Maximum Length of Repeated Subarray:", maxLength);
} else {
  console.log("Invalid input...");
}
