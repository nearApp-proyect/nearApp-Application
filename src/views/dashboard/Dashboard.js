import React,{useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInput,
  CFormGroup,
  CCarousel,
  CCarouselCaption,
  CCarouselInner,
  CCarouselControl,
  CCarouselItem,
  CCarouselIndicators,
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CLink,
  CCardFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';
import { Link } from 'react-router-dom';
import Publicaciones from './publicaciones';
import axios from 'axios'
import Swal from 'sweetalert2'
import $, { nodeName } from 'jquery';

const Dashboard = () => {

  function getPublicaciones(id){
    console.log("didddddd: "+id)
    localStorage.setItem('categoria',id);
  }
  return (
    <CCol>
      <CFormGroup>
        <CRow>
          <CCol><CInput placeholder="Buscar artículo..."></CInput></CCol>
          <CCol><CButton color="primary"><CIcon content={freeSet.cilSearch} /></CButton></CCol>
        </CRow>
      </CFormGroup>
      <CCard>
        <CCardHeader>
          <h3>¡Bienvenido a NearApp!</h3>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol>
              NearApp es una aplicación que te permite comprar y vender de forma rápida. Con nuestra propuesta de <b>Venta Rápida</b>,
              puedes ofrecer ese producto que deseas vender y te ayudaremos a encontrar un comprador que necesite de éste.
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            CATEGORIAS           
          </CCardHeader>
          <CCardBody>
            <Link to="/categoria" className="linkcreate" >
                <CButton type="button" color="info" onClick={getPublicaciones(1)}>VEHICULOS</CButton>
            </Link> 
            <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(2)}>
                  <CButton type="button" color="info" >INMUEBLES</CButton>
                </Link> 
                <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(3)}>
                  <CButton type="button" color="info" >TELEFONOS-TABLETS</CButton>
                </Link> 
                <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(4)}>
                  <CButton type="button" color="info" >TV-AUDIO-VIDEO-CAMARAS</CButton>
                </Link> 
                <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(5)}>
                  <CButton type="button" color="info" >COMPUTADORES-PORTATILES</CButton>
                </Link> 
                <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(6)}>
                  <CButton type="button" color="info" >VIDEO JUEGOS-CONSOLAS</CButton>
                </Link> 
                <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(7)}>
                  <CButton type="button" color="info" >HOGAR</CButton>
                </Link> 
                <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(8)}>
                  <CButton type="button" color="info" >ELECTRODOMESTICOS</CButton>
                </Link>
                <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(9)}>
                  <CButton type="button" color="info" >DEPORTES</CButton>
                </Link> 
                <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(10)}>
                  <CButton type="button" color="info" >JUGUETES</CButton>
                </Link> 
                <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(11)}>
                  <CButton type="button" color="info" >MODA-BELLEZA</CButton>
                </Link>  
                <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(12)}>
                  <CButton type="button" color="info" >MAQUINARIA-HERRAMIENTA</CButton>
                </Link>
                <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(13)}>
                  <CButton type="button" color="info" >HOBBIES-MUSICA-ARTE</CButton>
                </Link>  
            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
      <CCard>
        <CCardHeader>
          <h3>Productos destacados</h3>
        </CCardHeader>
        <CCardBody>
          <CCarousel style={{ width: `35%` }} animate autoSlide={3000}>
            <CCarouselIndicators />
            <CCarouselInner>
              <CCarouselItem>
                <Link to='/comprarArticulo' className="linkcreate">
                  <img className="d-block w-100" src={"https://cdn.mos.cms.futurecdn.net/3KzX4FcFRu3nvFeyQp5AgP.jpg"} alt="slide 1" />
                  <CCarouselCaption><h3>Samsung Galaxy S10+</h3><p>Azul 512GB 8GB</p></CCarouselCaption>
                </Link>
              </CCarouselItem>
              <CCarouselItem>
                <Link to='/comprarArticulo' className="linkcreate">
                  <img className="d-block w-100" src={"https://images-na.ssl-images-amazon.com/images/I/81eYyHNvKFL._AC_UL1500_.jpg"} alt="slide 2" />
                  <CCarouselCaption><h3>Adidas Kaptur Sneaker</h3><p>Gris Suela Sintética</p></CCarouselCaption>
                </Link>
              </CCarouselItem>
              <CCarouselItem>
                <Link to='/comprarArticulo' className="linkcreate">
                  <img className="d-block w-100" src={"https://5.imimg.com/data5/TI/HF/KO/ANDROID-84375669/product-jpeg-500x500.jpg"} alt="slide 3" />
                  <CCarouselCaption><h3>BMW Blue Folding Sports Bicycle</h3><p>Azul Frenos de disco</p></CCarouselCaption>
                </Link>
              </CCarouselItem>
            </CCarouselInner>
            <CCarouselControl direction="prev" />
            <CCarouselControl direction="next" />
          </CCarousel>
        </CCardBody>
      </CCard>
      

    </CCol>

  )
}

export default Dashboard
