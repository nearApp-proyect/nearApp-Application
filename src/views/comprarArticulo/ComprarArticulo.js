import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CLabel,
    CFormGroup,
    CInput,
    CSelect
} from '@coreui/react'
import { Link } from 'react-router-dom';

const ComprarArticulo = (props) => {

    return (

        <CCol>
            <CFormGroup>
                <Link to='/dashboard' className="linkcreate"><CButton color="primary">Volver</CButton></Link>
            </CFormGroup>
            <CCard>
                <CCardHeader>
                    <h3>Samsung Galaxy S10+</h3>
                </CCardHeader>
                <CCardBody>
                    <CFormGroup>
                        <CRow>
                            <CCol sm="1"><b>Marca</b></CCol>
                            <CCol><CLabel>Samsung</CLabel></CCol>
                            <CCol sm="1"><b>Modelo</b></CCol>
                            <CCol><CLabel>Galaxy S10+</CLabel></CCol>
                            <CCol sm="1"><b>Datos</b></CCol>
                            <CCol><CLabel>Memoria 512GB, RAM 8GB</CLabel></CCol>
                        </CRow>
                    </CFormGroup>
                    <CFormGroup>
                        <CRow>
                            <CCol sm="1"><b>Color</b></CCol>
                            <CCol><CLabel>Azul</CLabel></CCol>
                            <CCol sm="1"><b>Estado</b></CCol>
                            <CCol><CLabel>Usado</CLabel></CCol>
                            <CCol sm="1"><b>Imágen</b></CCol>
                            <CCol><CLabel></CLabel></CCol>
                        </CRow>
                    </CFormGroup>
                    <CFormGroup>
                        <b>Descripción adicional </b>{' '}
                        <CLabel>3 Meses de uso, en perfecto estado, se entrega con todos los accesorios originales</CLabel>
                    </CFormGroup>
                    <CFormGroup>
                        <b>Categoría </b>{' '}
                        <CLabel>Celulares</CLabel>
                    </CFormGroup>
                </CCardBody>
            </CCard>
            <CCard>
                <CCardHeader>
                    <b>¿Te interesa este artículo?</b>
                </CCardHeader>
                <CCardBody>
                    <CFormGroup>
                    <CRow>
                        <CCol sm="2"><b>Dirección de entrega:</b></CCol>
                        <CCol><CInput placeholder="Ejemplo: AK. 45 No. 205 - 59, Autopista Norte"></CInput></CCol>
                    </CRow>
                    </CFormGroup>
                    <CFormGroup>
                    <CRow>
                        <CCol sm="2"><b>Método de pago:</b></CCol>
                        <CCol>
                            <CCol>
                                <CSelect>
                                    <option value="1">Efectivo</option>
                                    <option value="2">PSE</option>
                                    <option value="3">Tarjeta de crédito</option>
                                </CSelect>
                            </CCol>
                        </CCol>
                    </CRow>
                    </CFormGroup>
                </CCardBody>
            </CCard>
            <CButton size="lg" color="primary">Comprar Artículo</CButton>
        </CCol>

    )
}

export default ComprarArticulo