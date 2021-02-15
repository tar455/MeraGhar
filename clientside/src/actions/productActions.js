import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constant/ProductConstant"
import axios from 'axios';
export const listProduct=()=>async(dispatch)=>{
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try{
        const products = await axios.get('/api/products');
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