import React from "react"
function Home() {
    return (
            <section className="neo-hero">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-7">
            <div className="hero-box">
              <h1 className="hero-title">
                BUY BOLD. <br />
                SELL <span className="hero-highlight">LOUD.</span>
              </h1>

              <p className="hero-text">
                A modern e-commerce platform for brands that refuse to be
                invisible. Strong design. Faster sales.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <button className="btn hero-btn-primary">
                  SHOP NOW
                </button>
                <button className="btn hero-btn-secondary">
                  EXPLORE DEALS
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="col-lg-5">
            <div className="row g-3">
              <div className="col-6">
                <div className="hero-stat">⚡ 10K+ PRODUCTS</div>
              </div>
              <div className="col-6">
                <div className="hero-stat">🚚 FAST DELIVERY</div>
              </div>
              <div className="col-6">
                <div className="hero-stat">🔒 SAFE PAYMENTS</div>
              </div>
              <div className="col-6">
                <div className="hero-stat">⭐ 4.9/5 REVIEWS</div>
              </div>
            </div>
          </div>

        </div>
        </div>
    </section>

    )
}

export default Home