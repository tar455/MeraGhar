import 
{USER_LIST_REQUEST,USER_LIST_FAILURE,USER_LIST_SUCCESS
} from "../constant/userConstant";

export const userSignupReducer = (
    state={},action
)=>{
    switch(action.type)
    {
        case USER_LIST_REQUEST:
            return {loading: true};
        case USER_LIST_SUCCESS:
            return {loading:false,UserInfo: action.payload};
        case USER_LIST_FAILURE:
            return {loading: false,error: action.payload};
        default:
            return state;
    }
};