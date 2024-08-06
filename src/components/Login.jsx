import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [ creds, setCreds] = useState({name: "", email: "", password: ""});
    const { name, email, password} = creds;
    const navigate = useNavigate();

    const fetchLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/loginuser", {
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
                alert(json.error)
            } else {
                localStorage.setItem("token", json.authToken)
                navigate("/home")
                alert("Login was Successfull, HAPPY HACKING!")
            }

        } catch (error) {
            console.log(error.message)
        }
    };

    const onChange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value});
    };

    const onClick = () => {
        navigate("/signup")
    };

  return (
    <div className='container d-flex justify-content-center'>

        <div>
            <h1 className='mt-5'>Welcome to Login Page.</h1>
        
            <form onSubmit={fetchLogin}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <p className='mt-3' style={{cursor: "pointer"}} onClick={onClick}><code>Don't have an account, click here to signup.</code></p>
        </div>

    </div>
  )
}

export default Login
