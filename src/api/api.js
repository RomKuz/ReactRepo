import axios from "axios";


const instance = axios.create({
withCredentials:true,
baseURL:'https://social-network.samuraijs.com/api/1.0/',
})

//get /users with all query params and credentials
export const getUsers = (currentPage = 1,pageSize = 10)=>{
   return  instance.get(`users?page=${currentPage}&count=${pageSize}`,{withCredentials:true}).then(response=> response.data)

}

//post /follow with credentials
export const postFollowUser = (userId)=>{
   return  instance.post( `follow/${userId}`,{}, {withCredentials:true}).then(response=>response.data)
}

//Delete /follow with credentials
export const deleteFollowUser = (userId)=>{
   return instance.delete( `follow/${userId}`, {withCredentials:true}).then(respose=>respose.data)
}
// get auth/me with credentials
export const authMe = ()=>{
  return  instance.get(`auth/me`, {withCredentials:true}).then(response=>response.data)
}

// get /profile/id without credentials
export const getProfileById = (userId)=>{
  return   instance.get( `profile/${userId}`).then(response=>response.data)
}