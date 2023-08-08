import React from 'react';
import './category.css';
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className="categoryContainer">
      <div className="categoryContent">
        <div className="categoryImage">
          <img
            src="https://thursd.com/storage/media/7376/flowers-bloom-in-sophia-ahamed-dark-night-photography-series003.jpeg"
            alt="Category"
          />
        </div>
        <div className="categoryList">
          <h2 className="categoryTitle">FLOWER Types</h2>
          <div className="categories">
            <div className="categoryItem">
              <i className="fas fa-rose"></i>
              <Link className="link" to="/?cat=Roses">ROSES</Link>  
            </div>
            <div className="categoryItem">
              <i className="fas fa-tulip"></i>
              <Link className="link" to="/?cat=Tulips">TULIPS</Link>  
            </div>
            <div className="categoryItem">
              <i className="fas fa-lotus"></i>
              <Link className="link" to="/?cat=Lotus">LOTUS</Link>  
            </div>
            <div className="categoryItem">
              <i className="fas fa-daisy"></i>
              <Link className="link" to="/?cat=Daisies">DAISIES</Link>  
            </div>
            <div className="categoryItem">
              <i className="fas fa-sunflower"></i>
              <Link className="link" to="/?cat=Sunflowers">SUNFLOWERS</Link>  
            </div>
            <div className="categoryItem">
              <i className="fas fa-leaf"></i>
              <Link className="link" to="/?cat=Greenery">GREENERY</Link>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
