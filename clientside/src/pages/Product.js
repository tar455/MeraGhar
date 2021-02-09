import React,{useEffect,useState} from "react";
// import over from "../images/A2.jpg";
// import data from "./data";
import axios from "axios";
import LoadingBox from "./LoadingBox";
import MessageBox from "./messageBox";
// import  "../../backend/data";
// import Headers from "../template/header"
export default function Product(){
    const [products,setProducts]=useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    useEffect(() =>{
        const fetchData=async () =>{
            try{
            setLoading(true);
            const {data} = await axios.get('/api/products');
            setLoading(false);
            setProducts(data);
            }
            catch(err){
                setError(err.massage);
                setLoading(false);
            }
            
        };
        fetchData();
    },[]);
    const [count,Increment]=useState(1000);
    return(
        products.map((product)=>(
        <div>
            {
            loading? <LoadingBox></LoadingBox>
            :
            error?<MessageBox>{error}</MessageBox>
            :(<div className="card">
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
    </div>)
            }
            
    </div>
    ))
    );
}