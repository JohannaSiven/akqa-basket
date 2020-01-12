import React from "react";
import "./App.css";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import AKQA from "./resources/AKQA-Logo.svg.png";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <img id="logo" src={AKQA} alt="AKQA logo" />
        <h2>Your Basket</h2>
      </div>
      <div className="headerText">
        <p>Items you have added to your basket are shown below.</p>
        <p>
          Adjust the quantities or remove items before continuing your purchase.
        </p>
      </div>
      <Basket />
      <Footer />
    </div>
  );
}

export default App;
