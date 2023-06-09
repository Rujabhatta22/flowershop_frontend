import "./category.css";

export default function Category() {
  return (
    <div className="sidebarItem">
      <div className="settingsWrapper">
          <div >
            <img
              src="https://blog.hubspot.com/hs-fs/hubfs/420_Choose-Best-Blog-Topics.png?width=595&height=400&name=420_Choose-Best-Blog-Topics.png"
              alt="category"
            />
          
          </div>
         <div className="sidebarItem">
              <span className="sidebarTitle">CATEGORIES</span>
              <ul className="sidebarList">
                  <li className="sidebarListItem">Music</li>
                  <li className="sidebarListItem">Life</li>
                  <li className="sidebarListItem">Sport</li>
                  <li className="sidebarListItem">Health</li>
                  <li className="sidebarListItem">Food</li>
                  <li className="sidebarListItem">DIY</li>
              </ul>
          </div>
      </div>
    </div>
   
  );
}
