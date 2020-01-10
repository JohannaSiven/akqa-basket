import React, { Component } from "react";
import RowQty from "./RowQty";
import RowDeleteBtn from "./RowDeleteBtn";

export class ProductRow extends Component {
  state = {
    cost: 0
  };

  updateCost = cost => {
    console.log(cost);
    this.setState({
      cost: cost
    },
    () => this.props.countSubTotal(this.state.cost));
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
            setQty={this.setQty}
            updateCost={this.updateCost}
          />
        </td>
        <td>£{parseFloat(this.state.cost).toFixed(2)}</td>
        <td>
          <RowDeleteBtn deleteRow={this.deleteRow} />
        </td>
      </tr>
    );
  }
}

export default ProductRow;
