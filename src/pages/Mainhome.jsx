import React from "react";
import Banner from "../components/banner";
import RecommenedMovies from "../components/Recommended";
import PromotionCard from "../components/promotioncard";
import Upcoming from "../components/Upcoming";
import Premiere from "../components/premiere";
function Mainhome(){
    return(
        <>
      
        <Banner/>
        <RecommenedMovies/>
        <PromotionCard/>
        <Upcoming/>
        <Premiere/>
        </>
    )
}
export default Mainhome;