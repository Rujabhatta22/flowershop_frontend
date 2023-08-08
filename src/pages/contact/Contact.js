import React from 'react';
import './settings.css';

export default function ContactUs() {
  const teamMembers = [
    {
      name: 'Riti',
      position: 'Founder & CEO',
      image: 'https://wallpaperaccess.com/full/250200.jpg', 
    },
    {
      name: 'Krishai',
      position: 'Marketing Manager',
      image: 'https://img.freepik.com/free-photo/beauty-salon-haircare-skincare-products-advertisement-concept-close-up-beautiful-young-asian-woman-smiling-as-wind-softly-blowing-haircut-standing-pink-background_1258-59412.jpg', // Replace with Marketing Manager's image URL
    },
    // Add more team members here...
  ];

  return (
    <div className="contactUsContainer">
      <div className="contactUsContent">
        <div className="contactUsImage">
          <img
            src="https://assets.entrepreneur.com/content/3x2/2000/1654880763-GettyImages-1392166113.jpg?format=pjeg&auto=webp&crop=1:1" // Replace with your actual image URL
            alt="Contact Us"
          />
        </div>
        <div className="contactInfoSection">
          <div className="contactInfo">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <i className="fas fa-envelope"></i> info@florist.com
              </li>
              <li>
                <i className="fas fa-phone"></i> +977 9812345678
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Koteshwor, Madan Bhandari Park, Kathmandu
              </li>
            </ul>
            <h2>Available Hours</h2>
            <p>
              Our helpline is open Monday to Friday, from 9:00 AM to 5:00 PM. We are closed on weekends and public holidays. Feel free to contact us during our business hours, and we will respond to your inquiries as soon as possible.
            </p>
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
      </div>
    </div>
  );
}
