import React from "react";
import "./premiere.css"
import play from"../assets/play.png"
import BBB from "../assets/bbb.avif"
import conjuring from "../assets/conju.jpg"
import splitsville from "../assets/ssv.avif"
import confidante from "../assets/confi.avif"
import downtown from "../assets/dwt.avif"
const Premiere = () =>{
    return(
        <>
        <div className="premiere">
            <div className=" d-flex flex-row justify-content-start m-auto " style={{border:"2px solid transparent",width:"80%"}}>
                <img src={play} alt="" height="100px" style={{border:"2px solid transparent"}}/>
                <div className="premiere-description d-flex flex-column justify-content-center" style={{border:"2px solid transparent"}}>
                    <h2 style={{fontWeight:"bolder", marginBottom:"-3px"}}>Premiere</h2>
                    <p style={{ marginBottom:"-2px"}}>Watch new movies at home, every Friday</p>
                </div>
            </div>    
            <div className="premiere-card-container m-auto" style={{width:"80%",border:"2px solid transparent"}}>
                <div style={{color:"rgb(240, 246, 246",border:"2px solid transparent"}}>
                    <h1 style={{marginBottom:"-2px"}}>Premieres</h1>
                    <p>Brand new releases every friday</p>
                </div>
            </div>
            <div className="premiere-cards m-auto" style={{border:"2px solid transparent",width:"80%"}}>
                <div className="pc" style={{height:"400px",width:"250px",color:"whitesmoke"}}>
                    <img src={BBB} alt="" height="280px" width="250px" style={{borderTopLeftRadius:"5px", borderTopRightRadius:"5px"}}/>
                    <div className="text-center">
                        <h3 style={{fontWeight:"bold", fontSize:"21px"}}>A Big Bold Beautiful Journey</h3>
                        <p>English</p>
                    </div>
                </div>
                <div className="pc" style={{height:"400px",width:"250px",color:"whitesmoke"}}>
                    <img src={conjuring} alt="" height="280px" width="250px" style={{borderTopLeftRadius:"5px", borderTopRightRadius:"5px"}}/>
                    <div className="text-center">
                        <h3 style={{fontWeight:"bold", fontSize:"21px"}}>The Conjuring : Last Rites</h3>
                        <p>English</p>
                    </div>
                </div>
                <div className="pc" style={{height:"400px",width:"250px",color:"whitesmoke"}}>
                    <img src={splitsville} alt="" height="280px" width="250px" style={{borderTopLeftRadius:"5px", borderTopRightRadius:"5px"}}/>
                    <div className="text-center">
                        <h3 style={{fontWeight:"bold", fontSize:"21px"}}>Splitsville</h3>
                        <p>English</p>
                    </div>
                </div>
                <div className="pc" style={{height:"400px",width:"250px",color:"whitesmoke"}}>
                    <img src={confidante} alt="" height="280px" width="250px" style={{borderTopLeftRadius:"5px", borderTopRightRadius:"5px"}}/>
                    <div className="text-center">
                        <h3 style={{fontWeight:"bold", fontSize:"21px"}}>Confidante</h3>
                        <p>English</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}
export default Premiere;