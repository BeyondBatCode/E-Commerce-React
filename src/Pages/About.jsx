import "./About.css"

function About() {
  return (
    <section className="neo-about">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-6">
            <div className="about-box">
              <h2 className="about-title">
                ABOUT <span>BRUTAL.UI</span>
              </h2>

              <p className="about-text">
                We’re not here to blend in. BRUTAL.UI is an e-commerce platform
                built for brands that demand clarity, speed, and impact.
                No dark patterns. No distractions. Just bold design that sells.
              </p>

              <p className="about-text">
                Our philosophy combines modern usability with Neo-Brutalist
                aesthetics — because strong brands shouldn’t look soft.
              </p>

              <button className="about-btn">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <div className="about-stats">
              <div className="stat-card">🚀<br />5+ Years Experience</div>
              <div className="stat-card">🌍<br />20+ Countries</div>
              <div className="stat-card">🛍️<br />50K+ Orders</div>
              <div className="stat-card">⭐<br />Trusted by Brands</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
