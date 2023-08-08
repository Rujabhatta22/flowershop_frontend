import React from 'react';
import './about.css';

export default function AboutUs() {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsContent">
        <div className="aboutUsImage">
          <img
            src="https://www.nativepoppy.com/cdn/shop/files/Native-Poppy-South-Park-2023_1024x1024.jpg?v=1681791438" // Replace with your actual image URL
            alt="About Us"
          />
        </div>
        <div className="aboutUsText">
         <p>
            Welcome to FLORIST, where beauty blooms and moments are made special with
            our enchanting floral arrangements. We take pride in creating exquisite
            bouquets that convey emotions and celebrate life's precious occasions.
            Our inspiration comes from nature's finest creations. Each petal, stem, and
            leaf is chosen with love and care, ensuring that every bouquet is a true
            work of art.
          </p>
          <p>
            At FLORIST, we believe in the language of flowers—their ability to express
            love, joy, gratitude, and sympathy. 
            Whether you're looking for a romantic bouquet, a cheerful arrangement to
            brighten someone's day, or an elegant centerpiece for a special event, we
            have the perfect flowers to elevate any occasion.
          </p>
          <p>
            Thank you for allowing us to be part of your life's celebrations and
            bringing our passion for flowers into your world. We look forward to
            helping you make every moment blossom with beauty and delight.
          </p>
        </div>
      </div>
    </div>
  );
}
