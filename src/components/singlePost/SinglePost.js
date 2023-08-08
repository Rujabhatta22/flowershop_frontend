import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './singlepost.css';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';

export default function SinglePost() {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const PF = 'http://localhost:3000';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = (postId) => {
    console.log(postId);
    axios.delete(`/posts/${postId}`).then(() => {
      alert('Post deleted successfully.');
      window.location.href = '/';
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  const handleQuantityChange = (value) => {
    setQuantity(Math.max(value, 1));
  };

  const handleCheckout = () => {
    console.log('Selected Quantity:', quantity);
    console.log('Selected Product:', post);
    // Add your checkout logic here...
  };

  return (
    <div className="singlePostContainer">
      <div className="singlePostWrapper">
        <div className="singlePostImgWrapper">
          {post.photo && (
            <img src={PF + post.photo} alt="" className="singlePostImg" />
          )}
        </div>

        <div className="singlePostInfo">
          {updateMode ? (
            <input
              type="text"
              value={title}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="singlePostTitle">
              {title}
              {post.username === user?.username && (
                <div className="singlePostEdit">
                  <i
                    className="singlePostIcon far fa-edit"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className="singlePostIcon far fa-trash-alt"
                    onClick={() => handleDelete(post._id)}
                  ></i>
                </div>
              )}
            </h1>
          )}

          <div className="singlePostInfo">
            
            <span className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>

          {updateMode ? (
            <textarea
              className="singlePostDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <p className="singlePostDesc">{desc}</p>
          )}
          {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
            
          )}
          <div className="checkoutSection">
        <div className="quantityContainer">
          <span>Quantity:</span>
          <div className="quantityControl">
            <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
          </div>
        </div>

        <button className="checkoutButton" >
          <Link className="link" to="/orderconfirmation">checkout</Link>
        </button>
      </div>
        </div>
      </div>

      
    </div>
  );
}
