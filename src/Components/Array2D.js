export default class Array2D {
  constructor(rows, cols, n) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = new Array(rows);
    for (let r = 0; r < rows; r++) {
      this.matrix[r] = [];
      for (let c = 0; c < cols; c++) {
        this.matrix[r].push(0);
      }
    }

    this.placed = 0;

    // Initializes the game
    while (this.placed < n) {
      let r = Math.floor(Math.random() * this.rows);
      let c = Math.floor(Math.random() * this.cols);

      if (this.getV(r, c) !== 1) {
        //        console.log("placing (" + r + ", " + c + ")");
        //        console.log(this.placed);
        this.setV(r, c, 1);
      }
    }
  }

  getV(r, c) {
    return this.matrix[r][c];
  }

  setV(r, c, n) {
    if (n === 1) {
      this.placed++;
    } else {
      this.placed--;
    }
    this.matrix[r][c] = n;
  }

  getMatrix() {
    return this.matrix;
  }

  getNeighborMatrix() {
    let tmp = new Array(this.rows);
    for (let r = 0; r < this.rows; r++) {
      tmp[r] = [];
      for (let c = 0; c < this.rows; c++) {
        tmp[r].push(this.getNeighbors(r, c));
      }
    }
    return tmp;
  }

  getNeighbors(r, c) {
    if (r === 0) {
      if (c === 0) {
        return this.case1(r, c);
      } else if (c === this.cols - 1) {
        return this.case3(r, c);
      } else {
        return this.case2(r, c);
      }
    } else if (r === this.rows - 1) {
      if (c === 0) {
        return this.case6(r, c);
      } else if (c === this.cols - 1) {
        return this.case8(r, c);
      } else {
        return this.case7(r, c);
      }
    } else {
      if (c === 0) {
        return this.case4(r, c);
      } else if (c === this.cols - 1) {
        return this.case5(r, c);
      } else {
        return this.case9(r, c);
      }
    }
  }

  // Cases for getting neighbors
  case1(r, c) {
    let sum = 0;
    sum += this.getV(r, c + 1);
    sum += this.getV(r + 1, c);
    sum += this.getV(r + 1, c + 1);
    return sum;
  }

  case2(r, c) {
    let sum = 0;
    sum += this.getV(r, c - 1);
    sum += this.getV(r, c + 1);
    sum += this.getV(r + 1, c);
    sum += this.getV(r + 1, c - 1);
    sum += this.getV(r + 1, c + 1);
    return sum;
  }

  case3(r, c) {
    let sum = 0;
    sum += this.getV(r, c - 1);
    sum += this.getV(r + 1, c);
    sum += this.getV(r + 1, c - 1);
    return sum;
  }

  case4(r, c) {
    let sum = 0;
    sum += this.getV(r - 1, c);
    sum += this.getV(r - 1, c + 1);
    sum += this.getV(r, c + 1);
    sum += this.getV(r + 1, c);
    sum += this.getV(r + 1, c + 1);
    return sum;
  }

  case5(r, c) {
    let sum = 0;
    sum += this.getV(r - 1, c);
    sum += this.getV(r - 1, c - 1);
    sum += this.getV(r, c - 1);
    sum += this.getV(r + 1, c);
    sum += this.getV(r + 1, c - 1);
    return sum;
  }

  case6(r, c) {
    let sum = 0;
    sum += this.getV(r, c + 1);
    sum += this.getV(r - 1, c);
    sum += this.getV(r - 1, c + 1);
    return sum;
  }

  case7(r, c) {
    let sum = 0;
    sum += this.getV(r, c - 1);
    sum += this.getV(r, c + 1);
    sum += this.getV(r - 1, c);
    sum += this.getV(r - 1, c - 1);
    sum += this.getV(r - 1, c + 1);
    return sum;
  }

  case8(r, c) {
    let sum = 0;
    sum += this.getV(r, c - 1);
    sum += this.getV(r - 1, c);
    sum += this.getV(r - 1, c - 1);
    return sum;
  }

  case9(r, c) {
    let sum = 0;

    sum += this.getV(r - 1, c - 1);
    sum += this.getV(r - 1, c);
    sum += this.getV(r - 1, c + 1);

    sum += this.getV(r, c - 1);
    sum += this.getV(r, c + 1);

    sum += this.getV(r + 1, c - 1);
    sum += this.getV(r + 1, c);
    sum += this.getV(r + 1, c + 1);

    return sum;
  }
}
