import React, { Component } from "react";
import products from "../resources/products";
import ProductQty from "./ProductQty";

class BasketRow extends Component {
  render() {
    return (
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>£{product.price}</td>
            <td>
                <ProductQty />
            </td>
            <td>{product.price}*{product.qty}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default BasketRow;
