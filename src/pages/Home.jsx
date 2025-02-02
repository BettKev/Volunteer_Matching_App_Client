import React from "react";
import helpneeded from "../assets/helpneeded_large.png";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/Home.css"; 

const Home = () => {
  return (
    <div className="container-fluid text-white bg-dark">
      {/* Hero Section */}
      <div className="hero-section text-center p-5 rounded-lg shadow-lg text-gold">
        <h1 className="display-3 fw-bold">Volunteer Matching</h1>
        <p className="lead mt-3">
          Discover opportunities, connect with others, and make a difference.
        </p>
        <div className="mt-4">
          <Link className="btn btn-outline-warning btn-lg me-3" to="/signup">
            Get Started!
          </Link>
          <Link className="btn btn-outline-warning btn-lg" to="/about">
            Learn More!
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="row mt-5 align-items-center">
        <div className="col-md-6">
          <img
            src={helpneeded}
            alt="About Us"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold text-warning">Who We Are</h2>
          <p className="mt-3">
            We are passionate about connecting people with opportunities that
            matter. Whether you're looking to volunteer or represent an
            organization, we help bridge the gap to make meaningful
            connections.
          </p>
          <a href="/services" className="btn btn-outline-warning mt-3">
            Explore Services
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center mt-5">
        <h2 className="fw-bold text-warning">Our Services</h2>
        <p className="lead mt-3">
          We offer a range of services to help volunteers and organizations
          connect effectively.
        </p>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card bg-dark text-warning shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Volunteer Matching</h5>
                <p className="card-text">
                  Find opportunities that align with your skills and passions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-warning shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Organization Support</h5>
                <p className="card-text">
                  Get access to volunteers and resources for your projects.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-warning shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Community Building</h5>
                <p className="card-text">
                  Join a network of like-minded individuals and organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-5 bg-secondary text-warning p-4 rounded shadow-lg">
        <h3 className="fw-bold">Ready to Get Involved?</h3>
        <p className="mt-3">
          Sign up today and start making a difference in your community.
        </p>
        <a href="/signup" className="btn btn-light btn-lg">
          Join Now
        </a>
      </div>
    </div>
  );
};

export default Home;
