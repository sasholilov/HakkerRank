'use strict';
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero += 1;
    } else if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    }
  }

  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
}

const arraySas = [1, 1, 0, -1, -1];
plusMinus(arraySas);
