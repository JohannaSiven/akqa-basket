import React, { Component } from "react";

export class ProductQty extends Component {
  render() {
    return (
      <>
        <input type="text" value="1" />
        <button onClick={this.addOne}>+</button>
        <button onClick={this.subOne}>-</button>
      </>
    );
  }
}

export default ProductQty;
