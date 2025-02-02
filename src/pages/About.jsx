import React from "react";
import v1 from "../assets/v1.jpg";

const About = () => {
  return (
    <div className="container-fluid mt-5 text-white bg-dark p-4 rounded shadow-lg">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-warning">About Us</h1>
        <p className="lead">
          Learn more about our mission, vision, and values, and how we aim to make a difference.
        </p>
      </div>

      {/* Mission Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="fw-bold text-warning">Our Mission</h2>
          <p>
            Our mission is to connect volunteers and organizations seamlessly, enabling meaningful
            collaborations that create a positive impact in communities. We strive to be a platform
            that fosters growth, unity, and change.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={v1}
            alt="Mission"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 order-md-2">
          <h2 className="fw-bold text-warning">Our Vision</h2>
          <p>
            We envision a world where every individual and organization can work together to solve
            real-world problems. By bridging the gap between those who want to help and those who
            need it, we hope to build a stronger, more connected global community.
          </p>
        </div>
        <div className="col-md-6 order-md-1">
          <img
            src={v1}
            alt="Vision"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>

      {/* Core Values Section */}
      <div className="text-center">
        <h2 className="fw-bold text-warning mb-4">Our Core Values</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-warning shadow-lg h-100">
              <div className="card-body">
                <h5 className="card-title">Collaboration</h5>
                <p className="card-text">
                  We believe in the power of teamwork and strive to connect people and organizations
                  for a common goal.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-warning shadow-lg h-100">
              <div className="card-body">
                <h5 className="card-title">Empathy</h5>
                <p className="card-text">
                  Understanding and compassion drive our efforts to make meaningful connections and
                  create impact.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-warning shadow-lg h-100">
              <div className="card-body">
                <h5 className="card-title">Innovation</h5>
                <p className="card-text">
                  We continuously seek innovative ways to connect volunteers and organizations,
                  making the process easier and more effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-5 bg-secondary text-warning p-4 rounded shadow-lg">
        <h3 className="fw-bold">Join Our Mission</h3>
        <p className="mt-3">
          Be a part of our journey to create positive change. Whether you're an individual or an
          organization, there’s a place for you here.
        </p>
        <a href="/signup" className="btn btn-light btn-lg">
          Get Involved
        </a>
      </div>
    </div>
  );
};

export default About;
