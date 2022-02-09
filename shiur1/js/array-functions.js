let arr = [1, 2, 3, 4, 5];

//item = arr[i]
for (let item of arr) {
  console.log(item);
}

//index = i
for (let index in arr) {
  console.log(index);
}

//map
let newMapArr = arr.map((item) => item * 10);

// let newMapArr = arr.map((item) => {
//   return item * 10;
// });

//filter
let newFilterArr = arr.filter((item) => item > 3);

// let newFilterArr = arr.filter((item) => {
//   return item > 3;
// });

//find
let itemFromArr = arr.find((item) => item > 3);

// let itemFromArr = arr.find((item) => {
//   return item > 3;
// });

// let itemFromArr = arr.find((item) => {
//   if (item > 3) {
//     return true;
//   } else {
//     return false;
//   }
// });

//sort
let arr2 = [1, 3, 2, 5, 4, 11];

//for numbers only
// arr2.sort();
// console.log(arr2);

//for objects
arr2.sort((a, b) => b - a);
console.log(arr2);
//a - b -> min to max
//b - a -> max to min
