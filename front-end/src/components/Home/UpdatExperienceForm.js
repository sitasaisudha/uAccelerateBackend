// UpdateExperienceForm.js
import React, { useState } from 'react';
import { useContext } from "react"; //using context api
import { MyContext } from "../../context/MyContext";

function UpdateExperienceForm() {
    const { isProfile, setProfil } = useContext(MyContext);
    const { isExperience, setExperience } = useContext(MyContext);
    const { experienceUpdated, setExperienceUpdated } = useContext(MyContext);
    const [formData, setFormData] = useState({
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        industry: '',
        functionAreas: [], // Initialize functionAreas as an empty array
    });


    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const selectedOption = e.target.value;
        const updatedOptions = [...formData.functionAreas];

        // Check if the option is already selected
        const index = updatedOptions.indexOf(selectedOption);
        if (index !== -1) {
            // If selected, remove it
            updatedOptions.splice(index, 1);
        } else {
            // If not selected, add it
            updatedOptions.push(selectedOption);
        }

        // Ensure not more than 6 options are selected
        if (updatedOptions.length > 6) {
            updatedOptions.shift(); // Remove the first option
        }

        setFormData({
            ...formData,
            functionAreas: updatedOptions,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setExperience(true);
            setExperienceUpdated(true);
            setFormData({
                companyName: '',
                position: '',
                startDate: '',
                endDate: '',
                industry: '',
                functionAreas: [],
            });

        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!formData.companyName.trim()) {
            newErrors.companyName = 'Company Name is required';
            isValid = false;
        }

        if (!formData.position.trim()) {
            newErrors.position = 'Position is required';
            isValid = false;
        }

        if (!formData.startDate.trim()) {
            newErrors.startDate = 'Start Date is required';
            isValid = false;
        }

        if (!formData.endDate.trim()) {
            newErrors.endDate = 'End Date is required';
            isValid = false;
        }

        if (!formData.industry.trim()) {
            newErrors.industry = 'Industry is required';
            isValid = false;
        }

        if (formData.functionAreas.length === 0) {
            newErrors.functionAreas = 'Function Areas is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Update Experience Form</h2>
            <label>
                Company Name:
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                {errors.companyName && <span className="error-message">{errors.companyName}</span>}
            </label>
            <label>
                Position:
                <input type="text" name="position" value={formData.position} onChange={handleChange} />
                {errors.position && <span className="error-message">{errors.position}</span>}
            </label>

            <label>
                Industry:
                <select name="industry" value={formData.industry} onChange={handleChange}>
                    <option value={formData.industry}>{formData.industry ? formData.industry : 'Select Industry'}</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                </select>
                {errors.industry && <span className="error-message">{errors.industry}</span>}
            </label>

            <label>
                Function Areas (Max 6):
                <select
                    name="functionAreas"
                    multiple={true}
                    onChange={handleChange}
                >
                    {formData.functionAreas.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                    <option value="HR">HR</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Finance">Finance</option>
                    <option value="IT">IT</option>
                    <option value="Operations">Operations</option>
                </select>
                {errors.functionAreas && <span className="error-message">{errors.functionAreas}</span>}
            </label>

            <div className='submit-row'>
                <p> <i className="ri-flashlight-line"></i> Your can update details later in profile section</p>
                <div className='btn-grp'>
                    <button className='submit-btn'> Continue</button>
                </div>
            </div>
        </form>
    );
}

export default UpdateExperienceForm;
