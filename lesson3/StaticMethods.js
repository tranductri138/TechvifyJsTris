class Square {
  constructor(width) {
    this.width = width;
    this.height = width;
  }
  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }
}
let square1 = new Square(4);
let square2 = new Square(4);

console.log(Square.equals(square1, square2));
