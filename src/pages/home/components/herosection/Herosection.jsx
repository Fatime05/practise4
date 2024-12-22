import React from 'react'
import style from "./Herosection.module.css"
const Herosection = () => {
  return (
    <div className={style.container}>
        <div className={style.text}>
            <h1>Finding Your <br /> Perfect Shoes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Phasellus at iaculis quam. Integer accumsan <br /> tincidunt fringilla.</p>
            <button className={style.btn}>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Herosection