import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";

class RowDeleteBtn extends Component {

 
handleClick = () => {
  this.props.deleteRow()
}
  
  render() {
    return (
      <button
        type="button"
        className="deleteBtn"
        onClick={this.handleClick}
        style={{ border: "none" }}
      >
        <FaTrashAlt />
      </button>
    );
  }
}

export default RowDeleteBtn;
