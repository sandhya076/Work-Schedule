import axios from "axios";

const url = "https://work-schedule-server.herokuapp.com/work";
export const fetchWork = () => axios.get(url)
export const createWork = (newwork)=> axios.post(url,newwork);
export const updateWork =(id,updateWork)=>axios.patch(`${url}/${id}`,updateWork);
export const deleteWork = (id)=> axios.delete(`${url}/${id}`);
