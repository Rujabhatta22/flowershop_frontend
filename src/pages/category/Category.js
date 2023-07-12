import React from 'react';
import './category.css';

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
              <span className="categoryName">Music</span>
            </div>
            <div className="categoryItem">
              <i className="fas fa-heart"></i>
              <span className="categoryName">Life</span>
            </div>
            <div className="categoryItem">
              <i className="fas fa-futbol"></i>
              <span className="categoryName">Sport</span>
            </div>
            <div className="categoryItem">
              <i className="fas fa-heartbeat"></i>
              <span className="categoryName">Health</span>
            </div>
            <div className="categoryItem">
              <i className="fas fa-utensils"></i>
              <span className="categoryName">Food</span>
            </div>
            <div className="categoryItem">
              <i className="fas fa-tools"></i>
              <span className="categoryName">DIY</span>
            </div>
            <div className="categoryItem">
              <i className="fas fa-camera"></i>
              <span className="categoryName">Photography</span>
            </div>
            <div className="categoryItem">
              <i className="fas fa-globe"></i>
              <span className="categoryName">Travel</span>
            </div>
            <div className="categoryItem">
              <i className="fas fa-book"></i>
              <span className="categoryName">Books</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
