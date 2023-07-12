import React from 'react';
import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Contacts() {
  const teamMembers = [
    {
      name: 'Bill Gates',
      position: 'CEO',
      image: 'https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d',
    },
    {
      name: 'Mukesh Ambani',
      position: 'Marketing Manager',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds',
    },
    // Add more team members here...
  ];

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <h1 className="settingsTitleUpdate">Contact Us</h1>
          <span className="settingsTitleDelete">Inkspire@gmail.com</span>
        </div>
        <div className="settingsContent">
          <div className="settingsImage">
            <img
              src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"
              alt="Contact Image"
            />
          </div>
          <div className="settingsDescription">
            <h2>About Us</h2>
            <p>
              We are dedicated to providing exceptional customer service and addressing any inquiries or concerns you may have. Our team is here to assist you and ensure your experience with our products/services is positive and enjoyable.
            </p>
            <h2>Contact Information</h2>
            <ul>
              <li>
                <i className="fas fa-envelope"></i> Inkspire@example.com
              </li>
              <li>
                <i className="fas fa-phone"></i> +977 9812345678
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Koteshwor, Madan Bhandari park, Kathmandu
              </li>
            </ul>
            <h2>Available Hours</h2>
            <p>
              Our helpline is open Monday to Friday, from 9:00 AM to 5:00 PM. We are closed on weekends and public holidays. Feel free to contact us during our business hours, and we will respond to your inquiries as soon as possible.
            </p>
          </div>
        </div>
        <div className="teamSection">
          <h2>Our Team</h2>
          <div className="teamMembers">
            {teamMembers.map((member, index) => (
              <div className="teamMember" key={index}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
