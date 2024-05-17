import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import {useDispatch, useSelector} from 'react-redux'

import sprite from "../PicturesHome/rsz_1pulpy.png";
import coca from'../PicturesHome/cocazero5.png'

import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { addToWishlist } from "../features/product/productSlice";

 
const ProductCard = (props) => {
  const { grid,data } = props;
  const dispatch = useDispatch();
  console.log(data);
  let location = useLocation();

const addToWish = (id)=>{
dispatch(addToWishlist(id));
}

 
  return (
    <>
    {
      
      data?.map((item, index)=>{
        return(
          <div
          key={index}
          className={` ${
            location.pathname == "/product" ? `gr-${grid}` : "col-3"
          } `}
        >
          <Link
            to={`${
              location.pathname == "/"
                ? "/product/:id"
                : location.pathname == "/product/:id"
                ? "/product/:id"
                : ":id"
            }`}
            className="product-card position-relative"
          >
            <div className="wishlist-icon position-absolute">
              <button className="border-0 bg-transparent" onClick={(e)=>{addToWish(item?._id)}}>
                <img src={wish} alt="wishlist" />
              </button>
            </div>
            <div className="product-image ">
              <img src={item?.images[0].url} className="img-fluid" alt="product image" />
  
            </div>
            <div className="product-details">
              <h5>
                Factored in: 
                {
                  item.brand
                }
              </h5>
              
              <h5 className="product-title">
              Name: {
                  item.title
                }
              </h5>
              <h5>
                Size: {
                  item.size
                }
              </h5>
              <ReactStars
                count={5}
                size={24}
                value={item?.totalratings.toString()}
                edit={false}
                activeColor="#ffd700"
              />
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              >
              {
                item.description
              }
              </p>
              <p className="price">
                Price: {
                item.price
      } </p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent">
                  <img src={prodcompare} alt="compare" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src={view} alt="view" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src={addcart} alt="addcart" />
                </button>
              </div>
            </div>
          </Link>
          
        </div>
        )
      })
    }
      

    </>
  );
};

export default ProductCard;