import React, { Component } from "react";
import RowQty from "./RowQty";
import RowDeleteBtn from "./RowDeleteBtn";

class ProductRow extends Component {
  state = {
    name: "",
    price: 0,
    qty: 0,
    rowValue: 0,
    deleted: false
  };

  componentDidMount = () => {
    const { name, price, qty } = this.props.product;
    this.setState(
      {
        name: name,
        price: price,
        qty: qty,
        rowValue: price * qty
      },
      () => this.updateRowValue(this.state.rowValue.toFixed(2), 0, this.state.qty)
    );
  };

  updateRowValue = (newRowValue, change, qty) => {
    if (newRowValue <= 1) {
      return;
    } else {
      this.setState(
        {
          rowValue: Number(newRowValue),
          qty: qty
        },
        () => this.updateBasket(this.state, change)
      );
    }
  };

  updateBasket = (rowToBasket, change) => {
    this.props.buildBasket(rowToBasket);
    this.props.calcSubTotal(change);
  };

  deleteRow = () => {
    this.setState(
      {
        deleted: true
      },
      () => this.updateBasket(this.state, this.state)
    );
  };

  render() {
    const { product } = this.props;
    return (
      <>
        {!this.state.deleted && (
          <tr className="productRow">
            <td>{product.name}</td>
            <td>£{product.price}</td>
            <td>
              <RowQty
                initialQty={product.qty}
                qty={this.state.qty}
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
        )}
      </>
    );
  }
}

export default ProductRow;
