import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiUrl from "../config";
import Profile from "../components/Profile";
import Settings from "../components/Settings";

const Dashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

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
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4 className="text-center">Dashboard</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <button className="nav-link text-white btn" onClick={() => setShowProfile(true)}>
              Profile
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link text-white btn" onClick={() => setShowSettings(true)}>
              Settings
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="d-flex flex-column flex-grow-1 p-4">
        <h2>Welcome to Your Dashboard</h2>
        <p>This is your main dashboard area.</p>

        {/* Project List */}
        <div
          className="row overflow-auto"
          style={{ maxHeight: "calc(150vh - 200px)" }} // Adjust height to allow scroll
        >
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.project_id} className="col-md-4 mb-3">
                <div className="card shadow-lg border-0">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <p className="badge bg-primary">{project.status}</p>
                    <Link to={`/projects`} className="btn btn-primary w-100 mt-3">
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No projects available.</p>
          )}
        </div>
      </div>

      {/* Profile Modal */}
      {showProfile && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Profile</h5>
                <button type="button" className="btn-close" onClick={() => setShowProfile(false)}></button>
              </div>
              <div className="modal-body">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Settings</h5>
                <button type="button" className="btn-close" onClick={() => setShowSettings(false)}></button>
              </div>
              <div className="modal-body">
                <Settings />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop (for better UI experience) */}
      {(showProfile || showSettings) && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default Dashboard;
