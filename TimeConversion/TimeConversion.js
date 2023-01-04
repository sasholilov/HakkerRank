'use strict';
function timeConversion(s) {
  if (s.endsWith('PM')) {
    const newStringArr = s.slice(0, -2).split(':');
    if (newStringArr[0] != '12') {
      newStringArr[0] = parseInt(newStringArr[0], 10) + 12;
      return newStringArr.join(':');
    } else {
      return newStringArr.join(':');
    }
  } else if (s.endsWith('AM')) {
    const newStringArr = s.slice(0, -2).split(':');
    if (newStringArr[0] == 12) {
      newStringArr[0] = '00';
    }
    return newStringArr.join(':');
  }
}

console.log(timeConversion('12:00:54PM'));
console.log(timeConversion('07:05:45AM'));
console.log(timeConversion('12:05:45AM'));
