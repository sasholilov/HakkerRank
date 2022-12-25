'use strict';
function miniMaxSum(arr) {
  let maxArr = [].concat(arr);
  let minArr = [].concat(arr);
  let minSum = 0;
  let maxSum = 0;
  maxArr.sort().shift();
  minArr.sort().pop();

  for (let i = 0; i < maxArr.length; i++) {
    minSum += minArr[i];
    maxSum += maxArr[i];
  }
  console.log(minSum.maxSum);
}

miniMaxSum([1, 2, 3]);
