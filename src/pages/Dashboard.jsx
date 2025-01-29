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
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null); // Track logged-in user's ID
  const [filter, setFilter] = useState("all"); // "all" or "owned"

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      console.error("No token found. Redirecting to login...");
      navigate("/login");
      return;
    }

    // Fetch user details to get role and user ID
    fetch(`${apiUrl}/details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRole(data.role);
        setUserId(data.user_id); // Assuming API returns "user_id"
      })
      .catch((error) => console.error("Error fetching user details:", error));

    // Fetch projects
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

  // Filter projects based on selection
  const filteredProjects = filter === "owned"
    ? projects.filter(project => project.organization_id === userId) // Assuming API returns organization_id
    : projects;

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
            <button className="btn btn-danger w-100 mt-3" onClick={() => localStorage.removeItem("access_token") || navigate("/login")}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="d-flex flex-column flex-grow-1 p-4">
        <h2>Welcome to Your Dashboard</h2>

        <p className="mt-3">You are logged in as <strong>{role ? role.charAt(0).toUpperCase() + role.slice(1) : "loading..."}</strong></p>

        {/* Filter Toggle */}
        {role === "organization" && (
          <div className="d-flex justify-content-end mb-3">
            <select className="form-select w-auto" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Projects</option>
              <option value="owned">My Projects</option>
            </select>
          </div>
        )}

        {/* Project List */}
        <div className="row overflow-auto" style={{ maxHeight: "calc(150vh - 200px)" }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.project_id} className="col-md-4 mb-3">
                <div className="card shadow-lg border-0">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <p className="badge bg-primary">{project.status}</p>
                    <Link to={`/projects/${project.project_id}`} className="btn btn-primary w-100 mt-3">
                      View Project
                    </Link>

                    {/* Organization Controls */}
                    {role === "organization" && (
                      <div className="mt-3 d-flex justify-content-between">
                        <button className="btn btn-warning" onClick={() => navigate(`/projects/${project.project_id}/edit`)}>
                          Update
                        </button>
                        <button className="btn btn-danger" onClick={() => handleDeleteProject(project.project_id)}>
                          Delete
                        </button>
                      </div>
                    )}

                    {/* Volunteer Controls */}
                    {role === "volunteer" && (
                      <div className="mt-3 d-flex justify-content-between">
                        <button className="btn btn-success" onClick={() => handleApplyToProject(project.project_id)}>
                          Apply
                        </button>
                        <button className="btn btn-warning" onClick={() => handleCancelApplication(project.project_id)}>
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No projects available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
