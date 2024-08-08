import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spacebox from './Spacebox';

const Home = () => {

  const [ loader, setLoader] = useState(false)

  const [ spaces, Setspaces] = useState([]);

  const fetchSpaces = async () => {
    try {
      setLoader(true);
      const response = await fetch("https://testimonial-backend.vercel.app/api/newspace/getspace", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem("token")
      },
      });
      const json = await response.json();
      if(json.error){
        alert(json.error)
      } else {
          Setspaces(json.space);
          // console.log({"json": json, "json space":json.space})
          // localStorage.setItem("spaceToken", json.spaceToken);
      }
      setLoader(false);
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(()=>{
    fetchSpaces();
  }, []);


  return (
    <>
    <div className='container'>
      <h1 className='mt-3'>Welcome to Your Dashboard!</h1>

      <div>
        <h1 className='mt-5'>Spaces</h1>

    {loader ? (
      <div className="container d-flex justify-content-center overflow-hidden mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      ) : (
        <div className='d-flex justify-content-center flex-wrap gap-3 my-3' >
          <Spacebox spaces={spaces} />
        </div>
    )}

        <Link to="/newspace"><button className='btn btn-primary'>Create a new space</button></Link>
      </div>
    </div>
    </>
  )
}

export default Home
