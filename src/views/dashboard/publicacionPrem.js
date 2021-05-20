import React,{useEffect,useState,useRef} from "react";
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
import $, { nodeName } from 'jquery';


const Publicacion = (props) => {
    const [imagenes,setImagenes]= useState([])
    const [dia,setDia]=  useState(0)
    const [hr,setHora]=  useState(0)
    const [min,setMin]=  useState(0)
    const [sec,setSec]=  useState(0)
    const [descu,setDesc]= useState(props.post.descuento)
  
    useEffect(()=>{
      getImagen()
      getHours()
      return()=>{
        updateDescuento()
        clearInterval(interval.current)
      }
    },[])

    let interval = useRef();
  
    function getImagen(){
      axios.get('http://localhost:8080/imagen/all/'+props.post.idpublicacion).then(resp=>{
        setImagenes(resp.data)
      })
    }

    function getHours(){
        var fechaAct = new Date()

        var fecha = new Date(fechaAct.getFullYear()+(fechaAct.getMonth()+1)+fechaAct.getDate()+" "+props.post.hora).getTime();        

        interval = setInterval(()=>{
            const now = new Date().getTime()
            const distance = fecha - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24)/(1000 * 60 * 60))
            const minutes = Math.floor(distance % (1000 * 60 * 60)/(1000 * 60))
            const seconds = Math.floor(distance % (1000 * 60)/1000)

            if ( distance < 0){
                clearInterval(interval.current)
            }else{
                
                if(hours == 0 && minutes == 0 && seconds == 0) {
                    updateDescuento()
                }
                setDia(days)
                setHora(hours)
                setMin(minutes)
                setSec(seconds)
            }
        },1000)
    }

    function updateDescuento(){
        console.log("#DFdsfsdfsdfsd")
        let usuario = JSON.parse(localStorage.getItem('info'))
        let data ={
            "idpublicacion": props.post.idpublicacion,
            "fecha": props.post.fecha,
            "titulo": props.post.titulo,
            "description": props.post.description,
            "precio": props.post.precio,
            "ciudad": props.post.ciudad,
            "tipopublicacion": props.post.tipopublicacion,
            "tipoproducto": props.post.tipoproducto,
            "usuario": usuario.nickname,
            "estado": 1,
            "descuento":props.post.descuento-5,
            "hora": props.post.hora
        }
        axios.put('http://localhost:8080/publicacion/descuento',data).then(resp=>{
            if(props.post.idpublicacion == resp.data.idpublicacion){
                setDesc(resp.data.descuento)
            }
        })
    }


    return (
      <div>
         <CCard md="4" className="m-2" style={{width:"20rem"}}>
            <CCol xs="12" className="text-right p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-award" viewBox="0 0 16 16">
            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
            </svg>
            </CCol>
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
              <p className="lead">$ {props.post.precio}</p>
              <small className="text-muted">{props.post.description}</small>
            </div>
            <div className="col-12 row justify-content-center">
              <strong md="12" className="text-danger m-3">Descuento: {descu} %  - $  
                {props.post.precio*(descu/100)}</strong>
              <strong id="falta" md="12" className="text-center m-3">
                Tiempo hábil:   {hr} hh: {min} mm: {sec} ss
              </strong>
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