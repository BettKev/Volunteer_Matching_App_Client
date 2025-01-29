import React, { useState } from "react";
import { useNavigate , Link} from "react-router-dom";

const Signup = () => {
  // Variable to hold base api endpoint
  const apiUrl = "http://localhost:5000"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "volunteer",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setFieldErrors({});
    setIsLoading(true);

    try {
      const response = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setFormData({ name: "", email: "", password: "", role: "volunteer" });

        // Redirect to the login page after a brief delay
        setTimeout(() => navigate("/login"), 2000);
      } else if (data.error && typeof data.error === "object") {
        setFieldErrors(data.error);
      } else {
        setError(data.error || "An error occurred.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h1 className="text-center mb-4">Sign Up</h1>
        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
            {fieldErrors.name && <small className="text-danger">{fieldErrors.name}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
            {fieldErrors.email && <small className="text-danger">{fieldErrors.email}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
            {fieldErrors.password && <small className="text-danger">{fieldErrors.password}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="volunteer">Volunteer</option>
              <option value="organization">Organization</option>
            </select>
            {fieldErrors.role && <small className="text-danger">{fieldErrors.role}</small>}
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <Link to="/login" className="text-primary">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
