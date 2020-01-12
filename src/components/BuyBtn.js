import React, { Component } from "react";
//import axios from "axios";

class BuyBtn extends Component {
  state = {
    disabled: false
  };
  submitBasket = () => {
    const { subTotal, basket } = this.props;
    const total = parseFloat(subTotal + subTotal * 0.2).toFixed(2);

    /*
    axios.post('/',basket) 
     --> where basket is an object containing the current basket contents, used as request body
     --> here replaced with a blank promise that resolves in 500ms 
     */
    new Promise(resolve => setTimeout(resolve, 500))
      /*.then(res => *handle response as needed*)
        --> here replaced with an alert msg 
      */
      .then(() =>
        alert(`Successfully submitted basket with total of £${total}`)
        //console.log('sent basket: ', basket)
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.props.basket.length > 0 ? (
          <button className="buyBtn" onClick={this.submitBasket}>Buy Now>></button>
        )
        :
        (
          <button onClick={this.submitBasket} className="disabledBuyBtn" disabled>Buy Now>></button>
        )}
      </div>
    );
  }
}

export default BuyBtn;
