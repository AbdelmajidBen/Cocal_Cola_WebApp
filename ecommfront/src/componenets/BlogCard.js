import React from "react";
import { Link } from "react-router-dom";
import pic1 from'../images/blog-1.jpg'
import blogcoca from '../PicturesHome/cocablog.webp'
const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blogcoca} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">Le New Coke, ou l’histoire d’un échec</h5>
        <p className="desc">
        Le 23 avril 1985, Roberto Goizueta, alors PDG de The Coca-Cola Company, va annoncer un événement majeur à propos de la célèbre boisson gazeuse, qui s’avérera également être le plus gros risque de l'histoire de Coca-Cola. Après 100 ans de recette historique inchangée, la compagnie va lancer le New Coke.
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;