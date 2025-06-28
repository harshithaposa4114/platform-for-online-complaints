import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-left">
        <h1>Empower Your Team,</h1>
        <p>Exceed Customer Expectations: Discover our</p>
        <p><strong>Complaint Management Solution</strong></p>
        <button className="custom-btn" onClick={() => navigate('/register')}>
           Register your Complaint
        </button>

      </div>

      <div className="home-right">
        <img
          src="https://media.istockphoto.com/id/1502422361/photo/design-professionals-using-a-laptop-together-in-an-office.jpg?s=612x612&w=0&k=20&c=Sd-KMHjQNTMmCO2HtNkSG8c-tLazIGXwtqSuZ5HhxSk="
          alt="Office Professionals"
          className="hero-img"
        />
      </div>
    </div>
  );
};

export default Home;