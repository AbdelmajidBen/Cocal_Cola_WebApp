import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../componenets/BlogCard";
import ProductCard from "../componenets/ProductCard";
import SpecialProduct from "../componenets/SpecialProduct";
import Container from "../componenets/Container";
import brand1 from '../brandscoca/brand-1.png'
import brand2 from '../brandscoca/brand-2.png'
import brand3 from '../brandscoca/brand-3.png'
import brand4 from '../brandscoca/brand-4.png'
import brand5 from '../brandscoca/brand-5.jpg'
import brand6 from '../brandscoca/brand-6.png'
import brand7 from '../brandscoca/brand-7.png'
import brand8 from '../brandscoca/brand-8.png'

import pic1 from'../PicturesHome/test.png'
import pic2 from'../PicturesHome/swepss.png'
import pic3 from'../PicturesHome/spritebg.png'
import pic4 from'../PicturesHome/pomsbg.png'
import bg from '../PicturesHome/cocabg.jpg'

import main1 from'..//PicturesHome/girlcoca.webp'


import cocalight from '../PicturesHome/rsz_cocalight.jpg'
import cocazero from '../PicturesHome/cocazero5.png'
import fanta from '../PicturesHome/fanta1.png'
import poms from'../PicturesHome/rsz_12fantao.png'
import puplpy from '../PicturesHome/rsz_1pulpy.png'
import ciel from '../PicturesHome/rsz_1ciel.png'
import hawaiv2 from'../PicturesHome/rsz_1hawaiv2.png'
import hawai from '../PicturesHome/rsz_hawai.png'
import bgg from '../PicturesHome/main.jpg'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from "../features/product/productSlice";
import ccc from'../PicturesHome/catbanner-01.jpg'


import { services } from "../utils/Data";

const Home = () => {
  const [grid, setGrid] = useState(4);
  const productState=useSelector(state=>state?.product?.product);   
  
  const dispatch= useDispatch()
  useEffect(()=>{
    getProducts();
  },[])
  const getProducts=()=>{
    dispatch(getAllProducts());
  };
  return (
    <div className="homeblur">
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src={bgg}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Without Coca Cola life is Unthinkable</h4>
                
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={pic1}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>Coca Cola Pet1/2</h5>
                  <p>
                    From 11.99$ 
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                   src={pic2}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Sweps Canette</h5>
                  <p>
                    From 11.99$ 
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                   src={pic3}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Sprite Pet1/2</h5>
                  <p>
                    From 11.99$ 
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                   src={pic4}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Poms Canette</h5>
                  <p>
                    From 11.99$ 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Coca Cola Light</h6>
                  <p>10 Items</p>
                </div>
                <img src={cocalight} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Coca Cola Zero</h6>
                  <p>10 Items</p>
                </div>
                <img src={cocazero} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Sprite 1/2</h6>
                  <p>10 Items</p>
                </div>
                <img src={fanta} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Poms</h6>
                  <p>10 Items</p>
                </div>
                <img src={poms} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Shweeps Citron</h6>
                  <p>10 Items</p>
                </div>
                <img src={puplpy} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Burn</h6>
                  <p>10 Items</p>
                </div>
                <img src={ciel} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>AquaRius</h6>
                  <p>10 Items</p>
                </div>
                <img src={hawaiv2} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Ciel</h6>
                  <p>10 Items</p>
                </div>
                <img src={hawai} alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard data={productState ? productState:[]}/>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="brandshome marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={brand1} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand2} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand3} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand4} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand5} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand6} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand7} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand8} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;