import {
    CFormGroup,
    CCol,
    CRow,
    CCard,
    CCardHeader,
    CCardBody,
    CInput,
    CButton,
    CLabel
} from "@coreui/react";
import React, { useState } from "react";

import Online from './onlineVenta/online'

const AllOnline = () => {

    const [offer, setOffer] = useState(20000000);
    const [newOffer, setNewOffer] = useState(0);

    const [offer2, setOffer2] = useState(3500000);
    const [newOffer2, setNewOffer2] = useState(0);

    const pujar = () => {
        setOffer(newOffer);
    }

    const pujar2 = () => {
        setOffer2(newOffer2);
    }

    return (
        <CFormGroup>
            <CFormGroup row>
                <CCol>
                    <CCard>
                        <CCardHeader>
                            <b>Reloj fino de oro solido 18k</b>
                        </CCardHeader>
                        <CCardBody>
                            <CFormGroup row>
                                <CCol sm="4">
                                    <img height="300px" width="300px" src="https://portal-images.azureedge.net/auctions-2021/srwatc10059/images/3c74b8bf-bbc8-4cb6-a0c9-ad1800eb1443.jpg" alt="Reloj" />
                                </CCol>
                                <CCol>
                                    <CFormGroup col>
                                        <CRow>
                                            <CCard>
                                                <CCardHeader>
                                                    <b>Detalles</b>
                                                </CCardHeader>
                                                <CCardBody>
                                                    <CFormGroup col>
                                                        <CRow>CIRCA 1970s ACCOMPANIED BY AN AUDEMARS PIGUET BOX</CRow>
                                                        <CRow>Movimiento: 17J, manual, firmado Audemars Piguet, firmado 12x,xxx.</CRow>
                                                        <CRow>Dimensiones: Diametro approx. 47mm, se exhibe en la parte de atrás, números exteriores en romano, firmado Audemars Piguet, enumerado 71,xxx, 18k hallmarks.</CRow>
                                                    </CFormGroup>
                                                </CCardBody>
                                            </CCard>
                                        </CRow>
                                        <CRow>
                                            <CCard>
                                                <CCardHeader>
                                                    <b>Ofertar</b>
                                                </CCardHeader>
                                                <CCardBody>
                                                    <CFormGroup row>
                                                        <CCol><CLabel>Oferta más alta: {offer}</CLabel></CCol>
                                                        <CCol><CInput placeholder="Monto..." onChange={(e) => setNewOffer(e.target.value)}></CInput></CCol>
                                                        <CCol><CButton color="primary" onClick={(e) => pujar()}>Pujar</CButton></CCol>
                                                    </CFormGroup>
                                                </CCardBody>
                                            </CCard>
                                        </CRow>
                                    </CFormGroup>
                                </CCol>
                            </CFormGroup>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol>
                    <CCard>
                        <CCardHeader>
                            <b>Búho de madera tallado en roble</b>
                        </CCardHeader>
                        <CCardBody>
                            <CFormGroup row>
                                <CCol sm="4">
                                    <img height="300px" width="300px" src="https://portal-images.azureedge.net/auctions-2021/srten10828/images/564fd8f3-9e11-400e-b5a8-ad2800efbcad.jpg" alt="Búho" />
                                </CCol>
                                <CCol>
                                    <CFormGroup col>
                                        <CRow>
                                            <CCard>
                                                <CCardHeader>
                                                    <b>Detalles</b>
                                                </CCardHeader>
                                                <CCardBody>
                                                    <CFormGroup col>
                                                        <CRow>Trabajo de Robert Mouseman Thompson (Kilburn)</CRow>
                                                        <CRow>Un búho inglés hecho en roble, tallado de pie sosteniendo un ratón en su pata en una base de roca.</CRow>
                                                        <CRow>32cm de alto, perfecto estado.</CRow>
                                                    </CFormGroup>
                                                </CCardBody>
                                            </CCard>
                                        </CRow>
                                        <CRow>
                                            <CCard>
                                                <CCardHeader>
                                                    <b>Ofertar</b>
                                                </CCardHeader>
                                                <CCardBody>
                                                    <CFormGroup row>
                                                        <CCol><CLabel>Oferta más alta: {offer2}</CLabel></CCol>
                                                        <CCol><CInput placeholder="Monto..." onChange={(e) => setNewOffer2(e.target.value)}></CInput></CCol>
                                                        <CCol><CButton color="primary" onClick={(e) => pujar2()}>Pujar</CButton></CCol>
                                                    </CFormGroup>
                                                </CCardBody>
                                            </CCard>
                                        </CRow>
                                    </CFormGroup>
                                </CCol>
                            </CFormGroup>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CFormGroup>
        </CFormGroup>
    )
}

export default AllOnline;