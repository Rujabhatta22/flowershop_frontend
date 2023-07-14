import { Link, useLocation,useNavigate } from "react-router-dom"
import "./singlepost.css"
import { useEffect, useContext } from 'react';
import  axios  from 'axios';
import { useState } from 'react';
import { Context } from '../../context/Context';

import { message } from 'antd';
import Post from '../post/Post';


export default function SinglePost() {
  const location = useLocation()
  const navigate = useNavigate();

  const path = (location.pathname.split("/")[2]);
  const [post, setPost] = useState({})
  const PF = "http://localhost:3000";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setUpdateMode] = useState(false)

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title)
      setDesc(res.data.desc)
          
    };
    getPost()
  }, [path]);

  const handleDelete =  (postId) => {
  console.log(postId);
    axios.delete(`/posts/${postId}`)
     alert('Post deleted successfully.'); 
    window.location.href = '/';
           
    // .then(() => {
    //   navigate('/');
    // })
    // .catch((error) => {
    //   // Handle error if necessary
    //   console.error(error);
    // });
};
  
//   const handleDelete = async () => {
//   try {
//     await axios.delete(`/posts/${post._id}`)
      
//       .then((response) => {
//         console.log(response.data);
//         message.success('Your post has been published successfully');
//         navigate('/');
//       })
//       .catch((err) => {
//         message.error('An error occurred while publishing your post');
//       });
//   } catch (error) {
//     // Handle the error here
//     console.error(error);
//   }
// };


  
      const handleUpdate = async () => {
        try {
          await axios.put(`/posts/${post._id}`, {
            username: user.username, title, desc,
          });
          //window.location.reload();
          setUpdateMode(false)
        } catch (err) { }
      }
      return (
        <div className="singlePost">
          <div className="singlePostWrapper">
            {post.photo && (
              <img
                src={PF + post.photo}
                alt=""
                className="singlePostImg" />
            )}{
              updateMode ? (
                <input
                  type="text"
                  value={title}
                  className="singlePostTitleInput"
                  autoFocus
                  onChange={(e) => setTitle(e.target.value)} />
            
              ) : (
            
      
                <h1 className="singlePostTitle">
                  {title}
                  {post.username === user?.username && (
                    <div className="singlePostEdit">
                      <i className="singlePostIcon far fa-edit"
                          onClick={() => setUpdateMode(true)}></i>
                       

                      <i className="singlePostIcon far fa-trash-alt"
                        onClick={()=> handleDelete(post._id)}></i>
                    </div>
                  )}
                </h1>
              )
            }
            <div className="singlePostInfo">
              <span className="singlePostAuthor">Author:
                <Link to={`/?user=${post.username}`} className="link">
                  <b>{post.username}</b>
                </Link>
              </span>
              <span className="singlePostDate">
                {new Date(post.createdAt).toDateString()}
              </span>
            </div>
            {updateMode ? (
              <textarea className="singlePostDescInput" value={desc}
                onChange={(e) => setDesc(e.target.value)} />
            ) : (
              <p className="singlePostDesc">
                {desc}
              </p>
            )}
            {updateMode && (
              <button className="singlePostButton"
                onClick={handleUpdate}
              >Update</button>
            )}
          </div>
        </div>
      )
    }
