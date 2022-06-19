import React from "react";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const { name, brand, img, newPrice, oldPrice, discount } = product;

  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src={img} alt="shoes" />
      </div>
      <div className="card-details">
        <div className="card-title">{brand}</div>
        <div className="card-description">
          <p className="card-des">{name}</p>
          <p className="card-price">
            {newPrice}
            <span className="price-strike-through">{oldPrice} </span>
            <span className="discount">{discount}% OFF</span>
          </p>
        </div>
        <div className="cta-btn">
          <button className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
