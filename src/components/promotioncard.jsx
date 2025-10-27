import React from "react";
import "./promotioncard.css"
import bmss from "../assets/bookmys.jpg";
function PromotionCard(){
    return(
        <>
        <div className="probg">
        <div className="promocard m-auto" >
           <div className="promocarddetails m-auto" style={{border:"2px solid transparent", height:"150px", width:"95%"}}>
             <img src={bmss} alt="" />
             <h1 className="" style={{fontFamily:"cursive", fontSize: "45px", fontWeight:"normal"}}>
                Endless Entertainment<br/>  Anytime.Anywhere!</h1>
           </div>
        </div>
        </div>
        </> 
   )
}
export default PromotionCard;