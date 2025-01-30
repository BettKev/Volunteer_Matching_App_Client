import React, { useState } from "react";

const CreateProjectModal = ({ show, handleClose, refreshProjects }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError("Title and description are required");
      return;
    }

    try {
      // Make the POST request to the backend to create a new project
      const token = localStorage.getItem("jwtToken"); // Assuming JWT is stored in localStorage
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      // Handle success
      setSuccessMessage("Project created successfully");
      setError("");
      setTitle("");
      setDescription("");
      handleClose(); // Close the modal after successful creation
      refreshProjects(); // Refresh the list of projects on the dashboard
    } catch (error) {
      // Handle error
      setError(error.message || "An error occurred while creating the project");
      setSuccessMessage("");
    }
  };

  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      tabIndex="-1"
      style={{ display: show ? "block" : "none" }}
      aria-hidden={!show}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create New Project</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}
              {successMessage && <div className="alert alert-success">{successMessage}</div>}

              <div className="form-group">
                <label htmlFor="formTitle">Project Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="formTitle"
                  placeholder="Enter project title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="formDescription">Project Description</label>
                <textarea
                  className="form-control"
                  id="formDescription"
                  rows="3"
                  placeholder="Enter project description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Create Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
