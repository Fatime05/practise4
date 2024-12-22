import React, { useEffect } from 'react'
import style from "./ProductSection.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../../../redux/reducers/ProductSlice'
import Card from '../../../../components/cards/Card'
const Productsec = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)

  console.log(products);
  
  useEffect(() => {
    dispatch(getProductsThunk())
  },[])
  return (
    <div className={style.container}>
      {products && products.map(item => <Card item={item}/>)}
    </div>
  )
}

export default Productsec;