// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// console.log(f);     // dạng array như này [[0, "Banana"], [1, "Orange"], [2, "Apple"], [3, "Mango"]] nhưng k in ra được (Array Iterator)
// // console.log(Array.from(f));  // [[0, "Banana"], [1, "Orange"], [2, "Apple"], [3, "Mango"]]

// for (let x of f) {
//     console.log(x);
// }


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = Array.from(fruits.keys());

// console.log(keys);  // Array Iterator
// // console.log(Array.from(keys));

// for (let x of keys) {
//     console.log(x);
// }

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,

//     fullName: function (fName = this.firstName, lName = this.lastName) {
//         console.log(`${fName} ${lName}`);
//     }
// };

// Object.defineProperty(person, 'age', {
//     enumerable: false
// });

// for (const key in person) {
//     console.log(person[key]);           // Khong phai mang, no in ra tung dong
// }

// console.log(Object.keys(person));       // Mang chua cac key cua property
// console.log(Object.values(person));     // Mang chua cac value cua property
// console.log(Object.entries(person));    // Mang chua cac cap key-value cua property

// let box = {
//     height: 10,
//     width: 20,
//     color: 'Red'
// };

// let style = {
//     color: 'Blue',
//     borderStyle: 'solid'
// };

// let styleBox = Object.assign({}, box, style);

// console.log(styleBox);
// /*
//     {
//         height: 10,
//         width: 20,
//         color: 'Blue',
//         borderStyle: 'solid'
//     }
// */