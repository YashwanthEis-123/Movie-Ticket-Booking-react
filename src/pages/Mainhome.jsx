import React from "react";
import Banner from "../components/banner";
import RecommenedMovies from "../components/Recommended";
import PromotionCard from "../components/promotioncard";
import Upcoming from "../components/Upcoming";
import Premiere from "../components/premiere";
import TrendingSearch from "../components/TrendingSearch";
function Mainhome(){
    return(
        <>
      
        <Banner/>
        <RecommenedMovies/>
        <PromotionCard/>
        <Upcoming/>
        <Premiere/>
        <TrendingSearch/>
       
        </>
    )
}
export default Mainhome;