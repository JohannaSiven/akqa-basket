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
      () => this.props.updateRowValue(this.state.cost, this.state.cost)
    );
  };

  // onChange = event => {
  //   let inputQty = Number(event.target.value)
  //   if(inputQty < 0){
  //     this.setState(
  //       {
  //         qty: 0,
  //         cost: 0
  //       }
  //       //,
  //       //() => this.props.updateRowValue(this.state.cost.toFixed(2), this.state.change,
  //       this.state.qty)
  //     );
  //   }
  //   this.setState(
  //     {
  //       qty: Number(event.target.value),
  //       cost: this.state.cost * Number(event.target.value)
  //     }
  //     //,
  //     //() => this.props.updateRowValue(this.state.cost.toFixed(2), this.state.change)
  //   );
  // };

  addOne = () => {
    this.setState(
      {
        qty: this.state.qty + 1,
        cost: this.state.cost + this.state.unitPrice
      },
      () =>
        this.props.updateRowValue(
          this.state.cost.toFixed(2),
          this.state.unitPrice,
          this.state.qty
        )
    );
  };

  subOne = () => {
    this.setState(
      {
        qty: this.state.qty + -1,
        cost: this.state.cost + -1 * this.state.unitPrice
      },
      () =>
        this.props.updateRowValue(
          this.state.cost.toFixed(2),
          -1 * this.state.unitPrice,
          this.state.qty
        )
    );
  };

  render() {
    return (
      <>
        {this.state.qty > 1 ? (
          <>
            <input
              className="qtyInput"
              type="text"
              value={this.state.qty}
              //onChange={this.onChange}
              readOnly
            />
            <button className="qtyBtn" onClick={this.addOne}>
              +
            </button>
            <button className="qtyBtn" onClick={this.subOne}>
              -
            </button>
          </>
        ) : (
          <>
            <input
              className="qtyInput"
              type="text"
              value="1"
              //onChange={this.onChange}
              readOnly
            />
            <button className="qtyBtn" onClick={this.addOne}>
              +
            </button>
            <button className="qtyBtn" onClick={this.subOne} disabled>
              -
            </button>
          </>
        )}
      </>
    );
  }
}

export default RowQty;
