import React, { useEffect, useState } from 'react';

function UserCrud() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ id: '', name: '', email: '' });
  const [editing, setEditing] = useState(false);
  const [upd, setUpd] = useState({ id: '', name: '', email: '' });

  useEffect(() => {
    const dataStored = JSON.parse(localStorage.getItem('users'));
    if (dataStored) {
      setUsers(dataStored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdChange = (e) => {
    setUpd({ ...upd, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (form.name !== '' && form.email !== '') {
      setUsers([...users, form]);
      setForm({ id: '', name: '', email: '' });
    }
  };

  const handleUpdate = (user) => {
    setEditing(true);
    setUpd(user);
  };

  const handleSaveUpdate = () => {
    setUsers(users.map(u => (u.id === upd.id ? upd : u)));
    setEditing(false);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">User CRUD Operations</h2>

      <form className="mb-3" onSubmit={(e) => e.preventDefault()}>
        <div className="row g-2">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter ID"
              value={form.id}
              name="id"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={form.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={form.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-primary w-100"
              onClick={handleAdd}
              disabled={!form.name || !form.email || !form.id}
            >
              Add User
            </button>
          </div>
        </div>
      </form>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th style={{ width: '180px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {editing && upd.id === user.id ? (
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    value={upd.id}
                    onChange={handleUpdChange}
                  />
                ) : (
                  user.id
                )}
              </td>
              <td>
                {editing && upd.id === user.id ? (
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={upd.name}
                    onChange={handleUpdChange}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editing && upd.id === user.id ? (
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={upd.email}
                    onChange={handleUpdChange}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editing && upd.id === user.id ? (
                  <>
                    <button className="btn btn-success btn-sm me-2" onClick={handleSaveUpdate}>
                      Save
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setEditing(false)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleUpdate(user)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center">
                No users available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserCrud;
