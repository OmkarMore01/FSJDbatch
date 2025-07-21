import React, { useState } from 'react';

function SaveApiData() {
  const [userData, setUserData] = useState({
    userId: 0,
    id: 0,
    title: '',
    body: ''
  });

  const handleChange=(e)=>
  {
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  const saveData=async()=>
  {
    try
    {
       const response=await
        fetch('https://jsonplaceholder.typicode.com/posts',userData,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    
                },
                
            }
        )
        const result= response.JSON()
        console.log("Data Saved Successsfulyyy",result)
    }
    catch(error)
    {   
        console.log("Error occured while saving the data..",error)
    }
  }

  const handleSubmit=(e)=>
  {
    e.preventDefault()
    saveData()
  }

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">Save API Data</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">User ID</label>
          <input type="text" className="form-control" name='userId'  value={userData.userId} onChange={handleChange}/>
        </div>
    <h1>Hii ia ma </h1>
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input type="text" className="form-control" name='id'  value={userData.id} onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" name='title' value={userData.title} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Body</label>
          <input type="text" className="form-control" name='body'  value={userData.body} onChange={handleChange}/>
        </div>

        <button type="submit" onClick={()=>console.log(userData)} className="btn btn-success">Save Data</button>
      </form>
    </div>
  );
}

export default SaveApiData;
