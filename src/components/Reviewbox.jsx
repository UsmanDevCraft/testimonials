import React from 'react'
import { useNavigate } from 'react-router-dom';

const Reviewbox = ({ reviews }) => {

    const deleteReview = async (id) => {
        const response = await fetch(`https://testimonial-backend.vercel.app/api/reviews/deletereview/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("token"),
                "space-token":localStorage.getItem("spaceToken"),
            },
        });
        const json = await response.json();
        if(json.error){
            alert(json.error);
        }
    };

    const navigate = useNavigate();

    const onClick = () => {
        navigate("/home")
    };

  return (
    <>
        {reviews && reviews.length > 0 ? ( reviews.map((review, index)=>{
            return (
                <div key={index}>
                    <div className="card cardResponsive" style={{width: "35rem"}}>
                        <div className="card-body reviewStyle">
                            <h6 className="card-subtitle mb-2">{review.review}</h6>
                            <span className='d-flex gap-5 flex-wrap'>
                                <span>
                                    <h6>Name</h6>
                                    <p className="card-subtitle mb-2">{review.name}</p> 
                                </span>
                                <span>
                                    <h6>Email</h6>
                                    <p className="card-subtitle mb-2">{review.email}</p>
                                </span>
                            </span>

                            <div className="d-flex gap-3">
                            {/* Delete Button */}
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{deleteReview(review._id)}}>
                            Delete
                            </button>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content modalStyle">
                                <div className="modal-header modalStyle">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Review Deleted Successfully.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClick}>OK</button>
                                </div>
                                </div>
                            </div>
                            </div>

                            {/* DROPDOWN MENU */}
                            <div className="dropdown">
                                <button className="btn dropdown-toggle spaceStyle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* Dropdown button */}
                                </button>
                                <ul className="dropdown-menu spaceStyle">
                                    <li><a className="dropdown-item spaceStyle" href="#">Action</a></li>
                                    <li><a className="dropdown-item spaceStyle" href="#">Another action</a></li>
                                    <li><a className="dropdown-item spaceStyle" href="#">Something else here</a></li>
                                </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )
        })) : <div className='container d-flex justify-content-center'><div className='noSpaceImage'><img src="https://testimonial.to/static/media/no-message.18de8749.svg" height="100px" width="100px" alt="SpaceImg" /><p>No Reviews yet, get a new one?</p></div></div>}
    </>
  )
}

export default Reviewbox
