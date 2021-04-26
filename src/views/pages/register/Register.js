import React,{useEffect,useState} from 'react'
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
  CSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import axios from 'axios'
import Swal from 'sweetalert2'
import $ from 'jquery';
import Validation from 'jquery-validation';

var listCitys=[]

const Register = () => {
  //const [ciudades, setCiudades] = useState([])
  
  useEffect(()=>{
    getAllCitys()
  },[]);

  function getAllCitys(){
    axios.get('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json').then(
      resp =>{
        console.log(JSON.stringify(resp.data))
        $(resp.data).each(function(index,value){
          $(value.ciudades).each(function(ind,item){
            $("#ciudad").append(`<option value="${item}">${item}</option>`)
          })
        })
      }
    )
  }
  function saveUser(){
    /**
    var validator= $("#formRegister").validate({
      rules: {
        tipoDoc : {
          required: true,
        },
        documento:{
          required: true
        },
        nombre:{
          required: true
        },
        apellido:{
          required: true
        },
        direccion:{
          required: true
        },
        celular:{
          required: true
        },
        ciudad:{
          required: true
        },
        user:{
          required: true
        },
        email:{
          required: true
        },
        passwordPrinc:{
          required: true
        },
        passwordResp:{
          required: true
        },

      },
      messages:{
        tipoDoc : {
          required: 'Requerido',
        },
        documento:{
          required: 'Requerido'
        },
        nombre:{
          required: 'Requerido'
        },
        apellido:{
          required: 'Requerido'
        },
        direccion:{
          required: 'Requerido'
        },
        celular:{
          required: 'Requerido'
        },
        ciudad:{
          required: 'Requerido'
        },
        user:{
          required: 'Requerido'
        },
        email:{
          required: 'Requerido'
        },
        passwordPrinc:{
          required: 'Requerido'
        },
        passwordResp:{
          required: 'Requerido'
        },
      }
    }); 

    if(validator.form()){
      
    }else{
      Swal.fire({
        type:'error',
        text: 'Faltan campos por completar',
        timer: 2000,
        showConfirmButton: false
      })
    }
    */        
    let data ={
      "nickname": $("#user").val(),
      "tdocumento": $("#tipoDoc").val(),
      "documento": $("#documento").val(),
      "nombre": $("#nombre").val(),
      "apellido": $("#apellido").val(),
      "direccion": $("#direccion").val(),
      "ciudad": $("user").val(),
      "celular": $("#celular").val(),
      "correo": $("#email").val(),
      "password": $("#password").val(),
      "publicacion": [],
      "cometario": [],
      "chatEmi": [],
      "chatRecep": []
    }
    axios.post('http://localhost:8080/user/new',data).then(
      resp=>{
        if(resp.data.nickname == $("#user").val()){
          Swal.fire({
            type:'success',
            text:'Registro realizado con exito',
            showConfirmButton: false,
            timer: 2500
          })
          setTimeout(function(){
            window.location.href="/"
          },2500)
        }else{

        }
      }
    ) 
  }
  
  return (
    <div className="c-app c-default-layout flex-row align-items-center col-12">
      <CContainer>
        
          <CRow className="justify-content-center">
            <CCol md="12" lg="12" xl="12">
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm id="formRegister" className="row justify-content-center">
                    <h1 className="col-12">Registrar</h1>
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
                            <option selected disabled value="">Tipo de Documento</option>
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
                            id="apellido" placeholder="Apellido" autoComplete="apellido" />
                      </CInputGroup>
                      <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Dirección" id="direccion" name="direccion" autoComplete="direccion" />
                      </CInputGroup>
                      <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="number" id="celular" name="celular" placeholder="Celular" autoComplete="celular"/>
                      </CInputGroup>
                      <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CSelect custom name="ciudad" id="ciudad">
                          <option selected disabled value="">Ciudad</option>
                        </CSelect>
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
                        <CInput type="text" id="user" name="user" placeholder="Usuario" autoComplete="username" />
                      </CInputGroup>
                      <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                        <CInputGroupPrepend>
                          <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput id="email" name="email" type="text" placeholder="Email" autoComplete="email" />
                      </CInputGroup>
                      <CInputGroup className="mb-3 col-sm-6 col-md-6 col-12">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" id="password" name="passwordPrinc" placeholder="Contraseña" autoComplete="new-password" />
                      </CInputGroup>
                      <CInputGroup className="mb-4 col-sm-6 col-md-6 col-12">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" id="passwordC" name="passwordResp" placeholder="Repetir contraseña" autoComplete="new-password" />
                    </CInputGroup>
                    </div>   
                    <div className="col-12 row justify-content-center">
                      <CButton onClick={saveUser} className="col-6" color="success" block>Crear</CButton>
                    </div>                                 
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
