import React ,{useEffect ,useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";

export default function Protected({children,authentication =true}){
    const navigate =useNavigate()
    const [loader ,setLoader] =useState(true)
    
    const authStatus =useSelector(state =>state.auth.status)
    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }
        else if(!authentication && authService !==authentication){
            navigate("/")
        }

        setLoader(false)
    },[authStatus ,navigate ,authentication])
}
