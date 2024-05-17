import {React,useEffect,useState} from "react";
import BreadCrumb from "../componenets/BreadCrumb";
import Meta from "../componenets/Meta";
import Container from "../componenets/Container";

import cocalight from '../PicturesHome/rsz_cocalight.jpg'
import cocazero from '../PicturesHome/ciel.png'
import fanta from '../PicturesHome/fanta1.png'
import cancel from '../icons/cancel.png'

import coca from '../PicturesHome/rsz_1hawaiv2.png'
import hawai from '../PicturesHome/rsz_hawai.png'
import {useDispatch, useSelector} from 'react-redux'
import { getUserProductWishlist } from "../features/user/userSlice";

const Wishlist = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
    getWishlistFromDb();
  },[])
  const getWishlistFromDb=()=>{
    dispatch(getUserProductWishlist());
  };
  

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cancel}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src={cocazero} 
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                Ciel est une marque de boissons non gazeuses appartenant à The Coca-Cola Company. Ciel propose principalement de l'eau en bouteille, avec différentes variantes et saveurs pour répondre aux préférences des consommateurs.


                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          
         
        </div>
      </Container>
    </>
  );
};

export default Wishlist;