import React from "react";
import style from "./Header.module.css";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.search}>
          <CiSearch className={style.iconsearch} />
          <input className={style.input} type="text" placeholder="Search" />
        </div>

        <div className={style.logo}>
          <button className={style.btn}>SHOPPERS</button>
        </div>

        <div className={style.icon}>
          <CiUser />
          <Link to="/Wishlist">
            <CiHeart />
          </Link>
          <Link to="/Basket">
            <FaCartShopping />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
