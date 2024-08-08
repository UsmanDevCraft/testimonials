import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Reviewbox from './Reviewbox';

const SpacePage = () => {

  const [ reviews, setReviews] = useState([]);

  const [ loader, setLoader] = useState(false)

    const fetchReviews = async () => {
      try {
        setLoader(true);

        // const spaceToken = localStorage.getItem("spaceToken");
        // console.log("Space Token for get review is:", localStorage.getItem("spaceToken")); // Debug log


        const response = await fetch("https://testimonial-backend.vercel.app/api/reviews/getreview", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
            "space-token": localStorage.getItem("spaceToken"),
        },
        });

        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }

        const json = await response.json();
        // console.log(spaceId);
        // console.log(json);

        if(json.error){
          alert(json.error)
        }

        setReviews(json);

        setLoader(false);

      } catch (error) {
        console.log(error)
      }
    };

    useEffect(()=>{
      fetchReviews()
    }, [])

  return (
    <div className='container'>
      <h6 className='mt-5'>To get your reviews from clients, forward this url to them.</h6>
      <Link to="/addreview">Give me Review</Link>

      {loader ?  (
        <div className="container mt-5 d-flex justify-content-center overflow-hidden">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className='d-flex justify-content-center flex-wrap gap-3 my-3'>
          <Reviewbox reviews={reviews} />
        </div>
      )}
    </div>
  )
}

export default SpacePage
