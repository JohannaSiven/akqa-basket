import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";

class RowDeleteBtn extends Component {

  
  render() {
    return (
      <button
        type="button"
        className="deleteBtn"
        onClick={this.props.deleteRow}
        style={{ border: "none" }}
      >
        <FaTrashAlt />
      </button>
    );
  }
}

export default RowDeleteBtn;
