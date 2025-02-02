import React, { useState, useEffect } from "react";
import apiUrl from "../config";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container-fluid text-center">
        <div className="row align-items-center">
          {/* Left: Copyright & Time */}
          <div className="col-md-4 text-md-start">
            <p className="mb-0">© {new Date().getFullYear()} My Website. All rights reserved.</p>
            <small className="text-white">
              Current Time: {currentTime.toLocaleTimeString()}
            </small>
          </div>

          {/* Center: API & Status Links */}
          <div className="col-md-4 my-2">
            <a
              href={apiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-sm me-2"
            >
              API Documentation
            </a>
            <a
              href="https://4645p5y1.status.cron-job.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              Status Page
            </a>
          </div>

          {/* Right: Branding */}
          <div className="col-md-4 text-md-end">
            <p className="mb-0">Built with ❤️ by Your Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
