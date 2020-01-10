import React, { Component } from "react";
import BasketTable from "./BasketTable";
import CostCalc from "./CostCalc";

class Basket extends Component {
  state = {
    subTotal: 0
  };

  calcSubTotal = changeToPrev => {
    const newSubTotal = (this.state.subTotal += changeToPrev);
    this.setState({
      subTotal: newSubTotal
    });
  };

  render() {
    return (
      <div>
        <BasketTable calcSubTotal={this.calcSubTotal} />
        <CostCalc subTotal={this.state.subTotal} />
      </div>
    );
  }
}

export default Basket;
