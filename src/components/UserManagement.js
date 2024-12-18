import React, { useState, useEffect } from 'react';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    // Fetch users from API
    async function fetchUsers() {
      const response = await fetch('http://localhost:5000/api/users');
      const result = await response.json();
      setUsers(result);
    }
    fetchUsers();
  }, []);

  const handleAddUser = async (event) => {
    event.preventDefault();
    // Post new user to API
    const response = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    const result = await response.json();
    setUsers([...users, result]);
  };

  return (
    <div>
      <h1>User Management</h1>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
