import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/action";
import { Link, useParams } from "react-router-dom";
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const reponse = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await reponse.json());
      setLoading(false);
      console.log(product);
      console.log(loading);
    };

    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={450} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} />
          <Skeleton height={75} />
          <Skeleton height={25} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 my-4">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 my-4">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">{product.price}$</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-primary px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add To Cart
          </button>
          <Link to="/cart" className="btn btn-outline-primary ms-2 px-3 py-2">
            Go To Cart
          </Link>
        </div>
      </>
    );
  };
  return (
    <div className="container py-5">
      <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
}

export default Product;
