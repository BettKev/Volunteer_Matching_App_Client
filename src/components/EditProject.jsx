import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiUrl from "../config";

const EditProject = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({
    title: "",
    description: "",
    status: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    fetch(`${apiUrl}/projects/${projectId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 403) {
          throw new Error("Unauthorized: Only organizations can update their projects.");
        }
        if (response.status === 404) {
          throw new Error("You can only update your organizations projects");
        }
        return response.json();
      })
      .then((data) => {
        setProject({
          title: data.title || "",
          description: data.description || "",
          status: data.status || "open",
        });
        setError(""); // Clear any previous error
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
        setError(error.message);
      });
  }, [projectId]);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    fetch(`${apiUrl}/projects/${projectId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Project updated successfully") {
          navigate("/dashboard");
        } else {
          setError("Error updating project: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error updating project:", error);
        setError("An error occurred while updating the project.");
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 rounded" style={{ width: "50%" }}>
        <h2 className="text-center mb-4">Edit Project</h2>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={project.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="4"
              value={project.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Status</label>
            <select
              className="form-select"
              name="status"
              value={project.status}
              onChange={handleChange}
              required
            >
              <option value="open">Open</option>
              <option value="approved">Approved</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary w-50 me-2">
              Save Changes
            </button>
            <button type="button" className="btn btn-secondary w-50" onClick={() => navigate("/dashboard")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
