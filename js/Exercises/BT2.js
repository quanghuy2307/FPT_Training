/*
  2. Tìm 2 phần tử có tổng lớn nhất trong 1 mảng
  VD: [1,7,9,2,5,3,8] => [9,8]
*/

function findMaxSum(arr) {
  arr.sort((a, b) => { return a - b });

  firstMax = arr.pop();
  secondMax = arr.pop();

  return firstMax + secondMax;
}

arr = [3, 200, 8, 100, 12, 200, 6];

console.log(findMaxSum(arr));