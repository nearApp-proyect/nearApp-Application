import React,{useEffect,useState} from "react";
import {  
  CButton,  
  CCard,
  CCardGroup,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,  
  CRow,  
  CImg,  
  CWidgetProgressIcon,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import UserPosts from "./userPosts";
import { Link } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import $ from 'jquery';

const Profile = () => {
  const[nombre,setNombre]= useState('')
  const[direccion,setDireccion]= useState('')
  const[ciudad,setCiudad]= useState('')
  const[celular,setCelular]= useState('')
  const[foto,setFoto]= useState('')
  const[documento,setDocumento]= useState('')
  const[tdocumento,setTdocumento]= useState('')

  useEffect(()=>{
    getUser()
  },[]);

  function getUser(){
    let data = JSON.parse(localStorage.getItem('info'))
    setNombre(data.nombre.toUpperCase()+" "+data.apellido.toUpperCase())
    setDireccion(data.direccion)
    setCiudad(data.ciudad)
    setCelular(data.celular)
    setFoto(data.foto)
    setDocumento(data.documento)
    setTdocumento(data.tdocumento)
  }
  return (
    <div className="col-12 col-sm-12 col-md-12 row justify-content-center">
      <CCard style={{ width: "80%" }}>
        <CCardHeader>Información de Usuario</CCardHeader>
        <CCardBody>
          <CRow className="col-12 justify-content-center">
            <CCol md="4" className="text-center p-4">
              <CImg
                src={foto}
                className="c-avatar-img"
                alt="usuario.img"
                style={{ width: "70%" }}
              />
            </CCol>
            <CCol md="8" className="text-center p-5">
              <h2 className="card-title">{nombre}</h2>
              <div
                className="col-sm-12 text-center"
                style={{ fontSize: "20px" }}
              >
                <p className="border">
                  {tdocumento} {documento}
                  <br />
                  {direccion} - {ciudad}
                  <br />
                  Celular: {celular}
                  <br />
                </p>
                <p className="border">
                    <b>Tarjeta Registrada: </b>
                    xxxx.xxxx.xxxx.5646
                </p>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter className="text-center">
          <Link to="/miPerfil/editarUsuario" className="linkcreate"><CButton type="button" color="info">Editar</CButton></Link>
        </CCardFooter>
      </CCard>
      <CCardGroup className="mb-6">
        <CWidgetProgressIcon
          header="7"
          text="Productos Vendidos"
          color="gradient-success"
        >
          <CIcon name="cil-basket" height="36" />
        </CWidgetProgressIcon>

        <CWidgetProgressIcon
          header="10"
          text="Productos Publicados Activos"
          color="gradient-warning"
        >
          <CIcon name="cil-basket" height="36" />
        </CWidgetProgressIcon>
        <CWidgetProgressIcon header="47%" text="Rentabilidad de Venta">
          <CIcon name="cil-chartPie" height="36" />
        </CWidgetProgressIcon>
      </CCardGroup>
      <UserPosts></UserPosts>
    </div>
  );
};

export default Profile;
