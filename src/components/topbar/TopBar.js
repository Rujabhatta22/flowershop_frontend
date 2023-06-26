import "./topbar.css"
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  
  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }

  return (
      <div className='top'>
          <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            </div>
          <div className="topCenter">
              <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
                  </li>
          <li className="topListItem">
            <Link className="link" to="/category">CATEGORY</Link>   
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
              <Link className="link" to="/write">CREATE</Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
         </li>
        </ul>
            </div>
      <div className="topRight">
        {
          user ? (

              <img
              className="topImg"
              src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              />
          ) : (
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">LOGIN</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">REGISTER</Link>
                  </li>
                <li/>
                </ul>
            )
        }
          
            <i className="topSearchIcon fas fa-search"></i>
            </div>

    </div>
  )
}
