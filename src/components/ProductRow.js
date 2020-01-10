import React, { Component } from "react";
import RowQty from "./RowQty";
import RowDeleteBtn from "./RowDeleteBtn";

export class ProductRow extends Component {
  state = {
    rowValue: 0
  };

  updateRowValue = (newRowValue, change) => {
    this.setState(
      {
        rowValue: newRowValue
      },
      () => this.props.calcSubTotal(change)
    );
  };

  render() {
    const { product } = this.props;
    return (
      <tr className="productRow">
        <td>{product.name}</td>
        <td>£{product.price}</td>
        <td>
          <RowQty
            initialQty={product.qty}
            unitPrice={product.price}
            updateRowValue={this.updateRowValue}
            calcSubTotal={this.props.calcSubTotal}
          />
        </td>
        <td>£{parseFloat(this.state.rowValue).toFixed(2)}</td>
        <td>
          <RowDeleteBtn deleteRow={this.deleteRow} />
        </td>
      </tr>
    );
  }
}

export default ProductRow;
