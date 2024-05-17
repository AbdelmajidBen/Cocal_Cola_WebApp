import React from "react";
import { Link } from "react-router-dom";

import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <div className="mainmain">
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="testhover mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className=" input-group-text p-1" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5 mt-3">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                : P38V+PHF, <br /> Tangier,Morocco <br />
                  PinCode: 90060
                </address>
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +212 661 898 183
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  abdelmajidbenjelloun@morocco.eccbc.com
                </a>
               
              </div>
            </div>
            <div className="col-5 mt-3">
              <h4 className="text-white mb-4">About ABC</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Our activity
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Our Brand
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Our History
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Politique QHSE
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            
            <div className="col-2 mt-3">
              <h4 className="text-white mb-4">ABC News</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1"> News & Media</Link>
                <Link className="text-white py-2 mb-1">Espace RH</Link>
                

              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} The Coca Cola Company All right Reserved
              </p>
            </div>
          </div>
        </div>
        
      </footer>
      
    </div>
  );
};

export default Footer;