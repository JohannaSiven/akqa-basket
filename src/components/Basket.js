import React, { Component } from "react";
import BasketTable from "./BasketTable";
import CostCalc from "./CostCalc";

class Basket extends Component {
  state = {
    subTotal: 0
  };

  countSubTotal = rowCost => {
    this.setState({
      subTotal: (this.state.subTotal += rowCost)
    });
  };

  
  render() {
    console.log(this.state);
    return (
      <div>
        <BasketTable countSubTotal={this.countSubTotal} />
        <CostCalc subTotal={this.state.subTotal} />
      </div>
    );
  }
}

export default Basket;
