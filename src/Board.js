import React, { Component } from "react";
import Cell from "./Cell.js";
import "./Board.css";

class Board extends Component {
  static defaultProps = {
    trows: 5,
    tcols: 5,
    chancesLightsStartOn: 0.25,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      arr: this.createBoard(),
    };
    // this.flip = this.flip.bind(this);
    this.flipCellsAroundMe = this.flipCellsAroundMe.bind(this);
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < this.props.trows; i++) {
      let row = [];
      for (let j = 0; j < this.props.tcols; j++) {
        row.push(Math.random() < this.props.chancesLightsStartOn);
      }
      board.push(row);
    }
    // console.log(board);
    return board;
  }

  flipCellsAroundMe(x, y) {
    let arr = this.state.arr;
    let { trows, tcols } = this.props;
    // console.log(x, y);
    function flip(x, y) {
      if (x >= 0 && x < trows && y >= 0 && y < tcols)
        //  this.state.arr[x][y] = !arr[x][y];
        arr[x][y] = !arr[x][y];
    }
    flip(x, y);
    flip(x + 1, y);
    flip(x - 1, y);
    flip(x, y + 1);
    flip(x, y - 1);

    this.setState({ arr: arr });
  }

  render() {
    let loopBoard = [];
    for (let i = 0; i < this.props.trows; i++) {
      let row = [];
      for (let j = 0; j < this.props.tcols; j++) {
        let position = `${i + 1}-${j + 1}`;
        row.push(
          <Cell
            flipCells={() => this.flipCellsAroundMe(i, j)}
            isLit={this.state.arr[i][j]}
            key={position}
          />
        );
      }
      loopBoard.push(<tr className="Board-row">{row}</tr>);
    }

    return (
      <div className="Board">
        <h1>BOARD GAME!</h1>
        <table className="Board-table">
          <tbody>{loopBoard}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;
