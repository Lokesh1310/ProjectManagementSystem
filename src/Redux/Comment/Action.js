import { api } from "@/config/Api";
import * as actionTypes from "./ActionTypes"

export const createComment=(commentData)=>{
return async (dispatch)=>{
    dispatch({type:actionTypes.CREATE_COMMENT_REQUEST});

    try {

        const response= await api.post("/api/comments",commentData);

        dispatch({type:actionTypes.CREATE_COMMENT_SUCCESS,comment:response.data });

    } catch (error) {
        
     dispatch({


        type:actionTypes.CREATE_COMMENT_FAILURE,
        error:error.message
     });
   }

};

};



export const deleteComment=(commentId)=>{
    return async (dispatch)=>{
        dispatch({type:actionTypes.DELETE_COMMENT_REQUEST});
    
        try {
    
            const response= await api.delete(`/api/comments/${commentId}`);
    
            dispatch({type:actionTypes.DELETE_COMMENT_SUCCESS,commentId });
    
        } catch (error) {
            
         dispatch({
    
    
            type:actionTypes.DELETE_COMMENT_FAILURE,
            error:error.message
         });
       }
    
    };
    
    };
    

    
export const fetchComment=(issueId)=>{
    return async (dispatch)=>{
        dispatch({type:actionTypes.FETCH_COMMENTS_REQUEST});
    
        try {
    
            const response= await api.get(`/api/comments/${issueId}`    );
    
            dispatch({type:actionTypes.FETCH_COMMENTS_SUCCESS,comments:response.data });
    
        } catch (error) {
            
         dispatch({
    
    
            type:actionTypes.FETCH_COMMENTS_FAILURE,
            error:error.message
         });
       }
    
    };
    
    };
    