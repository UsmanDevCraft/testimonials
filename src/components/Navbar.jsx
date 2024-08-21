import React from 'react'
import { Link } from 'react-router-dom'
import { AiTwotoneLike } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand text-white fw-semibold d-flex align-items-center gap-2 me-5" to="/"><AiTwotoneLike />Testimonial</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link text-white fw-semibold me-3 active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white fw-semibold me-3" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-white fw-semibold me-3" to="/signup">Signup</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
