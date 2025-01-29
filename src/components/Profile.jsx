import React, { useEffect, useState } from "react";
import apiUrl from "../config";

const Profile = () => {
  const [user, setUser] = useState(null); // State to store user details
  const [error, setError] = useState(null); // State to store errors, if any

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
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card shadow-lg border-light">
            <div className="card-header bg-primary text-white text-center">
              <h5>User Information</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <strong className="text-muted">Name:</strong> <span>{user.name}</span>
              </div>
              <div className="mb-3">
                <strong className="text-muted">Email:</strong> <span>{user.email}</span>
              </div>
              <div className="mb-3">
                <strong className="text-muted">Role:</strong> <span>{user.role}</span>
              </div>
            </div>
            {/* <div className="card-footer text-center">
              <button className="btn btn-outline-primary">Edit Profile</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
