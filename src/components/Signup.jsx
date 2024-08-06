import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [ creds, setCreds] = useState({name: "", email: "", password: ""})
    const { name, email, password} = creds;
    const navigate = useNavigate();

    const fetchUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });
            const json = await response.json();
            if(json.error){
                alert("Account already exists, try another please.")
            } else {
                localStorage.setItem("token", json.authToken);
                navigate("/login")
                alert("Account Signed In Successfully, Login to move further.");
            }

        } catch (error) {
            console.log(error.message)
        }
    };

    const onChange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value})
    };

    const onClick = () => {
        navigate("/login")
    };


  return (
    <div className='container d-flex justify-content-center'>

    <div>
        <h1 className='mt-5'>Welcome to Signup Page.</h1>

        <form onSubmit={fetchUser}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <p className='mt-3' style={{cursor: "pointer"}} onClick={onClick}><code>Already have an account, click here to login.</code></p>
    </div>

    </div>
  )
}

export default Signup
