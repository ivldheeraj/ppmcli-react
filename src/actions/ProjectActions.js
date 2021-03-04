import axios from 'axios';
import {GET_ERRORS,GET_PROJECTS,GET_PROJECT, DELETE_PROJECT} from './types';

export const createProject = (project,history)=>async dispatch=>{

    try{
        const res = await axios.post("/api/projects",project);
        history.push("/dashboard");
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        });

    }
};

export const getProjects =()=> async dispatch => {
    const res = await axios.get("/api/projects/all");
    dispatch({
        type:GET_PROJECTS,
        payload:res.data
    });
}

export const getProject = (id,history) => async dispatch =>{
    const res=await axios.get(`/api/projects/${id}`);
    dispatch({
        type:GET_PROJECT,
        payload:res.data
    });
}

export const deleteProject =  id => async dispatch =>{
    if(
        window.confirm("Are you sure? This will delete the project and the data related to it.")
    ){
        await axios.delete(`/api/projects/${id}`);
        dispatch({
            type:DELETE_PROJECT,
            payload:id
        });
    }
}