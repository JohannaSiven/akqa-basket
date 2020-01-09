import React from "react";
import "./App.css";
import BasketTable from "./components/BasketTable";

function App() {
  return (
    <div className="App">
      {/* <h1>AKQA</h1> */}
      {/* <h2>Your Basket</h2> */}
      <div className="header-text">
        <p>Items you have added to your basket are shown below.</p>
        <p>
          Adjust the quantities or remove items before continuing your purchase.
        </p>
        <BasketTable />
      </div>
    </div>
  );
}

export default App;
