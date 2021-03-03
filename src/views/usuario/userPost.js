import React from "react";
import {  
  CCard,  
  CCardBody,
  CCardFooter,  
  CImg,
} from "@coreui/react";

const UserPost = (props) => {
  return (
    <CCard md="4" className="m-2" style={{width:"20rem"}}>
      <CImg
        src={props.post.img}
        className="card-img-top"
        alt="img producto"
        style={{ width: "100%",height:"40%" }}
      />
      <CCardBody>
        <h4 className="title-card">{props.post.precio}</h4>
        <div className="text-justify">
          <p className="lead">{props.post.nombre}</p>
          <small className="text-muted">{props.post.descripcion}</small>
        </div>
      </CCardBody>
      <CCardFooter>
        <div className="col-12 row justify-content-center">
          <small md="4" className="text-muted m-3">{props.post.fecha}</small>
          <small md="4" className="text-muted m-3">{props.post.ciudad}</small>
          <small md="4" className="text-muted m-3">{props.post.estado}</small>
        </div>
      </CCardFooter>
    </CCard>
  );
};

export default UserPost;