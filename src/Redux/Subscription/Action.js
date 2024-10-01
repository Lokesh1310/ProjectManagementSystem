
import { api } from "@/config/Api";
import * as actionTypes from "./ActionTypes"

export const getUserSubscription=(jwt)=>{
    return async (dispatch)=>{
        dispatch({type:actionTypes.GET_USER_SUBSCRIPTION_REQUEST});
    
        try {
    
            const response= await api.get(`/api/subscription/user`,{
                headers:{
                    "Authorization":`Bearer ${jwt}`
                }
            });
    
            dispatch({type:actionTypes.GET_USER_SUBSCRIPTION_SUCCESS,payload:response.data });
    
        } catch (error) {
            
         dispatch({
    
    
            type:actionTypes.GET_USER_SUBSCRIPTION_FAILURE,
            payload:error.message
         });
       }
    
    };
    
    };
    

    
export const upgradeSubscription=({plantype})=>{
    return async (dispatch)=>{
        dispatch({type:actionTypes.UPDATE_SUBSCRIPTION_REQUEST});
    
        try {
    
            const response= await api.get(`/api/subscription/upgrade`,null,{
                params:{
                    plantype:plantype,
                }
            });
    
            dispatch({type:actionTypes.UPDATE_SUBSCRIPTION_SUCCESS,payload:response.data });
    
        } catch (error) {
            
         dispatch({
    
    
            type:actionTypes.UPDATE_SUBSCRIPTION_FAILURE,
            payload:error.message
         });
       }
    
    };
    
    };
    