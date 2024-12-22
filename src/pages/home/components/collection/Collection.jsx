import React from 'react'
import style from './Collection.module.css'
const Collection = () => {
  return (
    <div className={style.container}>
        <div className={style.card}>
            <img src="https://preview.colorlib.com/theme/shoppers/images/women.jpg" alt="" />
            <div className={style.text}>
            <p>Collections</p>
            <h4>Women</h4>
            </div>
        </div>

        <div className={style.card}>
            <img src="https://preview.colorlib.com/theme/shoppers/images/children.jpg" alt="" />
            <div className={style.text}>
            <p>Collections</p>
            <h4>Children</h4>
            </div>
        </div>

        <div className={style.card}>
            <img src="https://preview.colorlib.com/theme/shoppers/images/men.jpg" alt="" />
            <div className={style.text}>
            <p>Collections</p>
            <h4>Men</h4>
            </div>
        </div>
    </div>
  )
}

export default Collection