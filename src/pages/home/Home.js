import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Post from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"

export default function Home() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts")
            setPosts(res.data)
        }
        fetchPosts()
    }, [])
    
    return (
        <>
             <Header/>
      <div className="home">
                <Post posts={posts}/>
                <Sidebar/>
            </div>
            </>
  )
}
