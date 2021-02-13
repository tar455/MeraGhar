import React,{useState} from 'react';
import data from "./data";
export default function ProductShow() {
    const [count,Increment]=useState(1000);
  return (
      <>
    { 
    data.Products.map((data)=>(
    <div className="card">
                        <h3 className="card-header">Best Sellers</h3>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-auto">
                                        <div key={data._id} className="card">
                                            <h3 className="card-header">{data.name}</h3>
                                                <div className="card-body">
                                                    <img src={data.image} style={{width:"290px", height:"300px"}} alt="bricks"/>
                                                        <p className="price"><i className="fas fa-rupee-sign"></i><strong>{count*data.price}</strong>  <del style={{color:"red"}}><i className="fas fa-rupee-sign"></i> {count*15}</del></p>
                                                            <button className="btn btn-danger" onClick={()=>Increment(count+500)}><i className="fas fa-plus-square"></i></button>
                                                                {count}
                                                                    <button className="btn btn-danger" onClick={()=>Increment(count-500)}><i className="fas fa-minus-square"></i></button>
                                                                        <a href="/cart">
                                                                            <button className="btn btn-danger"><i className="fas fa-shopping-cart"></i></button>
                                                                        </a>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>))}
    </>
  );
}
