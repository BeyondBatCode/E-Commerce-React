import "./Signup.css"
import { useState } from "react"

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Signup Data:", formData)
    // later: API call here
  }

  return (
    <section className="signup-page">
      <div className="signup-box">
        <h1>CREATE ACCOUNT</h1>
        <p>Join BRUTAL.UI and start selling bold.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">SIGN UP</button>
        </form>

        <span className="signup-footer">
          Already have an account? <b>Login</b>
        </span>
      </div>
    </section>
  )
}

export default Signup
