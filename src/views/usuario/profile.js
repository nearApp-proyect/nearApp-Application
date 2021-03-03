import React from "react";
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

const Profile = () => {
  return (
    <div className="col-12 col-sm-12 col-md-12 row justify-content-center">
      <CCard style={{ width: "80%" }}>
        <CCardHeader>Información de Usuario</CCardHeader>
        <CCardBody>
          <CRow className="col-12 justify-content-center">
            <CCol md="4" className="text-center p-4">
              <CImg
                src={"avatars/6.jpg"}
                className="c-avatar-img"
                alt="usuario.img"
                style={{ width: "70%" }}
              />
            </CCol>
            <CCol md="8" className="text-center p-5">
              <h2 className="card-title">Tanya Gomez</h2>
              <div
                className="col-sm-12 text-center"
                style={{ fontSize: "20px" }}
              >
                <p className="border">
                  C.C. 34.567.890
                  <br />
                  576-6911 Nisi. Carretera
                  <br />
                  Mildura <br />
                  16700323 7828
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
