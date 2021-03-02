import React,{useEffect} from "react";
import LoadingBox from "./LoadingBox";
import MessageBox from "./messageBox";
import {useSelector,useDispatch} from 'react-redux';
import {listProduct} from "../actions/productActions";
import ProductShow from "./productshow";
export default function Product(){
    const dispatch=useDispatch();
    const productList = useSelector((state) => state.productList);
    const {loading,error,products} = productList;
    useEffect(() =>{
        dispatch(listProduct());
    },[dispatch]);
    return(
        <div>
            {
                loading? <LoadingBox></LoadingBox>
                :
                error?<MessageBox>{error}</MessageBox>
                :(<>
                {products.data.map((product)=>(
                   <ProductShow key={product.__id} product={product} ></ProductShow> 
                ))}
                </>
            )}
        </div>
    );
}