import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // To show any errors
  const [isLoading, setIsLoading] = useState(false);  // To show loading state
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");  // Reset any previous errors
    setIsLoading(true);  // Set loading state to true while awaiting response

    // Send a POST request to the Flask login route
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful, store the JWT token in localStorage
        localStorage.setItem("access_token", data.access_token);

        // Redirect the user to the dashboard
        navigate("/dashboard");
      } else {
        // If there's an error, display it
        setError(data.error || "An error occurred.");
      }
    } catch (error) {
      setError("An error occurred while trying to log in.");
    } finally {
      setIsLoading(false);  // Reset loading state
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>
        {error && <div className="alert alert-danger">{error}</div>} {/* Display error if any */}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup" className="text-primary">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
