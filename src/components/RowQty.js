import React, { Component } from "react";

class RowQty extends Component {
  state = {
    qty: 0,
    unitPrice: 0,
    cost: 0
  };

  componentDidMount = () => {
    this.setState(
      {
        qty: this.props.initialQty,
        unitPrice: this.props.unitPrice,
        cost: this.props.initialQty * this.props.unitPrice
      },
      () => this.props.updateCost(this.props.initialQty * this.props.unitPrice)
    );
  };

  onChange = event => {
    this.setState(
      {
        qty: Number(event.target.value),
        cost: this.state.cost * Number(event.target.value)
      },
      () => this.props.updateCost(this.state.cost)
    );
  };

  addOne = () => {
    this.setState(
      {
        qty: this.state.qty + 1,
        cost: this.state.cost + this.state.unitPrice
      },
      () => this.props.updateCost(this.state.cost)
    );
  };

  subOne = () => {
    this.setState(
      {
        qty: this.state.qty + (-1),
        cost: this.state.cost - (this.state.unitPrice * 1)
      },
      () => this.props.updateCost(this.state.cost)
    );
  };

  render() {
    return (
      <>
        <input
          className="qtyInput"
          type="text"
          value={this.state.qty}
          onChange={this.onChange}
        />
        <button onClick={this.addOne}>+</button>
        <button onClick={this.subOne}>-</button>
      </>
    );
  }
}

export default RowQty;
