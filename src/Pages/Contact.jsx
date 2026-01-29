import "./Contact.css"
import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Contact Message:", formData)
    // later: connect API / email service
  }

  return (
    <section className="contact-page">
      <div className="contact-box">
        <h1>CONTACT US</h1>
        <p>Have a question or a bold idea? Let’s talk.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
