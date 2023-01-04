'use strict';
function processData(input) {
  for (const b of input) {
    if (b.startsWith('S;M;')) {
      const strArr = b.slice(4, -2).split(/(?=[A-Z])/);
      console.log(strArr[0] + ' ' + strArr[1].slice(0).toLowerCase());
    } else if (b.startsWith('S;V;')) {
      const strArr = b.slice(4).split(/(?=[A-Z])/);
      const strArrCorrect = [];
      for (let i = 0; i < strArr.length; i++) {
        strArrCorrect.push(
          strArr[i].slice(0, 1).toLowerCase() + strArr[i].slice(1)
        );
      }
      console.log(strArrCorrect.join(' '));
    } else if (b.startsWith('C;M;')) {
      const strArr = b.slice(4).split(' ');
      const strArrCorrect = [];
      for (let i = 0; i < strArr.length; i++) {
        strArrCorrect.push(
          strArr[i].slice(0, 1).toUpperCase() + strArr[i].slice(1)
        );
      }
      console.log(strArrCorrect.join('') + '()');
    } else if (b.startsWith('C;C;')) {
      const strArr = b.slice(4).split(' ');
      const strArrCorrect = [];
      for (let i = 0; i < strArr.length; i++) {
        strArrCorrect.push(
          strArr[i].slice(0, 1).toUpperCase() + strArr[i].slice(1)
        );
      }
      console.log(strArrCorrect.join(''));
    } else if (b.startsWith('S;C;')) {
      const strArr = b.slice(4).split(/(?=[A-Z])/);
      const strArrCorrect = [];
      for (let i = 0; i < strArr.length; i++) {
        strArrCorrect.push(
          strArr[i].slice(0, 1).toLowerCase() + strArr[i].slice(1)
        );
      }
      console.log(strArrCorrect.join(' '));
    } else if (b.startsWith('C;V;')) {
      const strArr = b.slice(4).split(' ');
      const strArrCorrect = [];
      for (let i = 0; i < strArr.length; i++) {
        if (i > 0) {
          strArrCorrect.push(
            strArr[i].slice(0, 1).toUpperCase() + strArr[i].slice(1)
          );
        } else {
          strArrCorrect.push(
            strArr[i].slice(0, 1).toLowerCase() + strArr[i].slice(1)
          );
        }
      }
      console.log(strArrCorrect.join(''));
    }
  }
}

const input = [
  'S;M;plasticCup()',
  'C;V;mobile phone',
  'C;V;mobile phone number',
  'C;C;coffee machine',
  'C;C;new javascript project',
  'S;C;LargeSoftwareBook',
  'C;M;white sheet of paper',
  'S;V;iPad',
  'S;V;iPhoneDevice',
  'S;V;newVeriableConst',
  'S;V;pictureFrame',
];
processData(input);
