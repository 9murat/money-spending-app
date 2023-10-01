import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearAllCart, decreaseItem, removeItem } from '../redux/slices/cartSlice';
import { BsTrash } from 'react-icons/bs'
export default function Cart() {
  const { carts, itemCount, totalPrice } = useSelector(state => state.cartSlice);

  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(clearAllCart());
  }

  return (
    <div className='cart-container'>
      {carts.length > 0 &&
        <div className=''>
          <div className="cart-item-header-wrapper first">
            <div>Cart Quantity</div>
            <div>({itemCount})</div>
          </div>
          <div className='cart-item-header-wrapper second'>
            <div>Total Price : </div>
            <div>
              {totalPrice.toFixed(2)}
              <span>TL</span>
            </div>
          </div>
        </div>
      }
      {carts?.map((cartItem, i) => (
        <div key={i} className='cart-item-content-wrapper'>
          <img className='cart-item-image' src={cartItem?.image} alt="" />
          <div className='cart-item-quantity-wrapper'>
            <div onClick={() => dispatch(decreaseItem(cartItem))}>-</div>
            <div>({cartItem?.quantity})</div>
            <div onClick={() => dispatch(addToCart(cartItem))}>+</div>
          </div>
          <BsTrash className='trash' onClick={()=>dispatch(removeItem(cartItem))} />

        </div>
      ))}
      {carts.length > 0 ?
        <div className='clear-cart-btn' onClick={() => clearCart()}>Clear All Cart</div> :
        <div className='cart-empty'>Cart is Empty</div>}

    </div>
  )
}
