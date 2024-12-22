import React from 'react'
import style from "./Support.module.css"
import { MdLocalShipping } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa";


const Support = () => {
  return (
    <div className={style.container}>
        <div className={style.item}>
        <div className={style.itembox}>
            <MdLocalShipping className={style.icon}/>
            <div className={style.text}>
                <h5>Free Shipping</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Phasellus at iaculis quam. <br /> Integer accumsan tincidunt fringilla.</p>
            </div>
        </div>

        <div className={style.itembox}>
            <GrUpdate className={style.icon} />
            <div className={style.text}>
                <h5>Free Returns</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Phasellus at iaculis quam. <br /> Integer accumsan tincidunt fringilla.</p>
            </div>
        </div>

        <div className={style.itembox}>
        <FaQuestion className={style.icon} />
            <div className={style.text}>
                <h5>Customer Support</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Phasellus at iaculis quam. <br /> Integer accumsan tincidunt fringilla.</p>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Support