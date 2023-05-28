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
          Music is a friend for life.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Welcome to "Harmonious Notes," a music blog dedicated to delving into
        the captivating world of melodies, rhythms, and
        the power of music to touch our souls. In this
        digital sanctuary, we embark on a melodic journey,
        exploring diverse genres, sharing captivating stories
        of artists, and unraveling the intricate threads
        that connect us through the universal language of
        music.
        The Evolution of Jazz: Celebrating a Century of Swing
Jazz, born in the early 20th century, has become a timeless and influential genre. In this article, we dive into the origins of jazz, tracing its evolution through the ages. From the soulful blues of New Orleans to the bebop revolution, we explore the iconic figures, groundbreaking albums, and the enduring legacy that continues to shape modern music.

      </p>
    </div>
  )
}
