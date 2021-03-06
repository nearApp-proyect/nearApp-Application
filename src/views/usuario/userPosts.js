import axios from "axios";
import React,{useEffect,useState} from "react";
import UserPost from "./userPost";


const UserPosts=() =>{
    const [publicacion,setPublicacion] = useState([])
    
    useEffect(()=>{
        getAllUserPub()
    },[])

    function getAllUserPub(){
        let user = JSON.parse(localStorage.getItem('info'))
        axios.get('http://localhost:8080/publicacion/user/'+user.nickname).then(resp=>{
            setPublicacion(resp.data);
        })
    }
    return(
        <div className="col-12 col-sm-12 col-md-12 mt-4 row justify-content-center">    
            {
                publicacion.map((product,index)=>
                    <UserPost 
                        key = {index}
                        post = {product}
                    />
                )
            }
        </div>
    )
}

export default UserPosts;