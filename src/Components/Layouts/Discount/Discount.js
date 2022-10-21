import React from "react"
import "./discount.css"
const Discount = () => {
  return (
    <div className="DRootHolder">
      <div className="discountHolder">
        <div className="dtext">
          <h3 className=" hthree dTitle">Flat 15% off on your First Order</h3>
          <h3 className="hthree redeem">
            Redeem Code - <span className="code">NEW15</span>
          </h3>
        </div>
        <div className="dbtn">
          <button className="  buynow ">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Discount
