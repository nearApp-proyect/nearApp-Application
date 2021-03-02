import React, { lazy } from "react";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardGroup,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CFormText,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { render } from "enzyme/build";

const EditUser = () => {
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
                  <select id="tipo" name="tipo" class="form-control">
                    <option selected>Seleccione</option>
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
                    <option selected>Seleccione</option>
                    <option value="1">Bogotá</option>
                    <option value="2">Cucuta</option>
                    <option value="3">Villacencio</option>
                  </select>
                </CFormGroup>
              </CForm>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter className="text-center">
          <CButton type="button" color="primary">Actualizar</CButton>
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
