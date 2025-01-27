import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://127.0.0.1:5000/') // Update this URL if deployed to a different domain
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the backend:', error);
        setMessage('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Volunteer Matching App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

export default App;
