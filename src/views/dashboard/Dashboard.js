import React, { useState } from 'react'
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
import PostFast from './postFast';
import axios from 'axios'
import Swal from 'sweetalert2'
import $, { nodeName } from 'jquery';

const Dashboard = () => {

  function getPublicaciones(id) {
    console.log("didddddd: " + id)
    localStorage.setItem('categoria', id);
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
              <CFormGroup row>
                <CCol>
                  <Link to="/categoria" className="linkcreate" >
                    <CButton style={{ width: `100%`, height: `100%` }} type="button" color="info" onClick={getPublicaciones(1)}><CCol>VEHICULOS</CCol><CCol><CIcon size="lg" content={freeSet.cilCarAlt} /></CCol></CButton>
                  </Link>
                </CCol>
                <CCol>
                  <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(3)}>
                    <CButton style={{ width: `100%`, height: `100%`  }} type="button" color="info" ><CCol>TELEFONOS-TABLETS</CCol><CCol><CIcon size="lg" content={freeSet.cilScreenSmartphone} /></CCol></CButton>
                  </Link>
                </CCol>
                <CCol>
                  <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(4)}>
                    <CButton style={{ width: `100%`, height: `100%`  }} type="button" color="info" ><CCol>TV-AUDIO-VIDEO</CCol><CCol><CIcon size="lg" content={freeSet.cilTv} /></CCol></CButton>
                  </Link>
                </CCol>
                <CCol>
                  <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(5)}>
                    <CButton style={{ width: `100%`, height: `100%`  }} type="button" color="info" ><CCol>COMPUTADORES-PORTATILES</CCol><CCol><CIcon size="lg" content={freeSet.cilScreenDesktop} /></CCol></CButton>
                  </Link>
                </CCol>
                <CCol>
                  <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(6)}>
                    <CButton style={{ width: `100%`, height: `100%`  }} type="button" color="info" ><CCol>VIDEO JUEGOS-CONSOLAS</CCol><CCol><CIcon size="lg" content={freeSet.cilVideogame} /></CCol></CButton>
                  </Link>
                </CCol>
                <CCol>
                  <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(7)}>
                    <CButton style={{ width: `100%`, height: `100%`  }} type="button" color="info" ><CCol>HOGAR</CCol><CCol><CIcon size="lg" content={freeSet.cilHome} /></CCol></CButton>
                  </Link>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol>
                  <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(8)}>
                    <CButton style={{ width: `100%`, height: `100%`  }} type="button" color="info" ><CCol>ELECTRODOMESTICOS</CCol><CCol><CIcon size="lg" content={freeSet.cilFridge} /></CCol></CButton>
                  </Link>
                </CCol>
                <CCol>
                  <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(9)}>
                    <CButton style={{ width: `100%`, height: `100%`  }} type="button" color="info" ><CCol>DEPORTES</CCol><CCol><CIcon size="lg" content={freeSet.cilFootball} /></CCol></CButton>
                  </Link>
                </CCol>
                <CCol>
                  <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(10)}>
                    <CButton style={{ width: `100%`, height: `100%`  }} type="button" color="info" ><CCol>JUGUETES</CCol><CCol><CIcon size="lg" content={freeSet.cilLocomotive} /></CCol></CButton>
                  </Link>
                </CCol>
                <CCol>
                  <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(11)}>
                    <CButton style={{ width: `100%`, height: `100%`  }} type="button" color="info" ><CCol>MODA-BELLEZA</CCol><CCol><CIcon size="lg" content={freeSet.cilContact} /></CCol></CButton>
                  </Link>
                </CCol>
                <CCol>
                  <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(12)}>
                    <CButton style={{ width: `100%`, height: `100%`  }} type="button" color="info" ><CCol>MAQUINARIA-HERRAMIENTA</CCol><CCol><CIcon size="lg" content={freeSet.cilVector} /></CCol></CButton>
                  </Link>
                </CCol>
                <CCol>
                  <Link to="/categoria" className="linkcreate" onClick={getPublicaciones(13)}>
                    <CButton style={{ width: `100%`, height: `100%`  }} type="button" color="info" ><CCol>HOBBIES-MUSICA-ARTE</CCol><CCol><CIcon size="lg" content={freeSet.cilSmile} /></CCol></CButton>
                  </Link>
                </CCol>
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CCard>
        <CCardHeader>
          <h3>Productos destacados</h3>
        </CCardHeader>
        <CCardBody>
          <PostFast></PostFast>
        </CCardBody>
      </CCard>
    </CCol>

  )
}

export default Dashboard
