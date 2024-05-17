import React from "react";
import BreadCrumb from "../componenets/BreadCrumb";
import Color from "../componenets/Color";
import Meta from "../componenets/Meta";
import coca from "../PicturesHome/cocazero5.png"
import cocalight from '../PicturesHome/rsz_cocalight.jpg'
import cancel from '../icons/cancel.png'
import Container from "../componenets/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cancel}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={coca} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Coca Cola Normal
                </h5>
                <h6 className="price mb-3 mt-3">$ 100</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Coca cola</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Soft drink</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>P</p>
                      <p>V</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src={cancel}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src={cocalight} alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Coca-Cola Zero Sugar
                </h5>
                <h6 className="price mb-3 mt-3">$ 100</h6>

                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Coca Cola</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Soft drink</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>P</p>
                      <p>V</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;