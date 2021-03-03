import React from "react";
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
        <iframe title="countdown" width="560" height="315" src="https://www.youtube.com/embed/OYxBTyc0D2I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </CEmbed>
        <ListComents></ListComents>
      </CCardBody>
    </CCard>    
  );
};

export default Online;
