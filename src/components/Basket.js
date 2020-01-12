import React, { Component } from "react";
import BasketTable from "./BasketTable";
import CostCalc from "./CostCalc";
import BuyBtn from "./BuyBtn";
import products from "../resources/products";

class Basket extends Component {
  state = {
    subTotal: 0,
    basket: []
  };

  componentDidMount = () => {
    const initialBasket = products;
    for (let i = 0; i < initialBasket.length; i++) {
      initialBasket[i].rowValue = initialBasket[i].price * initialBasket[i].qty;
    }
    this.setState({
      basket: initialBasket
    });
  };

  calcSubTotal = changeToPrev => {
    if (changeToPrev.deleted === true) {
      const newSubTotal = this.state.subTotal - changeToPrev.rowValue;
      this.setState({
        subTotal: newSubTotal
      });
    } else {
      const newSubTotal = (this.state.subTotal += changeToPrev);
      this.setState({
        subTotal: newSubTotal
      });
    }
  };

  buildBasket = rowToBasket => {
    let currentBasket = [...this.state.basket];
    
    let updatedRow = [rowToBasket];
    if (rowToBasket.deleted === true || rowToBasket.rowValue <= 0) {
      let newBasket = currentBasket.filter(
        existingProduct => existingProduct.name !== rowToBasket.name
      );
      this.setState({
        basket: newBasket
      });
    } else {
      let newBasket = currentBasket.map(
        existingProduct =>
          updatedRow.find(
            updatedProduct => updatedProduct.name === existingProduct.name
          ) || existingProduct
      );

      this.setState({
        basket: newBasket
      })
    }
  };

  render() {
    return (
      <div className="basket">
        <BasketTable
          calcSubTotal={this.calcSubTotal}
          buildBasket={this.buildBasket}
        />
        <CostCalc subTotal={this.state.subTotal} />
        <BuyBtn basket={this.state.basket} subTotal={this.state.subTotal} />
      </div>
    );
  }
}

export default Basket;
