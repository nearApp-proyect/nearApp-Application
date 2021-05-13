import React,{useEffect,useState} from "react";
import {  
  CCard,  
  CCardBody,
  CCardFooter,  
  CImg,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow 
} from "@coreui/react";
import axios from "axios";

const Publicacion = (props) => {
  const [imagenes,setImagenes]= useState([])

  useEffect(()=>{
    getImagen()
  },[])

  function getImagen(){
    axios.get('http://localhost:8080/imagen/all/'+props.post.idpublicacion).then(resp=>{
      setImagenes(resp.data)
    })
  }
  return (
    <div>
      <CCard md="4" className="m-2" style={{width:"20rem"}}>
        <CCol xs="12" xl="12">
        <CCarousel animate>
          <CCarouselIndicators/>
          <CCarouselInner>
            
            {
              imagenes.map(resp=>(
                <CCarouselItem>
                  <img className="d-block w-100" src={resp.imagen} alt="1"/>
                </CCarouselItem>
              ))
            }
          </CCarouselInner>
          <CCarouselControl direction="prev"/>
          <CCarouselControl direction="next"/>
        </CCarousel>
        </CCol>  
        <CCardBody>
          <h4 className="title-card">{props.post.titulo}</h4>
          <div className="text-justify">
            <p className="lead">{props.post.precio}</p>
            <small className="text-muted">{props.post.description}</small>
          </div>
        </CCardBody>
        <CCardFooter>
          <div className="col-12 row justify-content-center">
            <small md="4" className="text-muted m-3">{props.post.fecha}</small>
            <small md="4" className="text-muted m-3">{props.post.ciudad}</small>
          </div>
        </CCardFooter>
    </CCard>

        
    </div>
    

    


  );
};

export default Publicacion;