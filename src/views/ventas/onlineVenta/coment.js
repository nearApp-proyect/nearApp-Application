import React, { lazy } from "react";
import { CCol, CImg, CListGroupItem, CRow } from "@coreui/react";

const Coment = (props) => {
  return (
    <CListGroupItem>
      <CRow md="12" className="justify-content-center">
        <CCol md="4">
          <CImg
            src={props.coment.avatar}
            className="c-avatar-img"
            alt="usuario.img"
            style={{ width: "30%" }}
          />
        </CCol>
        <CCol md="8">
          <b>{props.coment.nombre}</b>
          <p className="text-justify">{props.coment.description}</p>
        </CCol>
      </CRow>
    </CListGroupItem>
  );
};

export default Coment;
