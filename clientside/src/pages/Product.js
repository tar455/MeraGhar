import React from "react";
// import data from "../../backend/data";
import axios from "axios";
import over from "../images/OverBrand.jpg";
// import Headers from "../template/header"
export default function Product(){
    axios.get('/api/products',(req,res)=>{
            
    })
    return(
        
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4 align-it-self">
                        <div className="card">
                            <h3 className="card-header">Product</h3>
                            <div className="card-body">
                                <img src={over} alt="bricks" />

                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                        <div className="card">
                            <h3 className="card-header">Product</h3>
                            <div className="card-body">
                                <img src={over} alt="bricks" />
                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
                
            
        </div>
    );
}