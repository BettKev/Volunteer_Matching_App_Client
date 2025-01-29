import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiUrl from "../config";

const Dashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  // Fetch the list of projects when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      console.error("No token found. Redirecting to login...");
      navigate("/login");
      return;
    }

    fetch(`${apiUrl}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects); // Assuming the response has a "projects" array
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, [navigate]);

  const handleLogout = () => {
    // Get the JWT token from localStorage (or sessionStorage)
    const token = localStorage.getItem("access_token");

    if (!token) {
      console.error("No token found. Redirecting to login...");
      navigate("/login");
      return;
    }

    // Call the logout route to inform the server
    fetch(`${apiUrl}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Logout failed: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message); // "Logout successful!" message

        // Remove the token from localStorage
        localStorage.removeItem("access_token");

        // Redirect the user to the login page
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4 className="text-center">Dashboard</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link text-white">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link text-white">
              Settings
            </Link>
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

        {/* Projects List Card */}
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Your Projects</h5>
                {projects.length > 0 ? (
  <ul className="list-group">
    {projects.map((project) => (
      <li key={project.project_id} className="list-group-item d-flex justify-content-between align-items-center">
        {project.title}<br></br>
        {project.description}<br></br>
        {project.status}
        <a href={`/projects`} className="btn btn-primary btn-sm">
          View More
        </a>
      </li>
    ))}
  </ul>
) : (
  <p>No projects available.</p>
)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
