import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null); // State to store user details
  const [error, setError] = useState(null); // State to store errors, if any
  const apiUrl = "http://localhost:5000"; // Replace with your actual API endpoint

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("access_token"); // Retrieve token from localStorage

        if (!token) {
          throw new Error("No access token found. Please log in.");
        }

        const response = await fetch(`${apiUrl}/details`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch user details: ${response.statusText}`);
        }

        const data = await response.json();
        setUser(data); // Update state with the fetched user details
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUser();
  }, [apiUrl]);

  if (error) {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Your Profile</h2>
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Your Profile</h2>
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Profile</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center">
              <h5>User Information</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <strong>Name:</strong> {user.name}
              </div>
              <div className="mb-3">
                <strong>Email:</strong> {user.email}
              </div>
              <div className="mb-3">
                <strong>Role:</strong> {user.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
