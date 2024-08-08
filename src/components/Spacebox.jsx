import React from 'react'
import { useNavigate } from 'react-router-dom';

const Spacebox = ({ spaces }) => {

  const navigate = useNavigate();

    const onClick = (space) => {
      localStorage.setItem("spaceToken", space.spaceToken);
      // console.log(localStorage.getItem("spaceToken"))
      // console.log("Selected space token:", space.spaceToken);
      navigate("/spacepage")
    };

  return (
    <>
      {spaces && spaces.length > 0 ? ( spaces.map((space, index)=>{
        // console.log(space);
        return (
            <div key={index}  onClick={() => onClick(space)} style={{cursor: "pointer"}}>
                <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{space.spaceName}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{space.headerTitle}</h6>
                    <p className="card-subtitle mb-2 text-body-secondary">{space.customMessage}</p>
                </div>
                </div>
            </div>
        )
      })) : <h6>No spaces available</h6>}
    </>
  )
}

export default Spacebox
