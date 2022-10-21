import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
const Collections = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const getListsFromAPI = async () => {
      const getLists = await axios.get(` https://api.punkapi.com/v2/beers`)
      setList(getLists.data)
    }
    getListsFromAPI()
  }, [])

  return (
    <div className="defaultMarginer">
      {list.map((item) => {
        return (
          <div className="listers">
            <img src={item.image_url} alt="" width="110px" height="250px" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Collections
