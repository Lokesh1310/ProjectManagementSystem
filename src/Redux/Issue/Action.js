import { api } from "@/config/Api";
import * as actionTypes from "./ActionTypes"

export const fetchIssues=(id)=>{
    return async (dispatch)=>{
        dispatch({type:actionTypes.FETCH_ISSUES_REQUEST});
    
        try {
    
            const response= await api.get(`/api/issues/project/${id}`);
    
            dispatch({type:actionTypes.FETCH_ISSUES_SUCCESS,issues:response.data });
    

            console.log("--------------------00------------",response.data)
        } catch (error) {
            
         dispatch({
    
    
            type:actionTypes.FETCH_ISSUES_FAILURE,
            error:error.message
         });
       }
    
    };
    
    };
    
    
export const fetchIssueById=(id)=>{
    return async (dispatch)=>{
        dispatch({type:actionTypes.FETCH_ISSUES_BY_ID_REQUEST});
    
        try {
           
            const response= await api.get(`/api/issues/${id}`);
          
            dispatch({type:actionTypes.FETCH_ISSUES_BY_ID_SUCCESS,issues:response.data });
          
            
        } catch (error) {
            
         dispatch({
    
    
            type:actionTypes.FETCH_ISSUES_BY_ID_FAILURE,
            error:error.message
         });
       }
    
    };    
    };


    
export const updateIssueStatus=({id,status})=>{
    return async (dispatch)=>{
        dispatch({type:actionTypes.UPDATE_ISSUES_STATUS_REQUEST});
    
        try {
    
            const response= await api.put(`/api/issues/${id}/status/${status}`);
    
            dispatch({type:actionTypes.UPDATE_ISSUES_STATUS_SUCCESS,issues:response.data });
    
        } catch (error) {
            
         dispatch({
    
    
            type:actionTypes.UPDATE_ISSUES_STATUS_FAILURE,
            error:error.message
         });
       }
    
    };
    
    };
    
    
       
export const assignedUserToIssue=({issueId,userId})=>{
    return async (dispatch)=>{
        dispatch({type:actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST});
    
        try {
    
            const response= await api.put(`/api/issues/${issueId}/assignee/${userId}`);
    
            dispatch({type:actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS,issue:response.data });
    
        } catch (error) {
            
         dispatch({
    
    
            type:actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE,
            error:error.message
         });
       }
    
    };
    
    };


          
// export const createIssue=(issueData)=>{
//     return async (dispatch)=>{
//         dispatch({type:actionTypes.CREATE_ISSUES_REQUEST});
//         try {
    
//             const response= await api.post("/api/issues/",issueData);
//             console.log("=============++++++++++++++++++++++++++++++++",issueData)
      
//             dispatch({type:actionTypes.CREATE_ISSUES_SUCCESS,issue:response.data });
    
           
//         } catch (error) {
            
//          dispatch({
    
    
//             type:actionTypes.CREATE_ISSUES_FAILURE,
//             error:error.message
//          });
//        }
    
//     };
    
//     };




export const createIssue = (issueData) => {
    return async (dispatch) => {
       
      
        dispatch({ type: actionTypes.CREATE_ISSUES_REQUEST });
      
        try {
            
            
            const response = await api.post("/api/issues", issueData);
 

            console.log("Issue created+++++++++++++++++++++++  +++++++++++++++++++", response.data);

            dispatch({ type: actionTypes.CREATE_ISSUES_SUCCESS, issue: response.data });
        } catch (error) {
            dispatch({
                type: actionTypes.CREATE_ISSUES_FAILURE,
                error: error.message
            });
        }
    };
};

    

export const deleteIssue = (issueId) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.DELETE_ISSUES_REQUEST });
        try {
            await api.delete(`/api/issues/${issueId}`); // Make sure this endpoint is correct
            dispatch({ type: actionTypes.DELETE_ISSUES_SUCCESS, issueId });
        } catch (error) {
            dispatch({
                type: actionTypes.DELETE_ISSUES_FAILURE,
                error: error.message,
            });
        }
    };
};
    