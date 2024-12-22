import React from 'react';
import style from './Card.module.css';
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from 'react-icons/fa6';

const Card = ({ item }) => {
  return (
    <div className={style.container}>
      <div>
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <p className={style.title}>{item.title}</p>
      <p className={style.price}>{item.price}</p>
      <button><CiHeart /></button>
      <button><FaCartShopping /></button>
    </div>
  );
};

export default Card;
