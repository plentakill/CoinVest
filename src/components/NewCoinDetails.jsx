import React from "react";

function NewCoinDetails({ coin }) {
  return (
    <div className="coin-details">
      <h3>{coin.name}</h3>
      <p>Symbol: {coin.symbol}</p>
      <p>Price: {coin.price}</p>
      <p>Market Cap: {coin.marketCap}</p>
      <p>24 Hour Volume: {coin.volume}</p>
      <p>24 Hour Change: {coin.change}%</p>
    </div>
  );
}

export default NewCoinDetails;
