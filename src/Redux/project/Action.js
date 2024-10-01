// import { api, API_BASE_URL } from "@/config/Api"
// import { ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS,
//      DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_PROJECT_BY_REQUEST, FETCH_PROJECT_BY_SUCCESS, FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS, INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS, SEARCH_PROJECT_REQUEST,
//       SEARCH_PROJECT_SUCCESS } from "./ActionTypes"




// export const searchProjects=(keyword)=>async(dispatch)=>{

//     dispatch({type:SEARCH_PROJECT_REQUEST})

//     try {
//         const{data}= await api.get("/api/projects/search?keyword="+keyword)

//         console.log("search projects",data)

//         dispatch({type:SEARCH_PROJECT_SUCCESS,projects:data })
//     } catch (error) {
//         console.log("error",error)
//    }

// }

// export const fetchProjectById=(id)=>async(dispatch)=>{

//     dispatch({type:FETCH_PROJECT_BY_REQUEST})

//     try {
//         const{data}= await api.post("/api/projects/",id)

//         console.log("project",data)

//         dispatch({type:FETCH_PROJECT_BY_SUCCESS,projects:data })
//     } catch (error) {
//         console.log("error",error)
//    }

// }

// export const createProject=(projectData)=>async(dispatch)=>{

//     dispatch({type:CREATE_PROJECT_REQUEST})

//     try {
//         // Correct way
// //    const response = await api.post("/api/projects", projectData);
//         const{data}= await api.post("/api/projects",projectData)

//         console.log("create projects===========================+++++++++++=====",data)

//         dispatch({type:CREATE_PROJECT_SUCCESS,projects:data })
//     } catch (error) {
//         console.log("error ++++++++++++++++++++++++++",error)
//    }

// }


// export const deleteProject=({projectId})=>async(dispatch)=>{

//     dispatch({type:DELETE_PROJECT_REQUEST})

//     try {
//         const{data}= await api.delete("/api/projects",projectId)

//         console.log("delete projects",data)

//         dispatch({type:DELETE_PROJECT_SUCCESS,projectId })
//     } catch (error) {
//         console.log("error",error)
//    }

// }

// export const inviteToProject=({email,projectId})=>async(dispatch)=>{

//     dispatch({type:INVITE_TO_PROJECT_REQUEST})

//     try {
//         const{data}= await api.post("/api/projects/invite"+{email,projectId})

//         console.log("invite projects",data)

//         dispatch({type:INVITE_TO_PROJECT_SUCCESS,payload:data })
//     } catch (error) {
//         console.log("error",error)
//    }

// }



// export const acceptInvitaion=({invitationToken,navigate})=>async(dispatch)=>{

//     dispatch({type:ACCEPT_INVITATION_REQUEST})

//     try {
//         const{data}= await api.get("/api/projects/accept_invitation",{
//             params:{ token:invitationToken }
//         })

//         navigate("/project",data.projectId)

//         console.log("acception Invitation",data)

//         dispatch({type:ACCEPT_INVITATION_SUCCESS,payload:data })
//     } catch (error) {
//         console.log("error",error)
//    }

// }





import { api } from "@/config/Api";
import { 
    ACCEPT_INVITATION_REQUEST, 
    ACCEPT_INVITATION_SUCCESS, 
    CREATE_PROJECT_REQUEST, 
    CREATE_PROJECT_SUCCESS, 
    DELETE_PROJECT_REQUEST, 
    DELETE_PROJECT_SUCCESS, 
    FETCH_PROJECT_BY_REQUEST, 
    FETCH_PROJECT_BY_SUCCESS, 
    FETCH_PROJECT_REQUEST, 
    FETCH_PROJECT_SUCCESS, 
    INVITE_TO_PROJECT_REQUEST, 
    INVITE_TO_PROJECT_SUCCESS, 
    SEARCH_PROJECT_REQUEST, 
    SEARCH_PROJECT_SUCCESS
} from "./ActionTypes";



export const fetchProjects=({category,tag})=>async(dispatch)=>{

    dispatch({type:FETCH_PROJECT_REQUEST})

    try {
        const{data}= await api.get("/api/projects",{params:{category,tag}})

        console.log("all projects",data)

        dispatch({type:FETCH_PROJECT_SUCCESS,projects:data })
    } catch (error) {
        console.log("error------------------------",error)
   }

}


// Fetch Projects
// export const fetchProjects = ({ category, tag }) => async (dispatch) => {
//     dispatch({ type: FETCH_PROJECT_REQUEST });

//     try {
//         const { data } = await api.get("/api/projects", { params: { category, tag } });
//         dispatch({ type: FETCH_PROJECT_SUCCESS, projects: data });

//         console.log("fetch   project===========================+++++++++++=====",data)

//     } catch (error) {
//         console.error("Error fetching projects:", error);
//     }
// };

// Search Projects
export const searchProjects = (keyword) => async (dispatch) => {
    dispatch({ type: SEARCH_PROJECT_REQUEST });

    try {
         const { data } = await api.get("/api/projects/search?keyword="+keyword)
        dispatch({ type: SEARCH_PROJECT_SUCCESS, projects: data });
    } catch (error) {
        console.error("Error searching projects:", error);
    }
};

// Fetch Project by ID
export const fetchProjectById = (id) => async (dispatch) => {
    dispatch({ type: FETCH_PROJECT_BY_REQUEST });

    try {
        const { data } = await api.get("/api/projects/"+id);
        dispatch({ type: FETCH_PROJECT_BY_SUCCESS, project: data });
    } catch (error) {
        console.error("Error fetching project by ID:", error);
    }
};

// Create Project
export const createProject = (projectData) => async (dispatch) => {
    dispatch({ type: CREATE_PROJECT_REQUEST });

    try {
        
        const { data } = await api.post("/api/projects", projectData);
        dispatch({ type: CREATE_PROJECT_SUCCESS, project: data });
        console.log("create projects===========================+++++++++++=====",data)

    } catch (error) {
        console.error("Error creating project:", error);
    }
};

// Delete Project
export const deleteProject = ({projectId}) => async (dispatch) => {
    dispatch({ type: DELETE_PROJECT_REQUEST });

    try {
        await api.delete("/api/projects/"+projectId);
        dispatch({ type: DELETE_PROJECT_SUCCESS, projectId });
    } catch (error) {
        console.error("Error deleting project:", error);
    }
};

// Invite to Project
export const inviteToProject = ({ email, projectId }) => async (dispatch) => {
   
    console.log("++++++++++++++++++++++++++++");
      
    dispatch({ type: INVITE_TO_PROJECT_REQUEST });

    try {
        const { data } = await api.post("/api/projects/invite", { email, projectId });
        console.log("invite ",data)
        dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error inviting to project:", error);
    }
};

// Accept Invitation
export const   acceptInvitation = ({ token, navigate }) => async (dispatch) => {
    dispatch({ type: ACCEPT_INVITATION_REQUEST });

    try {
        const { data } = await api.get("/api/projects/accept_invitation", {
             params: { token }
            
            });
        navigate("/project/"+  data.projectId  ); 
        dispatch({ type: ACCEPT_INVITATION_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error accepting invitation:", error);
    }
};