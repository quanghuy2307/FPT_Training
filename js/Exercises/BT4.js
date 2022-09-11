/*
    4. Lấy ra 1 mảng mới từ mảng cho trước sao cho 
    các phần tử chỉ xuất hiện 1 lần (sử dụng Set)
    VD: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]
*/

function deleteDuplicate(arr) {
    return Array.from(new Set(arr));
}

arr = [3, 200, 8, 100, 3, 12, 200, 6, 11, -189];

console.log(deleteDuplicate(arr));