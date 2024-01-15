import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const [price, setPrice] = useState(0);

  const getPrice = () => {
    axios
      .get("https://api.coinbase.com/v2/prices/BTC-USD/spot")
      // .then is a Promise that will run when the API call is successful.
      .then((res) => {
        setPrice(res.data.data.amount);
      })
      // .catch is a Promise that will run when the API call fails.
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <div className="App">
      <h1>Current Bitcoin Price</h1>
      <p>${price} as of {(new Date()).toString()}</p>
    </div>
  );
}

export default App;
