import React from "react";

const Services = () => {
  return (
    <div className="container-fluid mt-5 text-white bg-dark p-4 rounded shadow-lg">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-warning">Our Services</h1>
        <p className="lead">
          We provide a wide range of services to support individuals and organizations in making meaningful connections.
        </p>
      </div>

      {/* Services Section */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-warning shadow-lg h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">Volunteer Matching</h5>
              <p className="card-text">
                Discover opportunities that align with your skills, passions, and availability. We help you find the right fit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-warning shadow-lg h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">Organization Support</h5>
              <p className="card-text">
                Connect with volunteers who can help bring your projects to life. We streamline the process for you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-warning shadow-lg h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">Community Building</h5>
              <p className="card-text">
                Join a network of like-minded individuals and organizations dedicated to creating positive change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="card bg-dark text-warning shadow-lg h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">Training & Workshops</h5>
              <p className="card-text">
                Gain access to training sessions and workshops designed to help volunteers and organizations maximize their impact.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card bg-dark text-warning shadow-lg h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold">Resource Sharing</h5>
              <p className="card-text">
                Share and access resources such as tools, templates, and guides to support your projects and initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-5 bg-secondary text-warning p-4 rounded shadow-lg">
        <h3 className="fw-bold">Ready to Explore?</h3>
        <p className="mt-3">
          Whether you're an individual or an organization, we're here to support you every step of the way.
        </p>
        <a href="/signup" className="btn btn-light btn-lg">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Services;