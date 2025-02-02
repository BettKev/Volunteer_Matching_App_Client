import React from "react";
import v1 from "../assets/v1.jpg";

const Contact = () => {
  return (
    <div className="container-fluid py-5 text-light bg-dark">
      {/* Page Header */}
      <div className="text-center mb-4">
        <h1 className="fw-bold text-warning">Contact Us</h1>
        <p className="text-white">
          Have any questions? We'd love to hear from you! Use the form below or reach out to us directly.
        </p>
      </div>

      {/* Contact Info & Image */}
      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4 border-0 bg-secondary text-light">
            <h3 className="fw-bold mb-3 text-warning">Get in Touch</h3>
            <p><strong>Email:</strong> support@ourwebsite.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Address:</strong> 123 Main Street, Cityville, ST 12345</p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src={v1} alt="Contact" className="img-fluid rounded shadow-sm w-75" />
        </div>
      </div>

      {/* Contact Form */}
      <div className="card shadow-sm border-0 mt-4 bg-secondary text-light">
        <div className="card-body">
          <h3 className="fw-bold mb-3 text-center text-warning">Send Us a Message</h3>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control bg-dark text-light border-warning" id="name" placeholder="John Doe" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control bg-dark text-light border-warning" id="email" placeholder="example@mail.com" required />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control bg-dark text-light border-warning" id="message" rows="4" placeholder="Write your message here..." required></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-warning btn-lg w-100 mt-3">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-5 text-center">
        <h3 className="fw-bold text-warning">Our Location</h3>
        <p className="text-muted">Visit us at our office:</p>
        <div className="ratio ratio-4x3 rounded shadow-sm" style={{ maxWidth: "600px", margin: "auto" }}>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373531550445!3d-37.81627944202153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f2b507%3A0x5045675218ce6e0!2sMelbourne%20CBD%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1615372757827!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
