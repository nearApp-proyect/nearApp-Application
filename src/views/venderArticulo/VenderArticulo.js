import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,    
    CCardHeader,
    CCol,
    CRow,
    CLabel,      
    CInput,
    CFormGroup,
    CSelect,
    CInputFile,
    CInputRadio
} from '@coreui/react'
import { Link } from 'react-router-dom';

const VenderArticulo = (props) => {

    return (

        <CCol>
            <CFormGroup>
                <Link to='/dashboard' className="linkcreate"><CButton color="primary">Volver</CButton></Link>
            </CFormGroup>
            <CCard>
                <CCardHeader>
                    <h3><b>Vender un artículo</b></h3>
                </CCardHeader>
                <CCardBody>
                    <CFormGroup>
                        <b>¿Qué deseas publicar?</b> Indica producto, marca, modelo y características principales.
                    <CInput placeholder="Ejemplo: Samsung Galaxy S9 64 GB Negro"></CInput>
                    </CFormGroup>
                    <CFormGroup>
                        <CRow>
                            <CCol sm="1"><b>Marca</b></CCol>
                            <CCol><CInput placeholder="Ejemplo: Samsung"></CInput></CCol>
                            <CCol sm="1"><b>Modelo</b></CCol>
                            <CCol><CInput placeholder="Ejemplo: Galaxy S9"></CInput></CCol>
                            <CCol sm="1"><b>Datos</b></CCol>
                            <CCol><CInput placeholder="Ejemplo: 64 GB, 6 RAM"></CInput></CCol>
                        </CRow>
                    </CFormGroup>
                    <CFormGroup>
                        <CRow>
                            <CCol sm="1"><b>Color</b></CCol>
                            <CCol><CInput placeholder="Ejemplo: Negro"></CInput></CCol>
                            <CCol sm="1"><b>Estado</b></CCol>
                            <CCol>
                                <CSelect>
                                    <option value="1">Nuevo</option>
                                    <option value="2">Usado</option>
                                    <option value="3">Reacondicionado</option>
                                </CSelect>
                            </CCol>
                            <CCol sm="1"><b>Imágen</b></CCol>
                            <CCol><CInputFile /></CCol>
                        </CRow>
                    </CFormGroup>
                    <CFormGroup>                                              
                        <b>Descripción adicional</b>
                        <CInput placeholder="Ejemplo: Tiene detalle en la pantalla, 3 meses de uso, etc"></CInput>                        
                    </CFormGroup>
                    <CFormGroup>                                              
                        <b>Categoría</b>
                        <CInput placeholder="Ejemplo: Celulares"></CInput>                        
                    </CFormGroup>                    
                </CCardBody>
            </CCard>
            <CCard>
                <CCardHeader>
                    <b>Tipo de publicación</b>
                </CCardHeader>
                <CCardBody>
                    <CFormGroup>
                        <CRow>
                            <CCol sm="6">
                                <CFormGroup variant="custom-radio" inline>
                                    <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Venta Normal</CLabel>
                                </CFormGroup>
                            </CCol>
                            <CCol sm="6">
                                <CFormGroup variant="custom-radio" inline>
                                    <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Venta Segura</CLabel>
                                </CFormGroup>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol sm="6"><b>Venta Normal</b></CCol>
                            <CCol sm="6"><b>Venta Segura</b></CCol>
                        </CRow>
                        <CRow>
                            <CCol sm="6">Una venta normal significa que el artículo será públicado en los listados normalmente sin costo alguno.
                            Los compradores podrán verlo como resultado de búsqueda y comprarlo si así lo desean</CCol>
                            <CCol sm="6">Una venta Segura significa que NearApp se encargará de que el artículo sea vendido encontrando un cliente
                            al que le interese el producto, sin que tengas qeu esperar mucho tiempo a que los compradores lo busquen por su cuenta.
                             Por este servicio se cobrará el 7% del valor de la venta.</CCol>
                        </CRow>
                    </CFormGroup>
                </CCardBody>
            </CCard>
            <CButton size="lg" color="primary">Vender Artículo</CButton>
        </CCol>

    )
}

export default VenderArticulo