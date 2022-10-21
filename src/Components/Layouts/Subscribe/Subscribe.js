import React from "react"
import "./sub.css"
import SImage from "../../Assets/Images/mail.svg"
const Subscribe = () => {
  return (
    <div className="sRooter container">
      <div className="sHolder">
        <div className="simager">
          <img src={SImage} alt={`Subscribe Image`} className="sImg" />
        </div>
        <div className="stexter">
          <h1 className="sHeading">
            Subscribe to the <br /> Newsletter
          </h1>
          <input
            type="email"
            placeholder="ex - john@gmail.com"
            className="inputerr"
          />{" "}
          <br />
          <button className="btn primary-btn s-btn">Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
