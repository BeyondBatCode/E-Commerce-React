import "./Service.css"

function Services() {
  return (
    <section className="neo-services">
      <div className="container">
        <h2 className="services-title text-center">
          WHAT WE <span>SERVE</span>
        </h2>

        <div className="row g-4 mt-4">

          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <div className="service-icon">🛒</div>
              <h5>Smart Shopping</h5>
              <p>
                Discover products faster with curated collections and
                zero-distraction browsing.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h5>Fast Delivery</h5>
              <p>
                Optimized logistics ensure your orders reach you quicker
                than ever.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <div className="service-icon">🔒</div>
              <h5>Secure Payments</h5>
              <p>
                Industry-grade encryption and trusted gateways for safe
                checkout.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <div className="service-icon">📞</div>
              <h5>24/7 Support</h5>
              <p>
                Real humans. Real help. Anytime you need assistance
                post-purchase.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
