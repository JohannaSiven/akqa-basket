import React, { Component } from "react";
import BasketRow from "./BasketRow";

class BasketTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Cost</th>
          </tr>
        </thead>
        <BasketRow />
      </table>
    );
  }
}

export default BasketTable;
