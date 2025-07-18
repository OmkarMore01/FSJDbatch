import React, { useEffect, useState } from "react";

function Userform() {
  const [fname, setFname] = useState("Tekno");
  const [lname, setLname] = useState("well");
  const [email, setEmail] = useState("t@gmail.com");
  const [age, setAge] = useState(20);
  const [password, setPassword] = useState("t1234");
  
  const[satisfy,setSatisfy]=useState(true)

  useEffect(()=>
  {
    const isSatisy= fname.length>0 &&
    fname.length<=5  &&
    lname.length>0 &&
    lname.length<=8 &&
    email.includes("@gmail.com") &&
    age>=18 ;
    setSatisfy(isSatisy)
    

  },[fname,lname,email,age])
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    alert('form submitted')
  }
  return (
    <div>
    
      <form className="container mt-5" onSubmit={handleSubmit}>
        Enter FirstName:-{(fname.length<=0)?(<span className="text-bg-warning">* Username Cannot be empty</span>): (fname.length>5)?(<span className="text-bg-danger">* Username Cannot bigger than 5</span>):(<span className="text-bg-success">Valid Username</span>)}
       
        <input
        
          className="d-block m-2 border border-info-subtle"
          type="text"
          value={fname}
          onChange={(e) => {
            setFname(e.target.value);
           
          }}
        />

        Enter LastName:-{(lname.length<=0)?(<span className="text-bg-warning">* LastName Cannot be empty</span>): (lname.length>8)?(<span className="text-bg-danger">* LastName Cannot bigger than 8</span>):(<span className="text-bg-success">Valid LastName</span>)}
        <input
          className="d-block m-2 border border-info-subtle"
          type="text"
          value={lname}
          onChange={(e) => {
            setLname(e.target.value);
            
          }}
        />
        Enter Age:-{(age<18)?(<span className="text-bg-danger">Age should be greater than or equal to 18</span>):(<span className="text-bg-success">Age valid</span>)}
        <input
          className="d-block m-2 border border-info-subtle"
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        Enter Email:-{(email.includes("@gmail.com"))?(<span className="text-bg-success">Email is valid</span>):(<span className="text-bg-danger">Invalid email</span>)}
        <input
          className="d-block m-2 border border-info-subtle"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        Enter Password:-
        <input
          className="d-block m-2 border border-info-subtle"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input className="btn btn-success" type="submit" value="Submit" disabled={!satisfy} />
        
        
      </form>
    </div>
  );
}

export default Userform;
