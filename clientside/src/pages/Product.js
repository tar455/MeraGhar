import React,{useState} from "react";
// import over from "../images/A2.jpg";
import data from "./data";
// import  "../../backend/data";
// import Headers from "../template/header"
export default function Product(){
    
    const [count,IncrementFun]=useState(1000);
    return(
        data.Products.map((product)=>(
        <div>

            <div className="card">
                <h3 className="card-header">Best Sellers</h3>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-auto">
                            <div key={product._id} className="card">
                                <h3 className="card-header">{product.name}</h3>
                                <div className="card-body">
                                    <img src={product.image} style={{width:"290px", height:"300px"}} alt="bricks"/>
                                    <p className="price"><i className="fas fa-rupee-sign"></i><strong>{count*product.price}</strong>  <del style={{color:"red"}}><i className="fas fa-rupee-sign"></i> {count*15}</del></p>
                                    <button className="btn btn-danger" onClick={()=>IncrementFun(count+500)}><i className="fas fa-plus-square"></i></button>
                                    {count}
                                    <button className="btn btn-danger" onClick={()=>IncrementFun(count-500)}><i className="fas fa-minus-square"></i></button>
                                    <button className="btn btn-danger"><i className="fas fa-shopping-cart"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ))
    );
}