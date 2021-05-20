import axios from "axios";
import React,{useEffect,useState} from "react";
import PostPremiunt from './publicacionPrem';

const PostFast = () =>{

    const[publicacion,setPost] = useState([]);

    useEffect(()=>{
        getAllPost();        
      },[]);

    
    function getAllPost(){
        axios.get('http://localhost:8080/publicacion/rapida').then(resp=>{
            setPost(resp.data)
        })
    }

    return(
        <div className="col-12 col-sm-12 col-md-12 mt-4 row justify-content-center">    
            {
                publicacion.map((product,index)=>
                    <PostPremiunt 
                        key = {index}
                        post = {product}
                    />
                )
            }
        </div>
    )

}


export default PostFast;