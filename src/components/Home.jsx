import React from "react";
import image from "../image/website thời trang Việt Nam.jpg";
import Product from "./Products";
function Home() {
  return (
    <div className="hero">
      <div class="card text-bg-dark text-white border-0">
        <img src={image} class="card-img" alt="..." height="550px" />
        <div class="card-img-overlay">
          <div className="container">
            <h5 class="card-title display-3 text-black fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p class="card-text lead fs-2 text-danger">
              Check out all the trends
            </p>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
}

export default Home;
