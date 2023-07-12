import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutContent">
        <h2 className="aboutTitle">ABOUT US</h2>
        <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-384x202.jpg" alt="aboutus" className="aboutImage" />
        <div className="aboutText">
          <p className="aboutDescription">
            Inkspire is dedicated to empowering individuals to share their thoughts, experiences, and stories with the world. Our platform brings people together, fostering meaningful conversations across various topics.
            Our team comprises passionate individuals who believe in the power of community, technology, and writing. We strive to create an intuitive and user-friendly platform, allowing you to focus on your content. We continuously work behind the scenes to enhance features and provide a seamless experience for writers and readers.
          </p>
          <h3 className="aboutMissionVisionTitle">Our Mission and Vision</h3>
          <p className="aboutMissionVisionDescription">
            Our mission is to provide a platform for passionate individuals to share their knowledge, experiences, and insights globally. We aim to inspire, educate, and entertain our readers by offering a wide range of high-quality, thought-provoking content across various interests.
            Our vision is to become the go-to destination for readers and writers, creating a vibrant community where ideas are shared, conversations are sparked, and meaningful connections are formed. We strive to create a visually appealing, seamless, and intuitive blogging platform that allows writers and readers to fully immerse themselves in the content.
          </p>
        </div>
      </div>
    </div>
  );
}
