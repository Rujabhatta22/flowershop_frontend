import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const PF = "http://localhost:3000"; // Replace with your image server URL

  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          src={PF + post.photo}
          alt={post.title}
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => (
            <span className="postCat" key={category._id}>
              {category.name}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">
            {post.title}
          </span>
        </Link>
        <span className="postPrice">${post.price}</span> {/* Add product price */}
        <hr />
        <span className="postDate">
          Added on: {new Date(post.createdAt).toDateString()}
        </span>
        <p className="postDesc">
          {post.description}
        </p>
        <button className="buyButton">Buy Now</button> {/* Add Buy Now button */}
      </div>
    </div>
  );
}
