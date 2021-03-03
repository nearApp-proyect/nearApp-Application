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

const Login = (props) => {
  //Save data
localStorage.setItem('user', 'prueba');
localStorage.setItem('password', 12345);
const usuario = localStorage.getItem('user')
const contrasenia = localStorage.getItem('password')
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
                      <CInput type="text" placeholder="Username" autoComplete="username" value ={usuario}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" value = {contrasenia}/>
                    </CInputGroup>
                    <CRow>
                      <Link to="/index">
                        <CButton color="primary" className="px-4">Login</CButton>
                      </Link>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
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
