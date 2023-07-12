import "./topbar.css"
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { message } from "antd";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:3000/images/profile.jpg"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    message.success("Logout success")

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
            <Link to="/settings">
              <img
              className="topImg"
              src={PF + user.profilePic}
              alt="profile"
              />
              </Link>
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
