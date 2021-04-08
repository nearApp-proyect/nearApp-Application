import React from 'react'
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
  CRow,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center col-12">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="12" lg="12" xl="12">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm  className="row justify-content-center">
                  <h1 className="col-12">Registrase</h1>
                  <p className="text-muted col-12">Crea tu nueva cuenta</p>
                  <div className="col-12 col-sm-12 col-md-12 row justify-content-center border border-dark p-4 m-3">
                    <h3 className="col-12">Información Principal</h3>
                    <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CSelect 
                          custom 
                          name="tipoDoc" 
                          id="tipoDoc" 
                          autoComplete="name"
                        >
                          <option value="0">Seleccione Tipo de Documento</option>
                          <option value="CC">Cedula Ciudadania</option>
                          <option value="CE">Cedula Extranjera</option>
                          <option value="PA">Pasaporte</option>
                        </CSelect>
                    </CInputGroup>                    
                    <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="number" name="documento" 
                          id="documento"  placeholder="Documento" autoComplete="documento" />
                    </CInputGroup>
                    <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name="nombre" 
                          id="nombre" placeholder="Nombre" autoComplete="nombre" />
                    </CInputGroup>
                    <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" name="apellido" 
                          id="documento" placeholder="Apellido" autoComplete="apellido" />
                    </CInputGroup>
                    <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Dirección" autoComplete="direccion" />
                    </CInputGroup>
                    <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="number" placeholder="Celular" autoComplete="celular"/>
                    </CInputGroup>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 row justify-content-center border border-dark p-4 m-3">
                    <h3 className="col-12">Información de Usuario</h3>
                    <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Usuario" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                      <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email" autoComplete="email" />
                    </CInputGroup>
                    <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Contraseña" autoComplete="new-password" />
                    </CInputGroup>
                    <CInputGroup className="mb-4 col-sm-6 col-md-6 col-12">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repetir contraseña" autoComplete="new-password" />
                  </CInputGroup>
                  </div>                  
                  <CButton color="success" block>Crear</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
