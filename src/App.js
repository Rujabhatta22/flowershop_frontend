import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Setting';
import Contacts from './pages/contact/Contact';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


function App() {
  return (
    <>
      <TopBar />
      <Register/>
    {/* <div style={{marginTop: 250}}>
    { <Login/> }
     </div> */}
      </>
  );
}

export default App;
