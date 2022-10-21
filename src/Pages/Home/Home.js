import React from "react"
import "./home.css"
import HeroImage from "../../Components/Assets/Images/beer.svg"
import AboutLayout from "../../Components/Layouts/AboutLayout/AboutLayout"
import Discount from "../../Components/Layouts/Discount/Discount"
import Testimonial from "../../Components/Layouts/testimonials/Testimonial"
import Subscribe from "../../Components/Layouts/Subscribe/Subscribe"
const Homepage = () => {
  return (
    <div className="defaultMarginer container-fluid  ">
      <div className="heroWraper container">
        <div className="WrapperImage">
          <img src={HeroImage} alt="" className="heroimg" />
        </div>
        <div className="WrapperText">
          <h1>Beer Factory A One-Stop Point For A Happy Weekend </h1>
          <div className="buttonWrapper">
            <button className="btn primary-btn">Order Online</button>
            <button className="btn secondary-btn ">Visit Store</button>
          </div>
        </div>
      </div>
      <AboutLayout />
      <Discount />
      <Testimonial />
      <Subscribe />
    </div>
  )
}

export default Homepage
