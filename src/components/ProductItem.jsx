import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addToCart(product));
  }
  return (
    <div className='product-item-container'>
      <img className='product-item-image' src={product?.image} alt="" />
      <div className='product-item-title'>{product?.title}</div>
      <div  className='product-item-price'>{product?.price} <span>TL</span></div>
      <div className='add-cart-btn' onClick={() => add()}>Add To Cart</div>
    </div>
  )
}
