import "./register.css"
import { Link } from "react-router-dom"
export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter username" />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter email" />
        <label>Password</label>
          <input className="registerInput" type="password" placeholder="Enter password" />
          <label>Confirm Password</label>
          <input className="registerInput" type="password" placeholder="Enter confirm password" />
        <button className="registerButton">Sign Up</button>
      </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">Sign In</Link>
        </button>
    </div>
    )
}
