import React from "react";
import BreadCrumb from "../componenets/BreadCrumb";
import Meta from "../componenets/Meta";
import Container from "../componenets/Container";

const RefundPloicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPloicy;