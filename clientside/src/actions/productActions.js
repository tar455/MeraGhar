import { PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constant/ProductConstant"
import axios from 'axios';
export const listProduct=()=>async(dispatch)=>{
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try{
        const products = await axios.get(`/api/products`);
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload:products
        });
    }catch(error){
        dispatch({
            type: PRODUCT_LIST_FAILURE,
            payload:error.massage
        });
    }
}

export const ProductDetails =(productId)=>async(dispatch)=>{
    dispatch({
        type:PRODUCT_DETAILS_REQUEST
    });
    try{
        const productView = await axios.get(`/api/products:${productId}`);
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:productView
        })
    }catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAILURE,
            payload:error.massage
        })
    }
}