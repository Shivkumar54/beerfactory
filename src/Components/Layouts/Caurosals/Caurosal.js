import React from "react"
import "./caurosal.css"
import Slider from "react-slick"
// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CaurosalData from "./CaurosalData"
const Caurosal = () => {
  const settings = {
    arrows: true,
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "70px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  }
  return (
    <div>
      <Slider {...settings}>
        {CaurosalData.map(({ id, img, review, title, stars }) => {
          return (
            <div className="cHolder" key={id}>
              <div className="innerHolder">
                <div className="cImager">
                  <img src={img} alt={title} width="100%" className="Cimg" />
                  <h6>Rating - {stars}</h6>
                </div>
                <div className="cTexter">
                  <h5 className="cname">{title}</h5>
                  <p className="Cpara">{review}</p>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Caurosal
