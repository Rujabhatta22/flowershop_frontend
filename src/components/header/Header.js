import React from 'react'
import "./header.css"

export default function Header() {
  return (
       <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?b=1&s=170667a&w=0&k=20&c=MBaQEp6lxIWgZV0eFqQ8d2_zDbYuFk5LEFBawDinLhw="
        alt=""
      />
    </div>
  )
}
