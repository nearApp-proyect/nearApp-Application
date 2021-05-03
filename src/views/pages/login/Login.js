import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import '../register/Register'
import axios from 'axios'
import Swal from 'sweetalert2'
import $ from 'jquery';

const Login = (props) => {
  //Save data
localStorage.setItem('user', 'prueba');
localStorage.setItem('password', 12345);
const usuario = ""
const contrasenia = ""

function login(){
  if($("#user").val() !="" && $("#password").val() !=""){
    axios.get('http://localhost:8080/user/login/'+$("#user").val()+"/"+$("#password").val()).then(
      resp =>{
        if(resp.data.nickname == $("#user").val() && resp.data.password == $("#password").val()){
          let info={
            "nickname": resp.data.nickname,
            "tdocumento": resp.data.tdocumento,
            "documento": resp.data.documento,
            "nombre": resp.data.nombre,
            "apellido": resp.data.apellido,
            "direccion": resp.data.direccion,
            "ciudad": resp.data.ciudad,
            "celular": resp.data.celular,
            "correo": resp.data.correo,
            "foto":  (resp.data.foto == null) ? "avatars/avatar.png" : resp.data.foto,
          }

          localStorage.setItem('info',JSON.stringify(info))
          
          Swal.fire({
            icon:'success',
            text:'Bienvenido '+resp.data.nombre+" "+resp.data.apellido,
            timer:2000
          })
          window.location.href="/index"
        }else{
          Swal.fire({
            icon:'error',
            text:'Usuario y/o contraseña incorrecta',
            timer:2000
          })
        }
      }
    )
  }
}
  return (
    <center>
    <div className="c-app c-default-layout flex-row align-items-center" style={{ width: '60%' }}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>NearApp</h1>
                    <p className="text-muted">Inicia sesión con tu cuenta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Usuario" id="user" name="name" autoComplete="username"/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" id="password" name="password" placeholder="Contraseña" autoComplete="current-password"/>
                    </CInputGroup>
                    <CRow>
                      <CCol className="col-12 justify-content-center">
                        <CButton onClick={login} color="primary" className="px-4">Ingresar</CButton>
                      </CCol>
                      <CCol className="col-12 justify-content-center">
                        <CButton color="link" className="px-0">¿Olvido la contraseña?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '100%'}}>
                <CCardBody className="text-center">
                  <div>
                    <h2>No tienes cuenta</h2>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Registrate Ahora</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    </center>
  )
}

export default Login
