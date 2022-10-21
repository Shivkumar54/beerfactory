import React from "react"
import Caurosal from "../Caurosals/Caurosal"
import "./testimonial.css"
const Testimonial = () => {
  return (
    <div className="Testimonialas">
      <div className="testimonials container ">
        <div className="tTexter">
          <h1>Customer Feedback & testimonials</h1>
        </div>
        <div className="tCaurosals">
          <Caurosal />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
