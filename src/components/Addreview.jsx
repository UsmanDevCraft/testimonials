import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Addreview = () => {

    const [ data, setData] = useState({ review: "", name: "", email: ""});
    const { review, name, email } = data;
    const navigate = useNavigate();

    const fetchReview = async () => {

        try {

            const spaceToken = localStorage.getItem("spaceToken");
            // console.log("Space Token:", spaceToken); // Debug log


            const response = await fetch("https://testimonial-backend.vercel.app/api/reviews/createreview", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                    "space-token": spaceToken,
                },
                body: JSON.stringify({
                    review,
                    name,
                    email
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            if(json.error){
                alert(json.error)
            } else {
                alert("Review Sent Successfully.")
                navigate("/home");
            }

        } catch (error) {
            console.log(error.message)
        }
    };

    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    };

  return (
    <div className='container'>
        <h1 className='mt-5'>Please write your review here.</h1>
        <form onSubmit={fetchReview}>
            <div className="mb-3">
                <label htmlFor="review" className="form-label">Review<code>*</code></label>
                <input type="text" className="form-control" id="review" name='review' onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name<code>*</code></label>
                <input type="text" className="form-control" id="name" name='name' onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email<code>*</code></label>
                <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Addreview
