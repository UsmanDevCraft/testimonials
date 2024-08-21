import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Spacebox from './Spacebox';
import { CgCamera } from "react-icons/cg";
import { FaRegSmile } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const Home = () => {

  const navigate = useNavigate();

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

  const fetchUser = async () => {
    try {
      const response = await fetch("https://testimonial-backend.vercel.app/api/auth/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem("token")
        },
      });
      const json = await response.json();
      // console.log(json);
      // console.log(json.user);
      if(!json.user){
        navigate("/login");
      };
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(()=>{
    fetchSpaces();
  }, []);
  useEffect(()=>{
    fetchUser();
  }, []);


  return (
    <>
    <div className='container pb-5'>
      <h1 className='mt-3'>Welcome to Your Dashboard!</h1>

      {/* ----------------- DIV FOR OVERVIEW ----------------- */}
      <h1 className='mt-5'>Overview</h1>

      <div className="container d-flex gap-4 justify-content-center mt-5 flex-wrap">
        <div className="card overviewStyle" style={{width: "18rem"}}>
          <div className="card-body d-flex align-items-center gap-4">
            <CgCamera className='fs-4'/>
            <span className='lh-1'>
            <h6>Videos</h6>
            <p className='fw-bold fs-5'>0</p>
            </span>
          </div>
        </div>


        <div className="card overviewStyle" style={{width: "18rem"}}>
          <div className="card-body d-flex align-items-center gap-4">
            <FaRegSmile className='fs-4'/>
            <span className='lh-1'>
            <h6>Video Credits</h6>
            <p className='fw-bold fs-5'>0</p>
            </span>
          </div>
        </div>

        
        <div className="card overviewStyle" style={{width: "18rem"}}>
          <div className="card-body d-flex align-items-center gap-4">
            <IoBagHandleSharp className='fs-4'/>
            <span className='lh-1'>
            <h6>Plan</h6>
            <p className='fw-bold fs-5'>Free plan</p>
            </span>
          </div>
        </div>
      </div>


      {/* ----------------- DIV FOR SPACES ----------------- */}
      <div>
        <h1 className='mt-5'>Spaces</h1>

        <div className="mt-5">
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

          <Link to="/newspace"><button className='btn tryButtonSimple d-flex gap-2 align-items-center'><FaPlus />Create a new space</button></Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
