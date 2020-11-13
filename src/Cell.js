import React, { Component } from "react";
import "./Cell.css";

class Cell extends Component {
  render() {
    var classCell = "Cell-data" + (this.props.isLit ? " lit" : "");

    return <td className={classCell}></td>;
  }
}

export default Cell;
