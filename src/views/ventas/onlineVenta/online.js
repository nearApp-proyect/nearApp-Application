import React, { lazy } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CEmbed,
} from "@coreui/react";
import ListComents from './ListComents';

const Online = (props) => {
  return (
    <CCard className="col-sm-6 m-2"> 
      <CCardHeader>#{props.venta.id} - {props.venta.nombre}</CCardHeader>
      <CCardBody>
        <CEmbed ratio="16by9">
          <iframe src="https://www.youtube.com/embed/ctV1-yIzZzU" />
        </CEmbed>
        <ListComents></ListComents>
      </CCardBody>
    </CCard>    
  );
};

export default Online;
