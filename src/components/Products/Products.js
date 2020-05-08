import React from "react";
import "./Products.scss";

function Products() {
  return (
    <div className="container">
      <div className="header">
        <h1>MyStore</h1>
        <button>+</button>
      </div>
      <div className="product-wrapper">
        <div className="item">
          <img></img>
          <h2>title</h2>
          <p>price</p>
          <p>sale</p>
        </div>
        <div className="item">
          <img></img>
          <h2>title</h2>
          <p>price</p>
          <p>sale</p>
        </div>
        <div className="item">
          <img></img>
          <h2>title</h2>
          <p>price</p>
          <p>sale</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
