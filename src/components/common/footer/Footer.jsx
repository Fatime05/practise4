import React from 'react'
import style from "./Footer.module.css"
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <div className={style.container}>
        <p className={style.footer}>Copyright ©2024 All rights reserved <CiHeart /> This template is made with  by  Colorlib</p>
    </div>
  )
}

export default Footer