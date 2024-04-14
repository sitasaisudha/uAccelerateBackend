// UpdateProfileForm.js
import React, { useState } from 'react';
import { useContext } from "react"; //using context api
import { MyContext } from "../../context/MyContext";
import "./ProfileForm.css";
function UpdateProfileForm() {
    const { isProfile, setProfil } = useContext(MyContext);
  const {isExperience, setExperience} = useContext(MyContext);
  const {proflieUpdated, setProfileUpdated} =useContext(MyContext);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    city: '',
    country: '',
    timezone: '',
    preferredLanguage: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setProfil(true);
      setProfileUpdated(true);

        setFormData({
        fullName: '',
        email: '',
        mobileNumber: '',
        city: '',
        country: '',
        timezone: '',
        preferredLanguage: '',
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required';
      isValid = false;
    } else if (!isValidPhoneNumber(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Invalid mobile number';
      isValid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      isValid = false;
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
      isValid = false;
    }

    if (!formData.timezone.trim()) {
      newErrors.timezone = 'Timezone is required';
      isValid = false;
    }

    if (!formData.preferredLanguage.trim()) {
      newErrors.preferredLanguage = 'Preferred Language is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Basic phone number validation
    return /^\d{10}$/.test(phoneNumber);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Update Profile Form</h2>
      <label>
        Full Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
      </label>
      <div className='form-row'>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </label>
      <label>
        Mobile Number:
        <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
        {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
      </label>
      </div>
      <div className='form-row'>
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
        {errors.city && <span className="error-message">{errors.city}</span>}
      </label>
      <label>
        Country:
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>
        {errors.country && <span className="error-message">{errors.country}</span>}
      </label>
      </div>
      
      <label>
        Time Zone:
        <select name="timezone" value={formData.timezone} onChange={handleChange}>
          <option value="">Select Time Zone</option>
          <option value="GMT">GMT</option>
          <option value="EST">EST</option>
          <option value="PST">PST</option>
        </select>
        {errors.timezone && <span className="error-message">{errors.timezone}</span>}
      </label>
      <label>
        Preferred Language:
        <select name="preferredLanguage" value={formData.preferredLanguage} onChange={handleChange}>
          <option value="">Select Preferred Language</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        {errors.preferredLanguage && <span className="error-message">{errors.preferredLanguage}</span>}
      </label>
      <div className='submit-row'>
        <p>  <i className="ri-flashlight-line"></i>  Your can update details later in profle section</p>
        <div className='btn-grp'> 
        Set Up later 
        <button className='submit-btn'> Continue</button>
        
         </div>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
