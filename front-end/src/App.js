import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Header/Login/Login';
import Home from './components/Home/Home';
import { MyContext } from './context/MyContext';
import { useState } from "react";

function App() {
  const [isLogIn, setLogin] = useState(false); // variable to store wheather user loggrd in or not
  const [isHome, setHome] = useState(true); 
  const [isProfile, setProfil] = useState(true);
  const [isExperience, setExperience] = useState(true);
  const [proflieUpdated, setProfileUpdated] = useState(false);
  const [experienceUpdated, setExperienceUpdated] = useState(false);
  return (
    <MyContext.Provider
    value={{
      isLogIn,
      setLogin,
      isHome, 
      setHome,
      isProfile,
      setProfil,
      isExperience,
      setExperience,
      proflieUpdated, setProfileUpdated,
      experienceUpdated, setExperienceUpdated,

      }}>
    
   
    <div className="App">
     <Header/>
    
    {isLogIn? <Home/> :<Login/>}
   
    <Footer/>
    </div>
    </MyContext.Provider>
  );
}

export default App;
