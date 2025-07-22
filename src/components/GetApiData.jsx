import React, { useEffect, useState } from 'react';

function GetApiData() {
  const [userData, setUserData] = useState([]);
  const [edit, setEdit] = useState({
    userId: '',
    id: '',
    title: '',
    body: ''
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((resp) => {
        setUserData(resp);
      })
      .catch((err) => console.log('Error occurred during data fetching', err));
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
      });
      setUserData((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.log('Error occurred during data deletion', err);
    }
  };

  const handleEdit = (user) => {
    setEdit({
      userId: user.userId,
      id: user.id,
      title: user.title,
      body: user.body
    });
  };

  const handleChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const handleEditCancel = () => {
    setEdit({
      userId: '',
      id: '',
      title: '',
      body: ''
    });
  };

  const handleSaveEdit = () => {
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${edit.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: edit.title,
        body: edit.body
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData((prevData) =>
          prevData.map((item) =>
            item.id === edit.id ? { ...item, title: edit.title, body: edit.body } : item
          )
        );
        handleEditCancel();
      })
      .catch((err) => console.log('Error occurred during data update', err));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-primary">User Posts</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col" style={{ width: "20%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {edit.id === user.id ? (
                    <input
                      className="form-control"
                      name="title"
                      type="text"
                      value={edit.title}
                      onChange={handleChange}
                    />
                  ) : (
                    user.title
                  )}
                </td>
                <td>
                  {edit.id === user.id ? (
                    <input
                      className="form-control"
                      name="body"
                      type="text"
                      value={edit.body}
                      onChange={handleChange}
                    />
                  ) : (
                    user.body
                  )}
                </td>
                <td>
                  {edit.id === user.id ? (
                    <>
                      <button className="btn btn-success btn-sm me-2" onClick={handleSaveEdit}>
                        Save
                      </button>
                      <button className="btn btn-secondary btn-sm" onClick={handleEditCancel}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(user)}>
                        Update
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetApiData;
