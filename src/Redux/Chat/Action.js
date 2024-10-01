import { api } from "@/config/Api";
import * as actionTypes from "./ActionTypes"

export const sendMessage=(messageData)=>{
return async (dispatch)=>{

    dispatch({type:actionTypes.SEND_MESSAGES_REQUEST});
 
    try {

        const response= await api.post("/api/messages/send",messageData);
      
        dispatch({type:actionTypes.SEND_MESSAGES_SUCCESS,message:response.data });
        console.log("++++++",response.data)
 

    } catch (error) {
        
     dispatch({


        type:actionTypes.SEND_MESSAGES_FAILURE,
        error:error.message
     });
   }

};

};

export const fetchChatByProject=(projectId)=>{


    

    return async (dispatch)=>{
        
 
        dispatch({type:actionTypes.FETCH_CHAT_BY_PROEJECT_REQUEST});
         
        try {
    
            const response= await api.get(`/api/projects/${projectId}/chat`);
    
          
            
            console.log("fetch chat",response.data);
            dispatch({type:actionTypes.FETCH_CHAT_BY_PROEJECT_SUCCESS,chat:response.data });
            
     
        } catch (error) {
            
         dispatch({
    
            
            type:actionTypes.FETCH_CHAT_BY_PROEJECT_FAILURE,
            error:error.message
         });
       }
    
    };
    
    };

    
export const fetchChatMessages=(chatId)=>{
    return async (dispatch)=>{
        dispatch({type:actionTypes.FETCH_CHAT_MESSAGES_REQUEST});
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
 
        try {
    
            const response= await api.get(`/api/messages/chat/${chatId}`);
    

            console.log("fetch chat",response.data);
            dispatch({type:actionTypes.FETCH_CHAT_MESSAGES_SUCCESS,
                chatId,
                messages:response.data ,
            });
    
        } catch (error) {
            console.log(error);
            
         dispatch({

            type:actionTypes.FETCH_CHAT_PROEJECT_FAILURE,
            error:error.message
         });
       }
    
    };
    
    };