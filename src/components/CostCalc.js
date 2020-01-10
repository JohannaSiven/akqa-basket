import React, { Component } from "react";

export class CostCalc extends Component {
  render() {
    const { subTotal } = this.props;
    const vat = 0.2;

    return (
      <div>
        <div className="costCalc">
          <p>Subtotal</p>
          <p>£{parseFloat(subTotal).toFixed(2)}</p>
        </div>
        <div className="costCalc">
          <p>VAT @ 20%</p>
          <p>£{parseFloat(subTotal * vat).toFixed(2)}</p>
        </div>
        <div className="costCalc">
          <p>Total Cost</p>
          <p>£{parseFloat(subTotal + subTotal * vat).toFixed(2)}</p>
        </div>
      </div>
    );
  }
}

export default CostCalc;
