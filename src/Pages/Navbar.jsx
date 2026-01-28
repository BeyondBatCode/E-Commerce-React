import "./Navbar.css"
import { useNavigate, useLocation } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  const isActive = (path) => location.pathname.startsWith(path)

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="neo-navbar">
      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/home")}>
        BRUTAL.UI
      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li
          className={isActive("/home") ? "active" : ""}
          onClick={() => navigate("/")}
        >
          Home
        </li>

        <li
          className={`dropdown ${isActive("/services") ? "active" : ""}`}
          ref={dropdownRef}
        >
          <div
            className="dropdown-trigger"
            onClick={() => setOpen(prev => !prev)}
          >
            Services
            <span className={`caret ${open ? "rotate" : ""}`}>▾</span>
          </div>

          {open && (
            <ul className="neo-dropdown">
              <li onClick={() => navigate("/service/design")}>Design</li>
              <li onClick={() => navigate("/service/development")}>Development</li>
              <li onClick={() => navigate("/service/marketing")}>Marketing</li>
            </ul>
          )}
        </li>

        <li
          className={isActive("/about") ? "active" : ""}
          onClick={() => navigate("/about")}
        >
          About
        </li>

        <li
          className={isActive("/contact") ? "active" : ""}
          onClick={() => navigate("/contact")}
        >
          Contact
        </li>
      </ul>

      {/* CTA */}
      <button
        className="nav-btn"
        onClick={() => navigate("/signup")}
      >
        SIGN UP
      </button>
    </nav>
  )
}

export default Navbar
