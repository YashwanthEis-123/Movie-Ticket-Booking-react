import React from "react";
import "./Recommended.css"
import Kramp from "../assets/Kramp.jpg"
import Kantara from "../assets/Kantara.avif";
import Dude from "../assets/dude.jpg"
import Bison from "../../src/assets/bison.avif"
function RecommenedMovies(){
    return(
        <>
        <div className="rmbg">
        <div className="Recommendedmovies m-auto">
            <h1 className="mt-5" style={{fontSize:"30px", fontWeight:"bold"}}>Recommended Movies</h1>
            <div className="allRecommendedMovies mt-4">
                <div className="rc">
                    <img src={Kramp} alt="" height="300px" width="250px" style={{borderRadius:"10px"}}/>
                    <div className="text-center" style={{border:"2px solid transparent"}}>
                        <h4>Kramp</h4>
                        <p>Action & Romantic</p>
                    </div> 
                </div>
                <div className="rc">
                    <img src={Kantara} alt="" height="300px" width="250px" style={{borderRadius:"10px"}}/>
                    <div className="text-center">
                        <h4>Kantara</h4>
                        <p>Adventure, Drama & Thriller</p>
                    </div> 
                </div>
                <div className="rc">
                    <img src={Dude} alt="" height="300px" width="250px" style={{borderRadius:"10px"}}/>
                    <div className="text-center">
                        <h4>Dude</h4>
                        <p>Action, Comedy & Romantic</p>
                    </div> 
                </div>
                <div className="rc">
                    <img src={Bison} alt="" height="300px" width="250px" style={{borderRadius:"10px",}}/>
                    <div className="text-center">
                        <h4>Bison Kalaamaadan</h4>
                        <p>Action, Crime & Drama</p>
                    </div> 
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default RecommenedMovies;