import React,{useEffect,useState} from "react";
import {  
  CButton,  
  CCard,  
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CLabel,
  CInput,   
} from "@coreui/react";
import axios from 'axios'
import Swal from 'sweetalert2'
import $ from 'jquery';

const EditUser = () => {
  
  useEffect(()=>{
    getAllCitys();
    
  },[]);

  function getAllCitys(){
    axios.get('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json').then(
      resp =>{
        $(resp.data).each(function(index,value){
          $(value.ciudades).each(function(ind,item){
            $("#ciudad").append(`<option value="${item}">${item}</option>`)
          })
        })
        getInfoUser();
      }
    )
  }
  function getInfoUser(){
    let data ={}
    let info = JSON.parse(localStorage.getItem("info"))
    axios.get('http://localhost:8080/user/'+info.nickname).then(
      resp =>{
        $("#tipo").val(resp.data.tdocumento)
        $("#documento").val(resp.data.documento)
        $("#nombre").val(resp.data.nombre)
        $("#apellido").val(resp.data.apellido)
        $("#direccion").val(resp.data.direccion)
        $("#ciudad").val(resp.data.ciudad)
        $("#celular").val(resp.data.celular)
        $("#user").val(resp.data.nickname)
        $("#email").val(resp.data.correo)
        $("#password").val(resp.data.password)
        $("#passwordC").val(resp.data.password)
      }
    )
  }
  function updateUser(){
    let data ={
      "nickname": $("#user").val(),
      "tdocumento": $("#tipoDoc").val(),
      "documento": $("#documento").val(),
      "nombre": $("#nombre").val(),
      "apellido": $("#apellido").val(),
      "direccion": $("#direccion").val(),
      "ciudad": $("#ciudad").val(),
      "celular": $("#celular").val(),
      "correo": $("#email").val(),
      "password": $("#password").val(),
      "foto": "avatars/avatar.png"
    }
    axios.put('http://localhost:8080/user/update',data).then(
      resp=>{
        if(resp.data.nickname == JSON.parse(localStorage.getItem("info")).nickname){
          Swal.fire({
            icon: "success",
            title: "Información Actualizada",
            timer: 2500
          })
          setTimeout(function(){
            window.location.reload()
          },2500)
        }else{
          Swal.fire({
            icon: "error",
            title: "No fue posible actualizar la información",
            timer: 2500
          })
        }
      }
    )
  }
  function updatePassword(){
    let data ={
      "nickname": $("#user").val(),
      "tdocumento": $("#tipoDoc").val(),
      "documento": $("#documento").val(),
      "nombre": $("#nombre").val(),
      "apellido": $("#apellido").val(),
      "direccion": $("#direccion").val(),
      "ciudad": $("#ciudad").val(),
      "celular": $("#celular").val(),
      "correo": $("#email").val(),
      "password": $("#password").val(),
      "foto": "avatars/avatar.png"
    }
    if($("#password").val() == $("#passwordC").val()){
      axios.put('http://localhost:8080/user/update',data).then(
        resp=>{
          if(resp.data.nickname == JSON.parse(localStorage.getItem("info")).nickname){
            Swal.fire({
              icon: "success",
              title: "Información Actualizada",
              showConfirmButton: false,
              timer: 2500
            })
            setTimeout(function(){
              window.location.reload()
            },2500)
          }else{
            Swal.fire({
              icon: "error",
              title: "No fue posible actualizar la información",
              showConfirmButton: false,
              timer: 2500
            })
          }
        }
      )
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Contraseñas no son iguales",
        showConfirmButton: false,
        timer: 2500
      })
    }
  }
  return (
    <div className="col-12">
      <CCard> 
        <CCardHeader>Editar Información</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              <CForm
                action=""
                className="col-12 row justify-content-center"
                method="post"
              >
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="tipo">Tipo Documento</CLabel>
                  <select id="tipo" name="tipo" class="form-control" disabled>
                    <option selected disabled>Seleccione</option>
                    <option value="CC">Cedula Ciudadania</option>
                    <option value="CE">Cedula Extranjera</option>
                    <option value="PA">Pasaporte</option>
                  </select>
                </CFormGroup>
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="documento">Documento</CLabel>
                  <CInput
                    type="text"
                    id="documento"
                    name="documento"
                    placeholder=""
                    value=""
                    disabled
                  />
                </CFormGroup>
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="nombre">Nombres</CLabel>
                  <CInput
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder=""
                  />
                </CFormGroup>
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="apellido">Apellidos</CLabel>
                  <CInput
                    type="text"
                    id="apellido"
                    name="apellido"
                    placeholder=""
                  />
                </CFormGroup>
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="direccion">Dirección</CLabel>
                  <CInput
                    type="text"
                    id="direccion"
                    name="direccion"
                    placeholder=""
                  />
                </CFormGroup>
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="celular">Celular</CLabel>
                  <CInput
                    type="text"
                    id="celular"
                    name="celular"
                    placeholder=""
                  />
                </CFormGroup>
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="ciudad">Ciudad</CLabel>
                  <select id="ciudad" name="ciudad" class="form-control">
                    <option disabled>Seleccione</option>
                  </select>
                </CFormGroup>
              </CForm>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter className="text-center">
          <CButton onClick={updateUser} type="button" color="primary">Actualizar</CButton>
        </CCardFooter>
      </CCard>
      <CCard>
        <CCardHeader>Editar Usuario</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              <CForm
                action=""
                className="col-12 row justify-content-center"
                method="post"
              >
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="user">Usuario</CLabel>
                  <CInput type="text" id="user" name="user" placeholder="Usuario" autoComplete="username" disabled/>
                </CFormGroup>
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="email">Correo</CLabel>
                  <CInput id="email" name="email" type="text" placeholder="Email" autoComplete="email" />
                </CFormGroup>
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="password">Contraseña</CLabel>
                  <CInput type="password" id="password" name="passwordPrinc" placeholder="Contraseña" autoComplete="new-password" />
                </CFormGroup>
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="passwordC">Repita la contraseña</CLabel>
                  <CInput type="password" id="passwordC" name="passwordResp" placeholder="Repetir contraseña" autoComplete="new-password" />
                </CFormGroup>
              </CForm>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter className="text-center">
          <CButton onClick={updatePassword} type="button" color="primary">Actualizar</CButton>
        </CCardFooter>
      </CCard>
      <CCard>
        <CCardHeader>Editar Tarjeta</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              <CForm
                action=""
                className="col-12 row justify-content-center"
                method="post"
              >
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="tarjeta">Numero de Tarjeta</CLabel>
                  <CInput
                    type="number"
                    id="tarjeta"
                    name="tarjeta"
                    placeholder="numero..."
                  />
                </CFormGroup>
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="nombTarjeta">Nombre de Titular</CLabel>
                  <CInput
                    type="text"
                    id="nombTarjeta"
                    name="nombTarjeta"
                    placeholder="titular..."
                  />
                </CFormGroup>
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="fecha">Fecha Vencimiento</CLabel>
                  <CInput
                    type="text"
                    id="fecha"
                    name="fecha"
                    placeholder="MM/YY"
                  />
                </CFormGroup>
                <CFormGroup className="col-sm-6 col-12 col-md-6">
                  <CLabel htmlFor="cvc">CVC</CLabel>
                  <CInput
                    type="text"
                    id="cvc"
                    name="cvc"
                    placeholder="CVC..."
                  />
                </CFormGroup>
              </CForm>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter className="text-center">
          <CButton type="button" color="primary">Actualizar</CButton>
        </CCardFooter>
      </CCard>
    </div>
  );
};

export default EditUser;
