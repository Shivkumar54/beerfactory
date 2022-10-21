import React from "react"
import { useEffect, useState } from "react"
import "./navbar.css"
import { Outlet, Link } from "react-router-dom"
import { RiMoonClearFill, RiSunFill, RiHeartPulseFill } from "react-icons/ri"
import { FaHome } from "react-icons/fa"
import { BsCollectionFill } from "react-icons/bs"
import { MdPeople, MdShoppingCart } from "react-icons/md"

const Navbar = () => {
  // Toggler
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.body.className = theme
  }, [theme])
  // Toggler

  return (
    <div className={`  navbar${theme}`}>
      <div className={`nav  ${theme} `}>
          <h3 className="logo">
            <Link className={` Navlinks ${theme} `} to="/">
              Beer factory
            </Link>
          </h3>
          <nav className="innerNav">
            <ul className={`nav-link ${theme} `}>
              <li>
                <Link className={`links ${theme} `} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={`links ${theme} `} to="/collections">
                  Collections
                </Link>
              </li>
              <li>
                <Link className={`links ${theme} `} to="/benefits">
                  Benefits
                </Link>
              </li>
              <li>
                <Link className={`links ${theme} `} to="/member">
                  Member
                </Link>
              </li>
              <li>
                <Link className={`links ${theme} `} to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
            <span className="changer" onClick={toggleTheme}>
              {theme === "dark" ? (
                <RiSunFill size={20} />
              ) : (
                <RiMoonClearFill size={20} />
              )}
            </span>
          </nav>
      </div>
      {/* ====== FOR Mobile DEVICES ======== */}
      <ul className={` nav-md-link ${theme} `}>
        <li>
          <Link className={`links ${theme}`} to="/">
            <FaHome size={20} />
            <h6 className="bNavheading">Home</h6>
          </Link>
        </li>
        <li>
          <Link className={`links ${theme} `} to="/collections">
            <BsCollectionFill size={20} />
            <h6 className="bNavheading">Collections</h6>
          </Link>
        </li>
        <li>
          <Link className={`links ${theme} `} to="/benefits">
            <RiHeartPulseFill size={20} />
            <h6 className="bNavheading">Benefits</h6>
          </Link>
        </li>
        <li>
          <Link className={`links ${theme} `} to="/member">
            <MdPeople size={20} />
            <h6 className="bNavheading">Member</h6>
          </Link>
        </li>
        <li>
          <Link className={`links ${theme} `} to="/cart">
            <MdShoppingCart size={20} />
            <h6 className="bNavheading">Cart</h6>
          </Link>
        </li>
      </ul>
      {/* ====== FOR Mobile DEVICES ======== */}

      <Outlet />
    </div>
  )
}

export default Navbar
