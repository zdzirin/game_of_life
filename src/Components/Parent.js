import React from "react";
import Controls from "./Controls";
import Board from "./Board";
import Array2D from "./Array2D";
import { render } from "@testing-library/react";
import ColorPicker from "./ColorPicker";

export default class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.playing = false;
    this.board = new Array2D(10, 10, 33);

    this.state = {
      rows: 10,
      cols: 10,
      pop: 33,
      speed: 200,
      board: this.board,
      matrix: this.board.getMatrix(),
      openControls: false,
    };
  }

  async play() {
    if (!this.playing) {
      let interval = setInterval(() => {
        if (this.playing) {
          this.getNextStage();
          if (this.state.board.placed === 0) {
            this.playing = false;
            clearInterval(interval);
          }
        } else {
          clearInterval(interval);
        }
      }, this.state.speed);

      this.getNextStage();
    }
    this.playing = true;
  }

  pause() {
    this.playing = false;
  }

  getNextStage() {
    let neighbors = this.state.board.getNeighborMatrix();
    let swapped = 0;

    for (let r = 0; r < this.state.rows; r++) {
      for (let c = 0; c < this.state.cols; c++) {
        // Sum of neighbors of current spot
        let nSum = neighbors[r][c];

        // if alive
        if (this.state.board.getV(r, c) === 1) {
          // kill if not 2 or 3 neighbors
          if (nSum !== 2 && nSum !== 3) {
            //console.log("killing [" + r + ", " + c + "], n: " + nSum);
            this.state.board.setV(r, c, 0);
            swapped++;
          }
        } else {
          // if dead revive if exactly three neighbors
          if (nSum === 3) {
            //console.log("reviving [" + r + ", " + c + "], n: " + nSum);
            this.state.board.setV(r, c, 1);
            swapped++;
          }
        }
      }
    }

    this.setState({
      matrix: this.state.board.getMatrix(),
      pop: this.state.board.placed,
    });

    if (swapped === 0) {
      this.playing = false;
    }
  }

  changeRow() {
    let input = document.getElementById("rows");
    let rows = input.value;
    let size = this.state.cols * rows;
    let pop = this.checkPop(size);
    let board = new Array2D(rows, this.state.cols, pop);
    this.setState({
      rows: input.value,
      pop: pop,
      board: board,
      matrix: board.getMatrix(),
    });
  }

  changeCol() {
    let input = document.getElementById("cols");
    let cols = input.value;
    let size = this.state.rows * cols;
    let pop = this.checkPop(size);
    let board = new Array2D(this.state.rows, cols, pop);

    this.setState({
      cols: input.value,
      pop: pop,
      board: board,
      matrix: board.getMatrix(),
    });
  }

  changePop() {
    let input = document.getElementById("pop");
    let board = new Array2D(this.state.rows, this.state.cols, input.value);
    this.setState({
      pop: input.value,
      board: board,
      matrix: board.getMatrix(),
    });
  }

  checkPop(size) {
    if (this.state.pop > size) return size;
    else return this.state.pop;
  }

  swapControls() {
    this.setState({ openControls: !this.state.openControls });
  }

  showControls() {
    if (this.state.openControls === true) {
      return (
        <>
          <Controls
            size={this.state.cols * this.state.rows}
            rows={this.state.rows}
            cols={this.state.cols}
            pop={this.state.pop}
            changeRow={() => this.changeRow()}
            changeCol={() => this.changeCol()}
            changePop={() => this.changePop()}
          ></Controls>
          <ColorPicker
            setColor={(color) => {
              this.setColor(color);
            }}
          ></ColorPicker>
        </>
      );
    } else {
      return;
    }
  }

  setColor(color) {
    let root = document.documentElement;
    root.style.setProperty("--board-color", color);
  }

  render() {
    return (
      <div className="parent">
        <div className="Header">
          <div className="Row HRow">
            <div className="Background">
              <h1>Conway's Game of Life</h1>
            </div>
            <button type="button" onClick={() => this.play()}>
              Play
            </button>
            <button
              type="button"
              onClick={() => {
                this.pause();
              }}
            >
              Pause
            </button>
            <button
              type="button"
              onClick={() => {
                this.swapControls();
              }}
            >
              Controls
            </button>
          </div>
          {this.showControls()}
        </div>
        <Board
          matrix={this.state.matrix}
          neighbors={this.state.board.getNeighborMatrix()}
        />
      </div>
    );
  }
}
