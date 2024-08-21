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
                <div className="card spaceStyle" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{space.spaceName}</h5>
                    <h6 className="card-subtitle mb-2">{space.headerTitle}</h6>
                    <p className="card-subtitle mb-2">{space.customMessage}</p>
                </div>
                </div>
            </div>
        )
      })) : <div className='noSpaceImage'><img src="https://testimonial.to/static/media/no-message.18de8749.svg" height="100px" width="100px" alt="SpaceImg" /><p>No space yet, add a new one?</p></div>}
    </>
  )
}

export default Spacebox
