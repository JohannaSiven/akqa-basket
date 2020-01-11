import React, { Component } from "react";
import axios from "axios";

class BuyBtn extends Component {
  state = {
    disabled: false
  };
  submitBasket = () => {
    const { subTotal, basket } = this.props;
    const total = parseFloat(subTotal + subTotal * 0.2).toFixed(2);

    /*
    axios.post('/',basket) 
     --> where basket is an object containing the current basket contents
     --> here replaced with a blank promise that resolves in 500ms 
     */
    new Promise(resolve => setTimeout(resolve, 500))
      /*.then(res => *handle response as needed*)
        --> here replaced with an alert msg 
      */
      .then(() =>
        alert(`Successfully submitted basket with total of £${total}`)
      )
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props.basket);
    return (
      <div>
        {this.props.basket.length > 0 ? (
          <button onClick={this.submitBasket}>Buy Now>></button>
        )
        :
        (
          <button onClick={this.submitBasket} disabled>Buy Now>></button>
        )}
      </div>
    );
  }
}

export default BuyBtn;
