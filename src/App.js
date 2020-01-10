import React from "react";
import "./App.css";
import Basket from "./components/Basket";
function App() {
  return (
    <div className="App">
      {/* <div className="heading">
        <h1>AKQA</h1>
        <h2>Your Basket</h2>
      </div> */}
      <div className="headerText">
        <p>Items you have added to your basket are shown below.</p>
        <p>
          Adjust the quantities or remove items before continuing your purchase.
        </p>
      </div>
      <Basket />
    </div>
  );
}

export default App;
