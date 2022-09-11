/*
  8. Cho 1 object như sau: 
  const order = {
    cart: [
      { id: 1, name: "ao dai", amount: 5, price: 100000 },
      { id: 2, name: "ao coc", amount: 2, price: 200000 },
      { id: 3, name: "quan dai", amount: 3, price: 150000 },
      { id: 4, name: "quan coc", amount: 4, price: 130000 },
    ],
    total_money: 0,
    total_amount: 0
  };

  Yêu cầu: Chỉ dùng 1 lần reduce để lấy được giá trị cho total_money = 1870000 
  và total_amount = 14 (sử dụng reduce với giá trị khởi tạo là 1 object).
*/

const order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ], 
  total_money: 0, 
  total_amount: 0
};

function formatArray(arr) {
  let tmpObject = arr.cart.reduce((total, curValue) => {
    total.money = total.money + curValue.price * curValue.amount;
    total.amount = total.amount + curValue.amount;

    return total;
  }, { money: 0, amount: 0 });

  arr.total_money = tmpObject.money;
  arr.total_amount = tmpObject.amount;

  return arr;
}

console.log(formatArray(order));