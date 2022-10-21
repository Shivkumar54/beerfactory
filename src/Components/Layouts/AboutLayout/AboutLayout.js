import React from "react"
import "./about.css"
const AboutLayout = () => {
  const lists = [
    {
      id: 1,
      imgs: "https://img.icons8.com/arcade/344/experimental-beer-arcade.png",
      title: "Amazing Taste",
    },
    {
      id: 2,
      imgs: "https://img.icons8.com/color/344/deliveryman.png",
      title: "Online & Offline Services",
    },
    {
      id: 1,
      imgs: "https://img.icons8.com/color/344/discount--v1.png",
      title: "Great Discounts",
    },
  ]

  return (
      <div className="abouts container">
          <h3 className="AHeading">Why Choose Us? </h3>
      <div className="row">
        {lists.map((eachItem) => {
          return (
            <div className="col-4 listers  " key={eachItem.id}>
              <img src={eachItem.imgs} alt={eachItem.title} className="aImg" />
              <h6 className="aTitle">{eachItem.title}</h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutLayout
