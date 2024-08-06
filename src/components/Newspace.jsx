import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Newspace = () => {

    const [data, setData] = useState({ spaceName: "", headerTitle: "", customMessage: ""});
    const { spaceName, headerTitle, customMessage} = data;
    const navigate = useNavigate();

    const fetchNewspace = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://testimonial-backend.vercel.app/api/newspace/createspace", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":localStorage.getItem("token")
                },
                body: JSON.stringify({
                    spaceName,
                    headerTitle, 
                    customMessage
                })
            });
            const json = await response.json();
            // console.log(json);
            if(json.error){
                alert("Space token not found, please try another way.")
            } else {
                localStorage.setItem("spaceToken", json.spaceToken);
            }

        } catch (error) {
            console.log(error.message)
        }
    };

    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    };

    const onClick = () => {
        navigate("/home")
    }


  return (
    <div className='container'>

        <h3 className='text-center'>Create a new Space</h3>

        <form onSubmit={fetchNewspace}>
            <div className="mb-3">
                <label htmlFor="spaceName" className="form-label">Space name<code>*</code></label>
                <input type="text" className="form-control" id="spaceName" name='spaceName' aria-describedby="emailHelp" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="headerTitle" className="form-label">Header title<code>*</code></label>
                <input type="text" className="form-control" id="headerTitle" name='headerTitle' aria-describedby="emailHelp" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="customMessage" className="form-label">your custom message<code>*</code></label>
                <input type="text" className="form-control" id="customMessage" name='customMessage' aria-describedby="emailHelp" onChange={onChange} />
            </div>


            {/* ---------------- Code for modal ---------------- */}
            <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Submit
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Your Space is saved Successfully.
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClick}>OK</button>
                </div>
                </div>
            </div>
            </div>


        </form>
    </div>
  )
}

export default Newspace
