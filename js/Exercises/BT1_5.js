/*
  1. Trả về 1 mảng gồm các phần tử giống nhau trong 2 mảng
  VD: array1 = [1,2,3,4,5,6];
      array2 = [3,4,8,9,12];
      => [3,4]

  5. Lấy ra 1 mảng mới gồm các phần tử trùng nhau trong 2 mảng, 
  mỗi phần tử xuất hiện đúng 1 lần ở mảng mới
  VD: const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
      const arr2 = [3, 5, 9, 10, 88];
      => [3,5,9]
*/

function findDuplication(arr1, arr2) {
  const resArray = [];

  /* Bai 1 */
  for (let idx = 0; idx < arr1.length; idx ++) {
    if (arr2.includes(arr1[idx])) {
      resArray.push(arr1[idx]);
    }
  }

  /* Bai 5 */
  // arr1.forEach(curValue => {
  //   if (arr2.includes(curValue)) {
  //     if (!resArray.includes(curValue)) {
  //       resArray.push(curValue);
  //     }
  //   }
  // })

  return resArray;
}

arr1 = [1, 2, 3, 4, 5, 6, 100, 6];
arr2 = [3, 4, 8, 9, 12, 100, 200, 6];

console.log(findDuplication(arr1, arr2));