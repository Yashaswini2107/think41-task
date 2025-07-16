import React, { useEffect, useState } from "react";
fetch("http://localhost:5000/users")

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetching fake user data from API
    fetch("https://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>User List</h2>
      <form
  onSubmit={(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    })
      .then((res) => res.json())
      .then((newUser) => setUsers((prev) => [...prev, newUser]));

    e.target.reset(); // clear form
  }}
  style={{ marginBottom: "20px" }}
>
  <input type="text" name="name" placeholder="Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <button type="submit">Add User</button>
</form>

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
           {/*<p>City: {user.address.city}</p>*/}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
