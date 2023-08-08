import "./sidebar.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
          <div className="sidebarItem">
              <span className="sidebarTitle">ABOUT US</span>
              <img src="https://www.vocso.com/blog/wp-content/uploads/2022/04/Top-Web-Development-Tools.jpg" alt="aboutus" />
              <p>
                  Welcome to FLORIST, where beauty blooms and moments are made special with our enchanting floral arrangements. We take pride in creating exquisite bouquets that convey emotions and celebrate life's precious occasions. Our inspiration comes from nature's finest creations. Each petal, stem, and leaf is chosen with love and care, ensuring that every bouquet is a true work of art.
              </p>
          </div>
          <div className="sidebarItem">
              <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
               </Link>
            ))}
              </ul>
          </div>
          <div className="sidebarItem">
              <span className="sidebarTitle">FOR MORE INFORMATION</span>
              <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i> 
              </div>
        <a 
          href="mailto:florist@gmail.com"
          className="sidebarItem link">
                <h4>florist@gmail.com</h4>
              </a>
          </div>
      </div>
  )
}
