import React, { Component } from "react";
import "./Cell.css";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    // console.log(ev.which.target);
    this.props.flipCells();
  }

  render() {
    var classCell = "Cell-data" + (this.props.isLit ? " lit" : "");

    return <td className={classCell} onClick={this.handleClick}></td>;
  }
}

export default Cell;
