import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiUrl from "../config";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import CreateProject from "../components/CreateProject";
import { toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [role, setRole] = useState(null);
  const [filter, setFilter] = useState("all");
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [userId, setUserId] = useState(null); // store userId
  const [appliedProjects, setAppliedProjects] = useState([]); // Store applied projects for volunteers

  

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      console.error("No token found. Redirecting to login...");
      navigate("/login");
      return;
    }

    // Fetch user details to determine the user role
    fetch(`${apiUrl}/details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRole(data.role); // API returns a "role" field that indicates the role
        setUserId(data.user_id); // API returns a "userId" field
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
      .then((data) => {
        setProjects(data.projects || []); // Ensure an empty array if no projects found
      })
      .catch((error) => console.error("Error fetching projects:", error));

    // Fetch applied projects for volunteers
    fetch(`${apiUrl}/user/applications`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setAppliedProjects(data.data || []); // Set applied projects data
        } else {
          console.error("Error fetching applied projects:", data.message);
        }
      })
      .catch((error) => console.error("Error fetching applied projects:", error));

  }, [navigate]);

  // Filtered projects logic based on the user's role and filter
  const filteredProjects =
  role === "organization"
    ? filter === "owned"
      ? projects.filter((project) => String(project.organization_id) === String(userId)) // Ensure correct comparison
      : projects
    : filter === "applied"
    ? projects.filter((project) =>
        (appliedProjects || []).some((app) => app.project_id === project.project_id)
      )
    : projects;



  const handleLogout = () => {
    localStorage.removeItem("access_token");
    toast.success("Logout successful!", { position: "top-right", autoClose: 1000 });
    navigate("/login");
  };

  const handleDeleteProject = async (projectId) => {
    if (!window.confirm("Are you sure you want to delete this project? This action cannot be undone.")) {
      return;
    }

    const token = localStorage.getItem("access_token");

    try {
      const response = await fetch(`${apiUrl}/projects/${projectId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Deleted successfully!", { position: "top-right", autoClose: 1000 });
        setProjects((prevProjects) => prevProjects.filter(project => project.project_id !== projectId));
      } else {
       toast.error(`Error: ${data.message}`, { position: "top-right", autoClose: 1000 })
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("An error occurred while deleting the project.", { position: "top-right", autoClose: 1000 });
    }
  };

  const handleUpdateProject = (projectId) => {
    navigate(`/projects/${projectId}/edit`);
  };

  const handleApplyToProject = (projectId) => {
    const token = localStorage.getItem("access_token");
    fetch(`${apiUrl}/projects/${projectId}/apply`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Successfully applied", { position: "top-right", autoClose: 1000 });
          setAppliedProjects((prev) => [...prev, { project_id: projectId }]); 
        } else {
          console.error("Error applying to project:", data.error);
        }
      })
      .catch((error) => console.error("Error applying to project:", error));
  };

  const handleCancelApplication = (projectId) => {
    const token = localStorage.getItem("access_token");
    fetch(`${apiUrl}/projects/${projectId}/cancel`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Cancelled successfully!", { position: "top-right", autoClose: 1000 });
          // Update the state to remove the canceled application
        setAppliedProjects((prev) =>
          prev.filter((app) => app.project_id !== projectId)
        );

        } else {
          console.error("Error canceling application:", data.error);
        }
      })
      .catch((error) => console.error("Error canceling application:", error));
  };

  const handleProjectCreated = () => {
    setShowCreateProject(false); // Close the modal
    fetchProjects(); // Refresh the project list
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
      <div className="d-flex flex-column flex-grow-1 p-4 bg-primary text-white">
        <h2>Welcome to Your Dashboard</h2>
        <p className="mt-3">You are logged in as <strong>{role ? role.charAt(0).toUpperCase() + role.slice(1) : "loading..."}</strong></p>

        {role === "organization" && (
                      <div className="mt-3 d-flex justify-content-between">
                      <button className="btn btn-success mb-3" onClick={() => setShowCreateProject(true)}>
                        Create New Project
                      </button>
                      
                      </div>
                    )}

        {/* Filter Projects for Organization & Volunteer */}
        {(role === "organization" || role === "volunteer") && (
          <div className="mb-3">
            <label htmlFor="projectFilter">Filter Projects:</label>
            <select
              id="projectFilter"
              className="form-select"
              style={{ width: "200px" }}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Projects</option>
              {role === "organization" ? (
                <option value="owned">My Projects</option>
              ) : (
                <option value="applied">Applied Projects</option>
              )}
            </select>
          </div>
        )}

        {/* Project List */}
        <div className="row overflow-auto " style={{ maxHeight: "calc(150vh - 200px)" }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.project_id} className="col-md-4 mb-3">
                <div className="card shadow-lg border-0 bg-dark text-white">
                <div className="card-body">
  <h5 className="card-title">{project.title}</h5>
  <p className="card-text">{project.description}</p>
  <p className="badge bg-primary">{project.status}</p>
  {role === "organization" && (
    <div className="mt-3 d-flex justify-content-between">
      <button className="btn btn-warning" onClick={() => handleUpdateProject(project.project_id)}>
        Update
      </button>
      <button
        className="btn btn-danger"
        onClick={() => handleDeleteProject(project.project_id)}
      >
        Delete
      </button>
    </div>
  )}
  {role === "volunteer" && (
    <div className="mt-3 d-flex justify-content-between">
      {/* Conditionally render the Apply button text */}
      <button
        className="btn btn-success"
        onClick={() => handleApplyToProject(project.project_id)}
        disabled={appliedProjects.some(app => app.project_id === project.project_id)} // Disable if already applied
      >
        {appliedProjects.some(app => app.project_id === project.project_id)
          ? "Already Applied"
          : "Apply"
        }
      </button>
      {appliedProjects.some(app => app.project_id === project.project_id) && (
        <button
          className="btn btn-warning"
          onClick={() => handleCancelApplication(project.project_id)}
        >
          Cancel Application
        </button>
      )}
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

            {/* Create Project Modal */}
            {showCreateProject && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Project</h5>
                <button type="button" className="btn-close" onClick={() => setShowCreateProject(false)}></button>
              </div>
              <div className="modal-body">
                <CreateProject onProjectCreated={handleProjectCreated} />

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop (for better UI experience) */}
      {(showProfile || showSettings || showCreateProject) && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default Dashboard;

