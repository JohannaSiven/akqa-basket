import React, { Component } from "react";

class CostCalc extends Component {
  render() {
    const { subTotal } = this.props;
    const vat = 0.2;

    return (
      <div className="costCalc">
        <div>
          <p>Subtotal</p>
          <p>£{parseFloat(subTotal).toFixed(2)}</p>
        </div>
        <div>
          <p>VAT @ 20%</p>
          <p>£{parseFloat(subTotal * vat).toFixed(2)}</p>
        </div>
        <div id="totalCost">
          <p>Total Cost</p>
          <p>£{parseFloat(subTotal + subTotal * vat).toFixed(2)}</p>
        </div>
      </div>
    );
  }
}

export default CostCalc;
