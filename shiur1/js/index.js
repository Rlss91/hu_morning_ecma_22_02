let userObj = {
  name: "kenny",
  age: 7,
};

//spread operator for object
let newUserObj = { ...userObj };

let arr = [1, 2, 3, 4, 5];

//spread operator for array
let newArr = [...arr];
// let newArr = arr;

newArr[0] = 5;

console.log("arr", arr);

console.log("newArr", newArr);

// const name = userObj.name;
// const age = userObj.age;

//object destructuring
const { name, age } = userObj;
console.log("name", name);
console.log("age", age);

// for the traditional way
// let arrLength = arr.length;
// for (let i = 0; i < arrLength; i++) {
//   console.log(arr[i]);
// }

// for the new way
// for (let item of arr) {
//   console.log(item);
// }

//default parameter value
const calc = (num1 = 0, num2 = 0, op = "+") => {
  if (op === "+") {
    return num1 + num2;
  }
  if (op === "-") {
    return num1 - num2;
  }
  if (op === "*") {
    return num1 * num2;
  }
  if (op === "/") {
    return num1 / num2;
  }
};

//default parameter value with swutch case
const calcSwitch = (num1 = 0, num2 = 0, op = "+") => {
  switch (op) {
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "+":
    default:
      return num1 + num2;
  }
};

console.log("calcSwitch", calcSwitch(5, 0, "/"));

//object destructuring in function
const objDest = ({ name, age }) => {
  console.log(name, age);
};

objDest(userObj);
