import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInput,
  CFormGroup,
  CCarousel,
  CCarouselCaption,
  CCarouselInner,
  CCarouselControl,
  CCarouselItem,
  CCarouselIndicators
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (

    <CCol>
      <CFormGroup>
        <CRow>
          <CCol><CInput placeholder="Buscar artículo..."></CInput></CCol>
          <CCol><CButton color="primary"><CIcon content={freeSet.cilSearch} /></CButton></CCol>
        </CRow>
      </CFormGroup>
      <CCard>
        <CCardHeader>
          <h3>¡Bienvenido a NearApp!</h3>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol>
              NearApp es una aplicación que te permite comprar y vender de forma rápida. Con nuestra propuesta de <b>Venta Rápida</b>,
              puedes ofrecer ese producto que deseas vender y te ayudaremos a encontrar un comprador que necesite de éste.
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <h3>Productos destacados</h3>
        </CCardHeader>
        <CCardBody>
          <CCarousel style={{ width: `35%` }} animate autoSlide={3000}>
            <CCarouselIndicators />
            <CCarouselInner>
              <CCarouselItem>
                <Link to='/comprarArticulo' className="linkcreate">
                  <img className="d-block w-100" src={"https://cdn.mos.cms.futurecdn.net/3KzX4FcFRu3nvFeyQp5AgP.jpg"} alt="slide 1" />
                  <CCarouselCaption><h3>Samsung Galaxy S10+</h3><p>Azul 512GB 8GB</p></CCarouselCaption>
                </Link>
              </CCarouselItem>
              <CCarouselItem>
                <Link to='/comprarArticulo' className="linkcreate">
                  <img className="d-block w-100" src={"https://images-na.ssl-images-amazon.com/images/I/81eYyHNvKFL._AC_UL1500_.jpg"} alt="slide 2" />
                  <CCarouselCaption><h3>Adidas Kaptur Sneaker</h3><p>Gris Suela Sintética</p></CCarouselCaption>
                </Link>
              </CCarouselItem>
              <CCarouselItem>
                <Link to='/comprarArticulo' className="linkcreate">
                  <img className="d-block w-100" src={"https://5.imimg.com/data5/TI/HF/KO/ANDROID-84375669/product-jpeg-500x500.jpg"} alt="slide 3" />
                  <CCarouselCaption><h3>BMW Blue Folding Sports Bicycle</h3><p>Azul Frenos de disco</p></CCarouselCaption>
                </Link>
              </CCarouselItem>
            </CCarouselInner>
            <CCarouselControl direction="prev" />
            <CCarouselControl direction="next" />
          </CCarousel>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <h3>Categorias populares</h3>
        </CCardHeader>
        <CCardBody>
          <CFormGroup>
            <CRow>
              <CCol><CButton style={{ width: `80%` }} size="lg" variant="outline" color="primary"><CCol>Jugueteria</CCol><CCol><CIcon content={freeSet.cilLocomotive} size="lg" /></CCol></CButton></CCol>
              <CCol><CButton style={{ width: `80%` }} size="lg" variant="outline" color="primary"><CCol>Deportes</CCol><CCol><CIcon content={freeSet.cilFootball} size="lg" /></CCol></CButton></CCol>
              <CCol><CButton style={{ width: `80%` }} size="lg" variant="outline" color="primary"><CCol>Videojuegos</CCol><CCol><CIcon content={freeSet.cilGamepad} size="lg" /></CCol></CButton></CCol>
              <CCol><CButton style={{ width: `80%` }} size="lg" variant="outline" color="primary"><CCol>Mascotas</CCol><CCol><CIcon content={freeSet.cilAnimal} size="lg" /></CCol></CButton></CCol>
              <CCol><CButton style={{ width: `80%` }} size="lg" variant="outline" color="primary"><CCol>Celulares</CCol><CCol><CIcon content={freeSet.cilMobile} size="lg" /></CCol></CButton></CCol>
            </CRow>
          </CFormGroup>
          <CFormGroup>
            <CRow>
              <CCol><CButton style={{ width: `80%` }} size="lg" variant="outline" color="primary"><CCol>Infantil</CCol><CCol><CIcon content={freeSet.cilChild} size="lg" /></CCol></CButton></CCol>
              <CCol><CButton style={{ width: `80%` }} size="lg" variant="outline" color="primary"><CCol>Muebles</CCol><CCol><CIcon content={freeSet.cilCouch} size="lg" /></CCol></CButton></CCol>
              <CCol><CButton style={{ width: `80%` }} size="lg" variant="outline" color="primary"><CCol>Electrónica</CCol><CCol><CIcon content={freeSet.cilMicrophone} size="lg" /></CCol></CButton></CCol>
              <CCol><CButton style={{ width: `80%` }} size="lg" variant="outline" color="primary"><CCol>Baño</CCol><CCol><CIcon content={freeSet.cilBath} size="lg" /></CCol></CButton></CCol>
              <CCol><CButton style={{ width: `80%` }} size="lg" variant="outline" color="primary"><CCol>Bicicletas</CCol><CCol><CIcon content={freeSet.cilBike} size="lg" /></CCol></CButton></CCol>
            </CRow>
          </CFormGroup>
        </CCardBody>
      </CCard>

    </CCol>

  )
}

export default Dashboard
