import React from "react";
import Navbar from "./component/navBar/Navbar";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import Shop  from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./component/footer/Footer";
import men_banner from "./component/Assets/banner_mens.png"
import women_banner from "./component/Assets/banner_women.png"
import kid_banner from "./component/Assets/banner_kids.png"
 function App() {
  return (
    <div>
        <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kid_banner}  category="kid"/>}/>
     <Route path="product" element={<Product/>} key="product-route">
     <Route path=":productId" element={<Product/>} key="product-id-route"/>
     </Route>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/login" element={<LoginSignup/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}
export default App;
