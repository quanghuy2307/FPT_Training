/*
    3. Tìm các cặp phần tử có tổng bằng 1 số cho trước
    VD: [1,7,9,2,5,3,8]; sum = 10 => [1,9] ; [7,3]; [2,8]
*/

function findMatchCouple(val, arr) {
    const resArray = [];

    for (let idx1 = 0; idx1 < arr.length; idx1 ++) {
        for (let idx2 = idx1 + 1; idx2 < arr.length; idx2 ++) {
            if (arr[idx1] + arr[idx2] == val) {
                resArray.push([arr[idx1], arr[idx2]]);
            }
        }
    }

    return resArray;
}

arr = [3, 200, 8, 100, 3, 12, 200, 6, 11, -189];

console.log(findMatchCouple(11, arr));