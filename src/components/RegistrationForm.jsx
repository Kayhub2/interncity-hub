import React, { useState } from "react";
import "../App.css"; // Ensure styling is applied

const RegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.course) newErrors.course = "Please select a course";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Registration Successful!");
    onClose(); // Close the form after submission
  };

  return (
    <div className="modal">
      <h2>Register for a Course</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <label>Choose a Course:</label>
        <select name="course" value={formData.course} onChange={handleChange} required>
          <option value="">Select a course</option>
          <option value="WordPress">WordPress</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Product Design-UX/UI">Product Design-UX/UI</option>
          <option value="Product Management">Product Management</option>
          <option value="Virtual Assistance">Virtual Assistance</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="Digital Marketing & Copywriting">Digital Marketing & Copywriting</option>
          <option value="Project Management">Project Management</option>
        </select>
        {errors.course && <p className="error">{errors.course}</p>}

        <button type="submit">Submit</button>
        <button type="button" className="close-button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
