// import axios from "axios"
// import { useEffect, useState } from "react"
// import Post from "../../components/posts/Posts"
// import { useLocation } from 'react-router-dom';
// import { Link } from "react-router-dom";
// import { useContext } from 'react';
// import { Context } from '../../context/Context';
// import { message } from "antd";

// export default function home() {
//       const { user, dispatch } = useContext(Context);

//     const [posts, setPosts] = useState([]);
//     const {search} = useLocation();
//     const PF = "http://localhost:3000/images/profile.jpg"
// const handleLogout = () => {
//     dispatch({ type: "LOGOUT" })
//     message.success("Logout success")

//   }
    
//     useEffect(() => {
//         const fetchPosts = async () => {
//             const res = await axios.get("/users"+search)
//             setPosts(res.data)
//         }
        
//         fetchPosts();
//     } )
    
//     return (
//         <>
//              <div className='top'>
//           <div className="topCenter">
//               <ul className="topList">
//           <li className="topListItem">
//             <Link className="link" to="/admin">POSTS</Link>
//                   </li>
//           <li className="topListItem">
//             <Link className="link" to="/users">USERS</Link>   
//           </li>

//           <li className="topListItem" onClick={handleLogout}>
//             {user && "LOGOUT"}
//          </li>
//         </ul>
//             </div>
//       <div className="topRight">

//         {
//           user ? (
//             <Link to="/settings">
//               <img
//               className="topImg"
//               src={PF + user.profilePic}
//               alt="profile"
//               />
//               </Link>
//           ) : (
//               <ul className="topList">
//                 <li className="topListItem">
//                   <Link className="link" to="/login">LOGIN</Link>
//                 </li>
//                 <li/>
//                 </ul>
//             )
//         } 
//             <i className="topSearchIcon fas fa-search"></i>
//             </div>

//     </div>
//       <div className="home">
//                 <Post posts={posts}/>
//             </div>
//             </>
//   )
// }
