import "./login.css";
import { Link, Navigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from '../../context/Context';
import axios from "axios";
import { message } from 'antd';
// import { useState } from "react";


export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("users/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      if (useRef === 'admin' & passwordRef === 'admin') {
        return Navigate("/admin")
        }
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      message.success("Login success")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE"});
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text"
          placeholder="Enter your username"
          ref={userRef}
        />
        <label>Password</label>
        <input className="loginInput" type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Sign In
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">Dont have account? 
        </Link>
      </button>
    </div>
  );
}
