import "./singlepost.css"

export default function SinglePost() {
  return (
      <div className="singlePost">
          <div className="singlePostWrapper">
              <img src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/japanese-fluffy-pancakes-recipe-7077w-2.jpg" alt="food" className="singlePostImg" />
              <h1 className="singlePostTitle">
                  "Fluffy Delights: The Art of Japanese Pancakes"
                  <div className="singlePostEdit">
                      <i className="singlePostIcon far fa-edit"></i>
                      <i className="singlePostIcon far fa-trash-alt"></i>
                  </div>
              </h1>
              <div className="singlePostInfo">
                  <span className="singlePostAuthor">Author: <b>Ruhi</b></span>
                  <span className="singlePostDate">1 hour ago</span>
              </div>
              <p className="singlePostDesc">
                  Welcome to our culinary journey into the world of Japanese pancakes, where light and fluffy delights take center stage. Japanese pancakes, also known as soufflé pancakes, have gained popularity for their unique texture and delightful presentation. In this blog, we explore the art of creating these delectable treats, delve into their history, and share tips on how to make them at home. Get ready to indulge your taste buds and experience pancake perfection like never before!
                  The Origin Story: From Hotcakes to Soufflé Pancakes
                  Discover the fascinating evolution of Japanese pancakes, from the humble hotcakes of Western influence to the dreamy, cloud-like creations we know today. We delve into the origins of these pancakes and how they have become a beloved breakfast and dessert option in Japan. Uncover the secrets behind their signature fluffiness and learn about the traditional toppings that elevate their flavor. 
                  The Technique: Mastering the Art of Fluff
Creating perfectly fluffy Japanese pancakes requires a delicate balance of technique and precision. In this article, we guide you through the step-by-step process of making these airy wonders. From whisking the egg whites to incorporating them into the batter, we share insider tips and tricks to ensure your pancakes rise to lofty heights. Prepare to impress your friends and family with your newfound pancake prowess.
                  Japanese pancakes have captured the hearts and taste buds of pancake enthusiasts worldwide. Their irresistible fluffiness and delicate texture make them a truly delightful culinary experience. With this blog as your guide, you can embark on your own pancake adventure, mastering the art of creating these heavenly treats and exploring the boundless possibilities they offer. So, grab your spatula and join us on a journey of pancake perfection.
              </p>
          </div>
    </div>
  )
}
