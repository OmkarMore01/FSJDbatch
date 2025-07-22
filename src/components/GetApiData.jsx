import React, { useEffect, useState } from 'react';

function GetApiData() {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({
    userId: '',
    id: '',
    title: '',
    body: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((resp) => setData(resp))
      .catch((err) => console.log('Error:', err));
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        alert('Deleted Successfully');
        setData((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((err) => alert('Deletion Failed:', err));
  };

  const handleEdit = (item) => {
    setEditData({ ...item });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setEditData({
      userId: '',
      id: '',
      title: '',
      body: ''
    });
  };

  const handleUpdate = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${editData.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        userId: editData.userId,
        title: editData.title,
        body: editData.body
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((res) => res.json())
      .then(() => {
        alert('Updated Successfully');
        setData((prev) =>
          prev.map((item) =>
            item.id === editData.id ? { ...item, ...editData } : item
          )
        );
        handleCancel();
      })
      .catch((err) => alert('Update Failed:', err));
  };

  return (
    <div className="container mt-4">
      <h3 className="text-primary mb-3">Post Details</h3>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th className='col' style={{width:"15%"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editData.id === item.id ? (
                  <input
                    name="title"
                    className="form-control"
                    value={editData.title}
                    onChange={handleChange}
                  />
                ) : (
                  item.title
                )}
              </td>
              <td>
                {editData.id === item.id ? (
                  <input
                    name="body"
                    className="form-control"
                    value={editData.body}
                    onChange={handleChange}
                  />
                ) : (
                  item.body
                )}
              </td>
              <td>
                {editData.id === item.id ? (
                  <>
                    <button className="btn btn-success btn-sm me-1" onClick={handleUpdate}>
                      Save
                    </button>
                    <button className="btn btn-secondary btn-sm ms-5" onClick={handleCancel}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-warning btn-sm me-1" onClick={() => handleEdit(item)}>
                      Update
                    </button>
                    <button className="btn btn-danger btn-sm ms-3" onClick={() => handleDelete(item.id)}>
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
  );
}

export default GetApiData;
