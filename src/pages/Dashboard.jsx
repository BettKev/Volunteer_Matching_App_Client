import React, { useEffect, useState } from "react";
import { useNavigate, Link, Routes, Route } from "react-router-dom";
import apiUrl from "../config";
import Profile from "../components/Profile";
import Settings from "../components/Settings";

const Dashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

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
        setProjects(data.projects);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, [navigate]);

  const handleLogout = () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      console.error("No token found. Redirecting to login...");
      navigate("/login");
      return;
    }

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
        console.log(data.message);
        localStorage.removeItem("access_token");
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
            <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content - Conditional Rendering */}
      <div className="d-flex flex-column flex-grow-1 p-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Welcome to Your Dashboard</h2>
                <p>This is your main dashboard area. Use this space to display relevant information or widgets.</p>

                {/* Scrollable Projects List */}
                <div className="flex-grow-1 overflow-auto" style={{ maxHeight: "85vh" }}>
                  <div className="row">
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
              </>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
