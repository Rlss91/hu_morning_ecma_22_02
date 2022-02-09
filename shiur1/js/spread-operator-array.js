let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

let arr3 = [6, 7, 8, 9, 10];

//copy multi
let arr110 = [...arr, ...arr3];

//copy multi
let arr12 = [...arr, ...arr2];
console.log("arr12", arr12);

//push to array
arr = [...arr, 6];

//push to head of the array
arr = [0, ...arr];
