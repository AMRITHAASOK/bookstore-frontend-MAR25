import { serverURL } from "./serverURL"
import { commonAPI  } from "./commonAPI"

//API CALL 
export const registerAPI =(reqBody)=>{
    return commonAPI('POST',`${serverURL}/api/register`,reqBody,{})
}

export const LoginAPI =(reqBody)=>{
    return commonAPI('POST',`${serverURL}/api/login`,reqBody,{})
}

export const GoogleLoginAPI =(reqBody)=>{
    return commonAPI('POST',`${serverURL}/api/google-login`,reqBody,{})
}


export const uploadBookAPI = (reqBody,reqHeader)=>{
    return commonAPI('POST',`${serverURL}/api/addBook`,reqBody,reqHeader)
}