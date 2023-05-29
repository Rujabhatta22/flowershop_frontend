import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Contacts() {
  return (
    <div className="settings">
      <div className="settingsWrapper">

        <form className="settingsForm">
          <div >
            <img
              src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"
              alt=""
            />
           <div className="settingsTitle">
          <span className="settingsTitleUpdate">Contact Us</span>
          <span className="settingsTitleDelete">Inkspire@gmail.com</span>
        </div>
          </div>
          <label>Full Name</label>
          <input type="text" placeholder="Ram Kumar" name="name" />
          <label>E-mail</label>
          <input type="email" placeholder="ram@gmail.com" name="email" />
          <label>Message</label>
          <input type="password" placeholder="Any problem to report?" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Contact Us
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
