import React from "react";
import "./Upcoming.css";
import telsu from "../assets/telsukada.avif"
import OG from "../assets/OG.avif"
import Bahubali from "../assets/bahubali.jpg"
import pournami from "../assets/pournami.avif"
import dharmavaram from "../assets/dharma.jpg"
import sstk from "../assets/sstk.avif"
import Bepic from "../assets/bepic.avif"
import F1 from "../../src/assets/f1.avif"

function Upcoming(){
    return(
        <>
        <div className="upbg">
          <div className="Upcomingmovies m-auto pb-5">
                      <h1 className="mt-5" style={{fontSize:"30px", fontWeight:"bold"}}>Upcoming Movies</h1>
                      <div className="allUpcommingMovies mt-4">
                          <div className="uc" style={{height:"350px"}}>
                              <img src={telsu} alt="" height="250px" width="248px" style={{borderRadius:"10px"}}/>
                              <div className="text-center">
                                  <h4>Telsukada</h4>
                                  <p>UA16+ Action & Romantic</p>
                              </div> 
                          </div>
                          <div className="uc" style={{height:"350px"}}>
                              <img src={OG} alt="" height="250px" width="248px" style={{borderRadius:"10px"}}/>
                              <div className="text-center">
                                  <h4>OG (Ojas Ghambira)</h4>
                                  <p>Action, Drama & Thriller</p>
                              </div> 
                          </div>
                          <div className="uc" style={{height:"350px"}}>
                              <img src={Bahubali} alt="" height="250px" width="248px" style={{borderRadius:"10px"}}/>
                              <div className="text-center">
                                  <h4>Bahubali</h4>
                                  <p>Fantasy, Action Drama</p>
                              </div> 
                          </div>
                          <div className="uc" style={{height:"350px"}}>
                              <img src={pournami} alt="" height="250px" width="248px" style={{borderRadius:"10px",}}/>
                              <div className="text-center">
                                  <h4>Pournami</h4>
                                  <p>Action Drama</p>
                              </div> 
                          </div>
                          <div className="uc" style={{height:"350px"}}>
                              <img src={dharmavaram} alt="" height="250px" width="248px" style={{borderRadius:"10px",}}/>
                              <div className="text-center">
                                  <h4>Dharmavaram</h4>
                                  <p>Action Drama UA13+</p>
                              </div> 
                          </div>
                          <div className="uc" style={{height:"350px"}}>
                              <img src={sstk} alt="" height="250px" width="248px" style={{borderRadius:"10px",}}/>
                              <div className="text-center" style={{border:"2px solid transparent",width:"230px"}}>
                                  <h4 className="text-center" style={{fontSize:"22px",marginBottom:"-1px"}}>Sunny sanskari ki<br/>Tulsi Kumari</h4>
                                  <p>Action Drama</p>
                              </div> 
                          </div>
                          <div className="uc" style={{height:"350px"}}>
                              <img src={Bepic} alt="" height="250px" width="248px" style={{borderRadius:"10px",}}/>
                              <div className="text-center">
                                  <h4>Bahubali Epic</h4>
                                  <p>Fantasy Action Drama</p>
                              </div> 
                          </div>
                          <div className="uc" style={{height:"350px"}}>
                              <img src={F1} alt="" height="250px" width="248px" style={{borderRadius:"10px",}}/>
                              <div className="text-center">
                                  <h4>F1</h4>
                                  <p>Sports & Action Drama</p>
                              </div> 
                          </div>
                      </div>
                  </div>
        </div> 
         </>
    )
}
export default Upcoming;