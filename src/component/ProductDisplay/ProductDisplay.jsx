import "./productdisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from "../../context/ShopContext"
import { useContext } from "react"
import React from 'react';

 function ProductDisplay(props) {
    const {product} = props
    const {addToCart}=useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
            <img src={product.image}/>
        </div>
        <div className="productdisplay-img">
            <img src={product.image} className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} />
            <img src={star_icon}  />
            <img src={star_icon}  />
            <img src={star_icon} />
            <img src={star_dull_icon}/>
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-new">${product.new_price}</div>
        </div>
        <div className="product right-description">
        A lightweight,pullover T-shirt is the perfect addition to your wardrobe. Order now and experience the comfort and style for yourself!
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category:</span>Women,T-Shirt,Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags:</span>Modern,Latest</p>

      </div>
    </div>
  );
}
export default ProductDisplay
