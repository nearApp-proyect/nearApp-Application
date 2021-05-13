import axios from "axios";
import React,{useEffect,useState} from "react";
import Publicacion from "./publicacion";


const Publicaciones=(props) =>{
    const [publicacion,setPublicacion] = useState([])
    
    useEffect(()=>{
        getAllCategoriaPub()
    },[])
    
    function getAllCategoriaPub(){
        let categoria = parseInt(localStorage.getItem('categoria'))
        axios.get('http://localhost:8080/publicacion/categoria/'+categoria).then(resp=>{
            setPublicacion(resp.data);
        })
    }
    return(
        <div className="col-12 col-sm-12 col-md-12 mt-4 row justify-content-center">    
            {
                publicacion.map((product,index)=>
                    <Publicacion 
                        key = {index}
                        post = {product}
                    />
                )
            }
        </div>
    )
}

export default Publicaciones;