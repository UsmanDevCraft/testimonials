import { AiTwotoneLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const MainPage = () => {
  return (
    <>
      <div className="main-page">
        {/* Hero Section */}
        <section className="hero-section text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h1 className="display-3 fw-bold mb-4 gradient-text">
                  Get testimonials from your <br />
                  <span className="gradient-accent-text">
                    customers with ease
                  </span>
                </h1>
                <p
                  className="lead fs-4 text-secondary mb-5 mx-auto"
                  style={{ maxWidth: "800px" }}
                >
                  Collecting testimonials is hard, we get it! In minutes, you
                  can collect text and video testimonials from your customers
                  with no need for a developer or website hosting.
                </p>
                <div className="d-flex gap-3 justify-content-center">
                  <Link
                    to="/home"
                    className="btn btn-primary-gradient btn-lg px-5 py-3"
                  >
                    Try FREE now
                  </Link>
                  <button className="btn btn-outline-light btn-lg px-5 py-3 border-secondary">
                    View Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="py-5 border-top border-bottom border-secondary border-opacity-10 mb-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4">
                <h3 className="fw-bold mb-1">10k+</h3>
                <p className="text-secondary small">Happy Customers</p>
              </div>
              <div className="col-md-4">
                <h3 className="fw-bold mb-1">500k+</h3>
                <p className="text-secondary small">Testimonials Collected</p>
              </div>
              <div className="col-md-4">
                <h3 className="fw-bold mb-1">99.9%</h3>
                <p className="text-secondary small">Uptime Guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="pb-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3 gradient-text">
                Collect and display testimonials all in one solution
              </h2>
              <p className="text-secondary fs-5">
                Everything you need to build trust with your audience
              </p>
            </div>

            <div className="features-grid">
              {/* Feature 1 */}
              <div className="card-premium feature-card">
                <div className="feature-icon">
                  <IoCheckmarkDoneCircle />
                </div>
                <h4 className="fw-bold mb-3">Quick to setup</h4>
                <p className="text-secondary mb-4">
                  Create a dedicated landing page for your business. Share the
                  page link easily via email, social media, or even SMS.
                </p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Flanding-page.png?alt=media&token=269a1a1c-4539-4d94-aa9e-ed0425eb1fce"
                  className="img-fluid rounded-3 border border-secondary border-opacity-10 mt-auto"
                  alt="Landing Page"
                />
              </div>

              {/* Feature 2 */}
              <div className="card-premium feature-card">
                <div className="feature-icon">
                  <AiTwotoneLike />
                </div>
                <h4 className="fw-bold mb-3">Easy to manage</h4>
                <p className="text-secondary mb-4">
                  A simple & clean dashboard to manage all testimonials in one
                  place. It&apos;s like your email inbox, but for social proof!
                </p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2FEasy%20to%20manage%20(1).png?alt=media&token=5d3ae5f2-e35b-4e35-8070-acde541c18ec"
                  className="img-fluid rounded-3 border border-secondary border-opacity-10 mt-auto"
                  alt="Management Dashboard"
                />
              </div>

              {/* Feature 3 */}
              <div className="card-premium feature-card">
                <div className="feature-icon">
                  <IoCheckmarkDoneCircle />
                </div>
                <h4 className="fw-bold mb-3">Track metrics</h4>
                <p className="text-secondary mb-4">
                  Track the metrics from all embedded videos, help your
                  marketing team understand performance at a glance.
                </p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Fmetrics.png?alt=media&token=c5aa1272-4d36-4f9f-8ee6-df660985e7e1"
                  className="img-fluid rounded-3 border border-secondary border-opacity-10 mt-auto"
                  alt="Metrics Tracking"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wall of Love Teaser */}
        <section className="py-5 bg-card bg-opacity-50">
          <div className="container text-center py-5">
            <AiTwotoneLike className="display-1 text-primary mb-4 opacity-50" />
            <h2 className="display-4 fw-bold mb-4">Embed the Wall of Love</h2>
            <p className="lead text-secondary mb-5">
              Showcase your best testimonials in a stunning grid on your website
              with no coding.
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card-premium p-4 border-primary border-opacity-25">
                  <p className="fs-5 mb-0 italic">
                    &quot;Wall of Love is the best thing that happened to our
                    marketing page. Conversion increased by 40%!&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-5 my-5">
          <div className="container text-center">
            <div className="card-premium p-5 py-5 gradient-bg-alt">
              <h2 className="display-5 fw-bold mb-4">
                Ready to collect testimonials?
              </h2>
              <p
                className="text-secondary fs-5 mb-5 mx-auto"
                style={{ maxWidth: "600px" }}
              >
                Join thousands of companies using Testimonial to build social
                proof and grow their business.
              </p>
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
                <Link
                  to="/home"
                  className="btn btn-primary-gradient btn-lg px-5"
                >
                  Get started for free
                </Link>
                <span className="text-secondary">No credit card required.</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPage;
