import axios from "axios";

const API = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_API_URL}` });

API.interceptors.request.use((req) => {
const tokencurrent = localStorage.getItem("token");
 if (tokencurrent){
  req.headers.Authorization = `Bearer ${tokencurrent}`;
  console.log("current token",tokencurrent)
  return req;
 } 

});
export default API;
