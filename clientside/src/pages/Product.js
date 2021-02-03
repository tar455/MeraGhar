import React,{useState} from "react";
// import data from "./data";
// import axios from "axios";
import over from "../images/A2.jpg";

// import  "../../backend/data";
// import Headers from "../template/header"
export default function Product(props){
    // axios.get('/api/products',(req,res)=>{
            
    // })
    const [count,IncrementFun]=useState(1000);
    // const product = data.Products.find((x)=>x._id === props.match.params.id);
    // if(!product)
    // {
    //     return <div>not found</div>;
    // }
    
    // const [dec,dec_Fun]=useState(count);
    return(
        
        <div>
            <div className="card">
                <h3 className="card-header">Best Sellers</h3>
                <div className="card-body">
                    <div className="container">
                    <div className="row">
                    <div className="col-sm-3">
                        <div className="card">
                            <h3 className="card-header">Over Brand</h3>
                            <div className="card-body">
                                <img src={over} alt="bricks" />
                                <p className="price"><i className="fas fa-rupee-sign"></i><strong>{count*11}</strong>  <del style={{color:"red"}}><i className="fas fa-rupee-sign"></i> {count*15}</del></p>
                                <button className="btn btn-danger" onClick={()=>IncrementFun(count+500)}><i className="fas fa-plus-square"></i></button>
                                {count}
                                <button className="btn btn-danger" onClick={()=>IncrementFun(count-500)}><i className="fas fa-minus-square"></i></button>
                                <button className="btn btn-danger"><i className="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <h3 className="card-header">Product</h3>
                            <div className="card-body">
                                <img src={over} alt="bricks" />

                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <h3 className="card-header">Product</h3>
                            <div className="card-body">
                                <img src={over} alt="bricks" />

                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <h3 className="card-header">Product</h3>
                            <div className="card-body">
                                <img src={over} alt="bricks" />

                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <h3 className="card-header">Product</h3>
                            <div className="card-body">
                                <img src={over} alt="bricks" />

                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <h3 className="card-header">Product</h3>
                            <div className="card-body">
                                <img src={over} alt="bricks" />

                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <h3 className="card-header">Product</h3>
                            <div className="card-body">
                                <img src={over} alt="bricks" />

                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
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
            </div>
            
        </div>
    );
}