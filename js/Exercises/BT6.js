/*
  6. Từ 
    ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'] 
  trả về object 
    {'face': 2, 'zalo': 3, 'gmail': 1}
*/

function formatArray(arr) {
  const resObject = {};

  function countDuplicate(arr, val) {
    return arr.reduce((total, curValue) => {
      if (curValue === val) {
          total ++;
      }

      return total;
    }, 0);
  }

  /* Delete duplicate */
  tmpArray = Array.from(new Set(arr));

  arr.forEach(curValue => {
    resObject[curValue] = countDuplicate(arr, curValue);
  });

  return resObject;
}

arr = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];

console.log(formatArray(arr));