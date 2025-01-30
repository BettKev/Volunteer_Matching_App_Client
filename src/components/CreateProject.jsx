import React, { useState } from "react";
import apiUrl from "../config";

const ProjectForm = () => {
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
    <div>
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Project Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Project Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Project"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProjectForm;
