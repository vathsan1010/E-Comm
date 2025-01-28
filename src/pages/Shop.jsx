import React from "react";
import Hero from "../component/Hero/Hero";
import NewCollection from "../component/NewCollection/NewCollection";
import Offers from "../component/Offers/Offers";
import Popular from "../component/Popular/Popular";
import NewsLetter from "../component/NewsLetter/NewsLetter";
function Shop(){
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    )
}
export default Shop;