function maxSubarraySum(arr, n) {
  if (n > arr.length || arr.length === 0) return null;

  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([], 4));
