import React, { useEffect, useState } from 'react';

function GetApiData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((resp) => {
        setUserData(resp);
      })
      .catch((err) =>
        console.log('Error occurred during data fetching', err)
      );
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
              <th scope="col" style={{ width: "15%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.slice(0, 20).map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2">Update</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
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
