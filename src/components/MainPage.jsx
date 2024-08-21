import React from 'react'
import { AiTwotoneLike } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const MainPage = () => {
  return (
    <>
    <div className='container mt-5 pt-5'>
      <p className='text-center fs-1 mainPageHead fw-bold lh-1'>Get testimonials from your</p>
      <p className='text-center fs-1 mainPageHead fw-bold lh-1'>customers with ease</p>
      <p className='text-center lh-1 fs-5 mainPageText mt-5'>Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text</p> 
      <p className='text-center lh-1 fs-5 mainPageText'>and video testimonials from your customers with no need for a developer or website hosting.</p>
      <div className="d-flex justify-content-center">
        <Link to="/home"><button className='btn tryButton fw-semibold my-5'>Try FREE now</button></Link>
      </div>
    </div>

    <div className="container">
        <hr />
    </div>

    <div className="container mt-5 pt-5">
        <p className='text-center fs-1 mainPageHead fw-bold lh-1'>Add testimonials to your website</p>
        <p className='text-center fs-1 mainPageHead fw-bold lh-1'>with no coding!</p>
        <p className='text-center lh-1 fs-5 mainPageText mt-5'>Copy and paste our HTML code to add the Wall Of Love (👉 full version) to your website.</p>
        <Link className="my-5 btn text-white fw-semibold d-flex justify-content-center align-items-center gap-2 fs-3" to="/home"><AiTwotoneLike />Testimonial</Link>
    </div>

    <div className="container">
        <hr />
    </div>

    <div className="container mt-5 pt-5">
        <p className='text-center fs-1 mainPageHead fw-bold lh-1'>Collect and display testimonials all in</p>
        <p className='text-center fs-1 mainPageHead fw-bold lh-1'>one solution</p>
    </div>


        {/* ------------------ TESTIMONIAL #01 ------------------ */}
        <div className="container">
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4 order-md-1">
                    <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>Quick to setup</p>
                    <p className='fs-2 mainPageHead fw-bold lh-1'>A dedicated landing page</p>
                        <p className="card-text fs-5 mainPageText">Create a dedicated landing page for your business. Share the page link easily via email, social media, or even SMS. Setup can be done in two minutes.</p>
                        <Link to="/home"><button className='btn tryButtonSimple fw-semibold my-5'>Try it for free</button></Link>
                    </div>
                    <div className="card col-md-8 imgCard order-md-2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Flanding-page.png?alt=media&token=269a1a1c-4539-4d94-aa9e-ed0425eb1fce" className="card-img-top" alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* ------------------ TESTIMONIAL #02 ------------------ */}
        <div className="container">
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4 order-md-2">
                    <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>Easy to manage</p>
                    <p className='fs-2 mainPageHead fw-bold lh-1'>A dashboard to manage all testimonials</p>
                        <p className="card-text fs-5 mainPageText">You will have a simple & clean dashboard to manage all testimonials in one place. It's like your email inbox, but it's designed for your social proof!</p>
                        <Link to="/home"><button className='btn tryButtonSimple fw-semibold my-5'>Try it for free</button></Link>
                    </div>
                    <div className="card col-md-8 imgCard order-md-1">
                        <img src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2FEasy%20to%20manage%20(1).png?alt=media&token=5d3ae5f2-e35b-4e35-8070-acde541c18ec" className="card-img-top" alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* ------------------ TESTIMONIAL #03 ------------------ */}
        <div className="container">
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4 order-md-1">
                    <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>Track the metrics</p>
                    <p className='fs-2 mainPageHead fw-bold lh-1'>Understand how video testimonials are performing</p>
                        <p className="card-text fs-5 mainPageText">Track the metrics from all embedded videos, help your marketing team understand the performance at a glance, even promote the best-performing videos to different marketing channels.</p>
                        <p className="card-text fs-6 mainPageText">* Available in the Ultimate plan</p>
                        <Link to="/home"><button className='btn tryButtonSimple fw-semibold my-5'>Try it for free</button></Link>
                    </div>
                    <div className="card col-md-8 imgCard order-md-2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Fmetrics.png?alt=media&token=c5aa1272-4d36-4f9f-8ee6-df660985e7e1" className="card-img-top" alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* ------------------ TESTIMONIAL #04 ------------------ */}
        <div className="container">
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4 order-md-2">
                    <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>More social proof</p>
                    <p className='fs-2 mainPageHead fw-bold lh-1'>Not only text and video testimonials</p>
                        <p className="card-text fs-5 mainPageText">If you have testimonials on social media (e.g. Twitter, LinkedIn, TikTok etc), video hosting platforms (e.g. YouTube, Vimeo), and other review sites (e.g. G2, Google, Capterra, Yelp etc), bring them all to your account. Testimonial helps you manage all your social proof in a single place!</p>
                        <Link to="/home"><button className='btn tryButtonSimple fw-semibold my-5'>Try it for free</button></Link>
                    </div>
                    <div className="card col-md-8 imgCard order-md-1">
                        <img src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Fmore-social-proof.png?alt=media&token=83a1a3e9-449d-457d-80fb-0cfa55484700" className="card-img-top" alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* ------------------ TESTIMONIAL #05 ------------------ */}
        <div className="container">
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4 order-md-1">
                    <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>Embed the Wall of Love</p>
                    <p className='fs-2 mainPageHead fw-bold lh-1'>The best testimonials all in one place</p>
                        <p className="card-text fs-5 mainPageText">Treat the Wall of Love as the place to showcase all your favorite testimonials. You can embed it to your website in under a minute. No coding knowledge required!</p>
                        <Link to="/home"><button className='btn tryButtonSimple fw-semibold my-5'>Try it for free</button></Link>
                    </div>
                    <div className="card col-md-8 imgCard order-md-2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Fwall-of-love.png?alt=media&token=74e955e5-a21b-4cc6-ab05-d497b7fb313a" className="card-img-top" alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* ------------------ TESTIMONIAL #06 ------------------ */}
        <div className="container">
            <div data-aos="fade-right" className="card my-5 bg_card_color">
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                    <div className="card-body col-md-4 order-md-2">
                    <p className='fs-4 mainPageHeadBlue fw-bold lh-1'>Embed a single video testimonial</p>
                    <p className='fs-2 mainPageHead fw-bold lh-1'>Ad-free hosting for each video</p>
                        <p className="card-text fs-5 mainPageText">For the video testimonial, you can embed it directly on your own website like this 👈. You don't need to use any 3rd-party Ad-free hosting service, e.g. Wistia, Vimeo.</p>
                        <Link to="/home"><button className='btn tryButtonSimple fw-semibold my-5'>Try it for free</button></Link>
                    </div>
                    <div className="card col-md-8 imgCard order-md-1">
                        <img src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Fmetrics.png?alt=media&token=c5aa1272-4d36-4f9f-8ee6-df660985e7e1" className="card-img-top" alt="" />
                    </div>
                </div>
            </div>
        </div>



        <div className="container mt-5 pt-5">
            <p className='text-center fs-1 mainPageHead fw-bold lh-1'>Integrate with any platform</p>
            <p className='text-center lh-1 fs-5 mainPageText mt-5'>We built the ultimate tool for showcasing your satisfied customers. With 3-lines of HTML code,</p>
            <p className='text-center lh-1 fs-5 mainPageText'>you can embed all your testimonials to any platform!</p>
        </div>


        <div className="container mt-5 pt-5">
            <p className='text-center fs-1 mainPageHead fw-bold lh-1'>Ready to collect testimonials?</p>
            <p className='text-center lh-1 fs-5 mainPageText mt-5'>We are loved by Fortune 500 companies, early-stage startups, marketing</p>
            <p className='text-center lh-1 fs-5 mainPageText'>agencies, real estate agents, freelancers, and many more. Your customers'</p> 
            <p className='text-center lh-1 fs-5 mainPageText'>testimonials are the best social proof you can get! Get started now 👇</p>
            <div className="d-flex gap-5 justify-content-center">
                <p className='d-flex align-items-center gap-3 fs-6 mainPageHead fw-bold lh-1'><IoCheckmarkDoneCircle className='fs-4' />No coding skill required.</p>
                <p className='d-flex align-items-center gap-3 fs-6 mainPageHead fw-bold lh-1'><IoCheckmarkDoneCircle className='fs-4' />Start in under 2 minutes.</p>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/home"><button className='btn tryButton fw-semibold my-5'>Get started with FREE credits</button></Link>
            </div>
        </div>
    </>
  )
}

export default MainPage
