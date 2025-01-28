import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const apiUrl = "http://localhost:5000"

  const handleLogout = () => {
    // Remove the JWT token from localStorage or sessionStorage
    localStorage.removeItem("access_token");

    // Optionally, you can call the logout route to inform the server (optional)
    fetch(`${apiUrl}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // "Logout successful!" message
      })
      .catch((error) => console.error("Logout error:", error));

    // Redirect user to the login page or home page
    navigate("/login");
  };
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4 className="text-center">Dashboard</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Settings
            </a>
          </li>
          <li className="nav-item">
          <a href="#" className="nav-link text-white" onClick={handleLogout}>
                Logout
              </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <h2>Welcome to Your Dashboard</h2>
        <p>This is your main dashboard area. Use this space to display relevant information or widgets.</p>

        {/* Example Cards */}
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">Some quick example text to build on the card title.</p>
                <a href="#" className="btn btn-primary">
                  View More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">Another example text to build on the card title.</p>
                <a href="#" className="btn btn-primary">
                  View More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">Yet another example text for the card title.</p>
                <a href="#" className="btn btn-primary">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
