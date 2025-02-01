import React, { useState } from "react";
import apiUrl from "../config";

const ProjectForm = ({onProjectCreated}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Assuming you have the JWT token stored in localStorage or elsewhere
  const token = localStorage.getItem("access_token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Reset any previous messages

    const projectData = { title, description };

    try {
      const response = await fetch(`${apiUrl}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include JWT token in header
        },
        body: JSON.stringify(projectData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Project created successfully! Project ID: ${data.project_id}`);
        // Call the callback function to refresh the project list
        onProjectCreated();
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage("There was an error while creating the project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Project Title:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Project Description:</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Creating..." : "Create Project"}
        </button>
      </form>
      {message && (
        <div className={`alert ${message.includes("success") ? "alert-success" : "alert-danger"} mt-3`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default ProjectForm;
