import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="bg-light p-5 rounded-lg text-center shadow">
        <h1 className="display-4 fw-bold">Volunteer Matching</h1>
        <p className="lead mt-3">
          Discover opportunities, connect with others, and make a difference.
        </p>
        <div className="mt-4">
          <a href="/signup" className="btn btn-primary btn-lg me-3">
            Get Started
          </a>
          <a href="/about" className="btn btn-outline-secondary btn-lg">
            Learn More
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="row mt-5">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500x300"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="fw-bold">Who We Are</h2>
          <p className="mt-3">
            We are passionate about connecting people with opportunities that
            matter. Whether you're looking to volunteer or represent an
            organization, we help bridge the gap to make meaningful
            connections.
          </p>
          <a href="/services" className="btn btn-primary mt-3">
            Explore Services
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center mt-5">
        <h2 className="fw-bold">Our Services</h2>
        <p className="lead mt-3">
          We offer a range of services to help volunteers and organizations
          connect effectively.
        </p>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Volunteer Matching</h5>
                <p className="card-text">
                  Find opportunities that align with your skills and passions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Organization Support</h5>
                <p className="card-text">
                  Get access to volunteers and resources for your projects.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
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
      <div className="text-center mt-5 bg-primary text-white p-4 rounded shadow">
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
