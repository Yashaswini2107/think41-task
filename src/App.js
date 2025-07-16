import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetching fake user data from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ddd",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <h4>{user.name}</h4>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
