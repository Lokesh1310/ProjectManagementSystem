import { API_BASE_URL } from "@/config/Api"
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"
import axios from "axios"

export const register=userData=>async(dispatch)=>{

    dispatch({type:REGISTER_REQUEST})

    try{
        const {data}=await axios.post( `${API_BASE_URL }/auth/signup`,userData)
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt )
            dispatch({type:REGISTER_SUCCESS,payload:data})//isse jo jwt springboot se ayega vo local browser ke database me save ho jayega 
console.log(data.jwt)
        }
        console.log("register success",data)
    }
    catch(error){
console.log(error)
    }
}


export const login=userData=>async(dispatch)=>{

    dispatch({type:LOGIN_REQUEST})

    try{
        const {data}=await axios.post( `${API_BASE_URL }/auth/signin`,userData)
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt )
            dispatch({type:LOGIN_SUCCESS,payload:data})//isse jo jwt springboot se ayega vo local browser ke database me save ho jayega 
            
        }
        console.log("register success",data)
    }
    catch(error){
console.log(error)
    }
}

export const getUser=()=>async(dispatch)=>{

    dispatch({type:GET_USER_REQUEST});

    try{
        const {data}=await axios.get( `${API_BASE_URL }/api/users/profile`,{

            headers:{
            
                Authorization:`Bearer  ${localStorage.getItem("jwt")}`
            }
        });
        
        dispatch({type:GET_USER_SUCCESS,payload:data})//isse jo jwt springboot se ayega vo local browser ke database me save ho jayega 
            
      
        console.log("user success",data)
    }
    catch(error){


console.log("----------------===---------------------",error)
    }


// try {
//     const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//         },
//     });
//     dispatch({ type: GET_USER_SUCCESS, payload: data });
// } catch (error) {
//     if (error.response) {
//         // The request was made and the server responded with a status code
//         console.error('Error Response:', error.response.data);
//         console.error('Status Code:', error.response.status);
//         dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
//     } else if (error.request) {
//         // The request was made but no response was received
//         console.error('Error Request:', error.request);
//     } else {
//         // Something happened in setting up the request that triggered an Error
//         console.error('Error Message:', error.message);
//     }
// }

 }


 export const logout = () => {
    return async (dispatch) => { // Add return here
        dispatch({ type: LOGOUT });
        localStorage.clear();
    };
};