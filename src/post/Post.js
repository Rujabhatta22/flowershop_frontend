import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg"
        src="https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg"
        alt="music" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Music is a friend for life
        </span>
      </div>
    </div>
  )
}
