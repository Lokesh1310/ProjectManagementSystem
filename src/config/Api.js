// import axios from "axios"

// export const API_BASE_URL="http://localhost:8080"

// export const api=axios.create({baseURL:API_BASE_URL})
// const jwt =localStorage.getItem("jwt");

// api.defaults.headers.common["Authorization"]=`Bearer $(jwt)`
// api.defaults.headers.post["Content-Type"]="applcation/json";

 

import axios from "axios";

export const API_BASE_URL = "http://localhost:8080";

export const api = axios.create({ baseURL: API_BASE_URL });

// Fetch JWT from localStorage
const jwt = localStorage.getItem("jwt");

// Set Authorization header if JWT exists
if (jwt) {
    api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

// Correct Content-Type for POST requests
api.defaults.headers.post["Content-Type"] = "application/json";