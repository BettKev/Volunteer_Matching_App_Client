import React from "react";
import v1 from "../assets/v1.jpg"

const Contact = () => {
  return (
    <>
    <div className="container mt-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Contact Us</h1>
        <p className="lead">
          Have any questions or inquiries? We'd love to hear from you! Fill out the form below, or
          reach us through the contact details provided.
        </p>
      </div>

      {/* Contact Details */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h3 className="fw-bold">Our Contact Information</h3>
          <p className="mt-3">
            <strong>Email:</strong> support@ourwebsite.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Main Street, Suite 500, Cityville, ST 12345
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={v1}
            alt="Contact Us"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="card shadow p-4">
        <h3 className="fw-bold mb-4">Get in Touch</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg w-100">
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-5 text-center">
        <h3 className="fw-bold">Find Us</h3>
        <p className="lead">Visit us at our office location:</p>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item rounded shadow"
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373531550445!3d-37.81627944202153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f2b507%3A0x5045675218ce6e0!2sMelbourne%20CBD%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1615372757827!5m2!1sen!2s"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
