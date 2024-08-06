import React from 'react'
import { useNavigate } from 'react-router-dom';

const Spacebox = ({ spaces }) => {

  const navigate = useNavigate();

    const onClick = () => {
      navigate("/spacepage")
    };

  return (
    <>
      {spaces && spaces.map((space, index)=>{
        return (
            <div key={index}  onClick={onClick} style={{cursor: "pointer"}}>
                <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{space.spaceName}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{space.headerTitle}</h6>
                    <p className="card-subtitle mb-2 text-body-secondary">{space.customMessage}</p>
                </div>
                </div>
            </div>
        )
      })}
    </>
  )
}

export default Spacebox
