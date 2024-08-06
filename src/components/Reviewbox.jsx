import React from 'react'
import { useNavigate } from 'react-router-dom';

const Reviewbox = ({ reviews }) => {

    const deleteReview = async (id) => {
        const response = await fetch(`http://localhost:5000/api/reviews/deletereview/${id}`, {
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
        {reviews && reviews.map((review, index)=>{
            return (
                <div key={index}>
                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-body-secondary">{review.review}</h6>
                            <p className="card-subtitle mb-2 text-body-secondary">{review.name}</p>
                            <p className="card-subtitle mb-2 text-body-secondary">{review.email}</p>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{deleteReview(review._id)}}>
                            Delete
                            </button>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Review Deleted Successfylly.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClick}>OK</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default Reviewbox
