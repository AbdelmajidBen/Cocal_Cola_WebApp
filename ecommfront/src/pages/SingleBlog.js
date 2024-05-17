import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../componenets/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../componenets/Meta";

import Container from "../componenets/Container";
import blogcoca from '../PicturesHome/cocablog.webp'

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">Le New Coke, ou l’histoire d’un échec</h3>
              <img src={blogcoca} className="img-fluid w-100 my-4" alt="blog" />
              <p>
              Le 23 avril 1985, Roberto Goizueta, alors PDG de The Coca-Cola Company, va annoncer un événement majeur à propos de la célèbre boisson gazeuse, qui s’avérera également être le plus gros risque de l'histoire de Coca-Cola. Après 100 ans de recette historique inchangée, la compagnie va lancer le New Coke.

Le but de cette manœuvre est de remporter la bataille auprès de son concurrent historique Pepsi, qui à l'époque remporte les faveurs du public selon plusieurs études de marché, notamment au niveau du goût. Le New Coke est donc plus doux en bouche, mais change surtout totalement le goût de la boisson.

Pour Pepsi, ce changement de position de Coca-Cola sera une victoire, en estimant avoir gagné une longue guerre des colas. Officiellement, Coca-Cola n'admettra jamais avoir changé la boisson pour son goût, afin de ne donner aucun crédit à Pepsi.

Afin de préparer le lancement, des tests ont été réalisés auprès de 190.000 consommateurs, et une grande campagne de communication sera lancée avec le slogan "Le meilleur le devient plus encore". C'est ainsi que le Coca-Cola disparaît, au profit du New Coke.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;