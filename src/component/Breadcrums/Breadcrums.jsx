import React from "react"
import "./breadcrums.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"
 function Breadcrums(props) {
    const {product}=props
  return (
    <div className="breadcrum">
     <span>HOME</span><img src={arrow_icon}/><span>SHOP</span><img src={arrow_icon}/> <span>{product.category}</span><img src={arrow_icon}/><span>{product.name}</span> 
    </div>
  );
}
export default  Breadcrums
