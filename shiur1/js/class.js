class Point2D {
  x; //(x,y)
  y; //(x,y)
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let point3 = new Point2D(50, 50);
// let point3 = {
//     x:50,
//     y:50
// }
let point4 = new Point2D(100, 50);

console.log("point3", point3);

let point1 = {
  x: 50,
  y: 50,
};

let point2 = {
  x: 100,
  y: 50,
};

let dog = {
  legs: 4,
  head: 1,
  tail: 1,
  eyes: 2,
};

let cat = {
  legs: 4,
  head: 1,
  eyes: 2,
  teil: 1,
};

const printAnimal = ({ legs, head, tail, eyes }) => {
  console.log("legs", legs);
  console.log("head", head);
  console.log("tail", tail);
  console.log("eyes", eyes);
};

printAnimal(dog);
printAnimal(cat);

class Animal {
  legs;
  head;
  eyes;
  tail;
  constructor(legs, head, eyes, tail) {
    this.legs = legs;
    this.head = head;
    this.eyes = eyes;
    this.tail = tail;
  }
}

let dogNew = new Animal(4, 1, 2, 1);

// let dog = {
//   legs: 4,
//   head: 1,
//   eyes: 2,
//   tail: 1,
// };

console.log(dogNew);

class Img {
  width;
  height;
  url;
  constructor(width, height, url) {
    this.width = width;
    this.height = height;
    this.url = url;
  }
  printImgUrl() {
    console.log(this.url);
  }
}

let pikaso = new Img(180, 150, "...........google.........");
pikaso.printImgUrl();

//static in class
class ConsoleCSS {
  static log(str, style) {
    console.log("%c" + str, style);
  }
}

// let sfaf = new ConsoleCSS()

ConsoleCSS.log("stop!", "color:red;font-size:500px;");

class SortArr {
  static sort(arr, asc) {
    // arr.sort((a,b)=>a-b)
    let newArr = [...arr];
    if (asc == "<") {
      newArr.sort((a, b) => a - b);
    } else {
      newArr.sort((a, b) => b - a);
    }
    return newArr;
  }
}

let sortedArr = SortArr.sort([1, 3, 2, 4], ">");
console.log(sortedArr);
