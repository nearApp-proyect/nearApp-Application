import React, { useState } from "react";
import { CButton, CForm, CFormGroup, CInput, CListGroup } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Coment from "./coment";

var coments = [
  {
    nombre: "Felipe Pelades",
    avatar: "avatars/7.jpg",
    description: 60000,
  },
  {
    nombre: "Juana Perez",
    avatar: "avatars/2.jpg",
    description: 80000,
  },
];

const addComent = (valor) => {
  console.log("funcion");
  let newComent = {
    nombre: "Tanya Gomez",
    avatar: "avatars/6.jpg",
    description: valor,
  };
  coments.push(newComent);
};

const ListComents = () => {
  const [valor, setValor] = useState(0);
  return (
    <div className="col-12 col-sm-12 col-md-12 mt-4">
      <div className="col-12">
        <CListGroup style={{ overflowY: "scroll", maxHeight: "250px" }}>
          {coments.map((e, key) => (
            <Coment key={key} coment={e}></Coment>
          ))}
        </CListGroup>
      </div>
      <CForm className="mt-4 col-12 row justify-content-center">
        <CFormGroup className="col-12 col-sm-8 col-md-8">
          <CInput
            type="number"
            id="coment"
            name="coment"
            placeholder="ofrecer..."
            onChange={(e) => setValor(e.target.value)}
          />
        </CFormGroup>
        <CButton
          onClick={() => addComent({ valor })}
          className="btn btn-sm btn-pill btn-info col-sm-2"
        >
          <CIcon name="cil-paper-plane" height="20" />
        </CButton>
      </CForm>
    </div>
  );
};

export default ListComents;
