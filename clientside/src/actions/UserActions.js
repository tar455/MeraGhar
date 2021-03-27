import Axios from "axios";
import 
{USER_LIST_SUCCESS,USER_LIST_FAILURE,USER_LIST_REQUEST
} from "../constant/userConstant";

export const signup=(name,email,password,confirm_password)=>async(dispatch)=>{
    dispatch({
        type:USER_LIST_REQUEST,
        payload:{name,email,password,confirm_password}
    });
    try
    {
        const UserData = await Axios.post('/api/User/signup',{name,email,password,confirm_password});
        dispatch({
            type:USER_LIST_SUCCESS,
            payload:UserData
        });
        localStorage.setItem('UserInfo',JSON.stringify(UserData));
    }catch(error)
    {
        dispatch({
            type:USER_LIST_FAILURE,
            payload:error.message
        })
    }
}