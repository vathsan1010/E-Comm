import React, { useContext } from 'react';
import "./cartitem.css"
import { ShopContext } from '../../context/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png"
 function CartItem() {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartitems' >
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div>
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image} className="carticon-product-icon" alt="banner" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
       <h1 className='header-title'>cart Totals</h1>
      <div className="container">
        <div className="cartitems-down">
        <div>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
          <p>Shipping Fee</p>
          <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
          <h3>Total</h3>
          <h3>${getTotalCartAmount()}</h3>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
    {/*nn*/}</div>
    <div className="cartitems-promocode">
    <p>If you have a promo code , Enter it here</p>
    <div className="cartitems-promobox">
                    <input type="text" placeholder='Enter The Promo Code' />
                    <button>Submit</button>
                </div>
    </div>
     
      </div>
    </div>
  );
}
export default CartItem
