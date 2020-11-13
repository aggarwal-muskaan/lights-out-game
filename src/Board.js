import React, { Component } from "react";
import Cell from "./Cell.js";
import "./Board.css";

class Board extends Component {
  static defaultProps = {
    trows: 5,
    tcols: 5,
    chancesLightsStartOn: 0.3,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      //   arr: this.createBoard(),
    };
  }

  //   createBoard() {
  //     let board = [];

  //     for (var i of this.props.trows) {
  //       <tr>
  //         for(var j of this.props.tcols)
  //         <Cell isLit={true} />
  //       </tr>;
  //     }

  //     return board;
  //   }
  turnLight() {
    if (Math.random() < this.props.chancesLightsStartOn) return true;
    else return false;
  }

  render() {
    let loopBoard = [];
    for (let i = 0; i < this.props.trows; i++) {
      let row = [];
      for (let j = 0; j < this.props.tcols; j++) {
        row.push(<Cell isLit={this.turnLight()} />);
      }
      loopBoard.push(<tr className="Board-row">{row}</tr>);
    }

    return (
      <table className="Board-table">
        <tbody>{loopBoard}</tbody>
      </table>
    );
  }
}

export default Board;
