import React, { useState } from "react";
import CourseList from "../components/CourseList";
import RegistrationForm from "../components/RegistrationForm";
import "../App.css"; // Import CSS

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container">
      {/* Logo at the top */}
      <img
  src="/internlogo.png"
  alt="Interncity Hub Logo"
  className="logo"
  onClick={() => setShowForm(true)} // Opens registration form on click
/>

      <h1>Welcome to Interncity Hub</h1>
      <p>
        Our goal is to expose every intern to real-world tech experience.
        <br /> Explore our available courses and register today!
      </p>

      {/* Updated Course List */}
      <CourseList />

      {/* Register Button */}
      <button className="register-button" onClick={() => setShowForm(true)}>
        Register Now
      </button>

      {/* Registration Form Modal */}
      {showForm && (
        <div className="modal">
          <RegistrationForm onClose={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
};

export default Home;
