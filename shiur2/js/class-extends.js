//! ABBA
class ShapeT {
  tlaotT;
  kotkodimT;
  widthT;
  heightT;
  constructor(tlaotT, kotkodimT, widthT, heightT) {
    this.tlaotT = tlaotT;
    this.kotkodimT = kotkodimT;
    this.widthT = widthT;
    this.heightT = heightT;
  }
}

//! BEN
class RectT extends ShapeT {
  constructor(widthT, heightT) {
    super(4, 4, widthT, heightT);
  }
  calcAreaT() {
    return this.widthT * this.heightT;
  }
  calcPeremiterT() {
    return this.widthT * 2 + this.heightT * 2;
  }
}

let shapeT = new ShapeT(70, 70, 50, 120);
let rectT = new RectT(50, 50);
console.log({ shapeT, rectT });
console.log(shapeT);

class Point2DT {
  xT;
  yT;
  #meT; //private
  constructor(xT, yT) {
    this.xT = xT;
    this.yT = yT;
    this.#meT = "cm";
  }
}

class Point3DT extends Point2DT {
  zT;
  constructor(xT, yT, zT) {
    super(xT, yT);
    this.zT = zT;
    //! this.#meT = "km"; //! error
  }
}

class LineT {
  point1T;
  point2T;
  constructor(point1T, point2T) {
    this.point1T = point1T;
    this.point2T = point2T;
  }
}

let lineT = new LineT(new Point2DT(0, 0), new Point2DT(0, 5));
