import React from 'react';
import './category.css';
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className="categoryContainer">
      <div className="categoryContent">
        <div className="categoryImage">
          <img
            src="https://i.pinimg.com/236x/f0/db/26/f0db26bbfb5ba85b28719783973b40a0.jpg"
            alt="Category"
          />
        </div>
        <div className="categoryList">
          <h2 className="categoryTitle">CATEGORIES</h2>
          <div className="categories">
            <div className="categoryItem">
              <i className="fas fa-music"></i>
              {/* <span className="categoryName">Music</span> */}
              <Link className="link" to="/?cat=Music">MUSIC</Link>  
            </div>
            <div className="categoryItem">
              <i className="fas fa-heart"></i>
              <Link className="link" to="/?cat=Life">LIFE</Link>  
            </div>
            <div className="categoryItem">
              <i className="fas fa-futbol"></i>
              <Link className="link" to="/?cat=Sport">SPORTS</Link>  
            </div>
            <div className="categoryItem">
              <i className="fas fa-heartbeat"></i>
              <Link className="link" to="/?cat=Health">HEALTH</Link>  
            </div>
            <div className="categoryItem">
              <i className="fas fa-utensils"></i>
              <Link className="link" to="/?cat=Food">FOOD</Link>  
            </div>
            <div className="categoryItem">
              <i className="fas fa-tools"></i>
              <Link className="link" to="/?cat=DIY">DIY</Link>  
            </div>
            <div className="categoryItem">
              <i className="fas fa-camera"></i>
              <Link className="link" to="/?cat=Photography">PHOTOGRAPHY</Link>  
            </div>
            <div className="categoryItem">
              <i className="fas fa-globe"></i>
              <Link className="link" to="/?cat=Travel">TRAVEL</Link>
            </div>
            <div className="categoryItem">
              <i className="fas fa-book"></i>
              <Link className="link" to="/?cat=Books">BOOK</Link>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
