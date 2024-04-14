// Home.js
import React, { useState } from 'react';
import './HomeStyles.css';
import UpdateProfileForm from './UpdateProfileForm';
import UpdateExperienceForm from './UpdatExperienceForm';
import img from '../../assets/Illustration.png';
import { useContext } from "react"; //using context api
import { MyContext } from "../../context/MyContext";
function Home() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const { isProfile, setProfil } = useContext(MyContext);
  const {isExperience, setExperience} = useContext(MyContext);
  const {proflieUpdated, setProfileUpdated} =useContext(MyContext);
  const {experienceUpdated, setExperienceUpdated} = useContext(MyContext);

  const handleOptionClick = (option) => {
    switch (option) {
      case 'updateProfile':
        setShowProfileForm(true);
        setShowExperienceForm(false);
        break;
      case 'updateExperience':
        setShowProfileForm(false);
        setShowExperienceForm(true);
        break;
      default:
        setShowProfileForm(false);
        setShowExperienceForm(false);
        break;
    }
  };

  return (
    <div className="container">
        <div className='banner'>
            <div className='bannerLeft'>
            <p className='h1'> Hello <b>Willie</b></p>
            <p> Get the process started in less than 10 minutes. Let us handle the rest. </p>
            <div className='bannerpart2'> < button> Get Started</button>  <p> Having trouble ?  <u>Get help </u> </p> </div>
            </div>
            <img src={img} className='bannerRight'/>
            
           
        </div>
     
      <div className="options">

       
        {
            isProfile? <div className='updateoptions' onClick={() => {handleOptionClick('updateProfile'); setProfil(false)}}>
                <div className='optionConatiner'> 
                    <h2>Update profile</h2>
                    <p>Start your journey with updating your profile</p>
                 </div>
           
            <input type="checkbox" checked={proflieUpdated}  className='checkbox' />
        
          </div>
            :<UpdateProfileForm />

        }

        {
            isExperience?<div className='updateoptions' onClick={() => {handleOptionClick('updateExperience'); setExperience(false)}}>
                <div className='optionConatiner'> 
            <h2>Update experience</h2>
            <p>Start your journey with updating your corporate and coaching experience</p>
            </div>
            <input type="checkbox" checked={experienceUpdated}  className='checkbox' />

          </div>:<UpdateExperienceForm />
        }

        <div 
         className='updateoptions'
        >
                      <div className='optionConatiner'> 
            <h2>Set up caleder </h2>
            <p> Start your journey with setting up your calender </p>
            </div>
            <input type="checkbox" checked={experienceUpdated}  className='checkbox' />

          
        </div>

      </div>
     
    </div>
  );
}

export default Home;
