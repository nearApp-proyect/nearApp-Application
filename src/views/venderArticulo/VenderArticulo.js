import React,{useEffect,} from 'react'
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
    CInputRadio,
    CValidFeedback,
    CInvalidFeedback
} from '@coreui/react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import $, { nodeName } from 'jquery';
import { useState } from 'react/cjs/react.development';

const VenderArticulo = (props) => {
    const [images,setImages] = useState([])
    const [productos,setProductos] = useState([])
    const [tipoPub,setTipoPub] = useState([{idTipoPublicacion:1,tipo:'Normal',comision:0},{idTipoPublicacion:2,tipo:'Rapida',comision:7},{idTipoPublicacion:3,tipo:'En vivo',comision:10}])
    const [show,setShow] = useState(true)
    //const [publicacion,setPublicacion] = useState(0);
    useEffect(()=>{
        getCategorias()
    },[])

    function getCategorias(){
        axios.get('http://localhost:8080/categoria/all').then(
            resp =>{
                $(resp.data).each(function(ind,item){
                    $("#categoria").append(`<option value="${item.id}">${item.nombre}</option>`)
                })
            }
        )
    }

    function getProductos(){
        $("#producto").removeAttr("disabled");
        //$("#producto").empty()
        axios.get('http://localhost:8080/producto/category/'+$("#categoria").val()).then(
            resp =>{
                setProductos(resp.data)
                /*
                $("#producto").append("<option value='' selected disabled>Seleccione</option>")
                $(resp.data).each(function(index,item){
                    $("#producto").append(`<option value=${item}>${item.nombre}</option>`)
                })*/
            }
        )
    }

    function savePublicacion(){
        let fecha = new Date()
        let usuario = JSON.parse(localStorage.getItem('info'))
        let data ={
            "fecha": (show) ?  $("#fecha").val() : fecha,
            "titulo": $("#titulo").val(),
            "description":  `Marca: ${$("#marca").val()} - Modelo: ${$("#modelo").val()} - Datos: ${$("#datos").val()}
                            - Color: ${$("#color").val()} - Estado: ${$("#estado").val()} - Adicional: ${$("#descripcion").val()}`,
            "precio": $("#precio").val(),
            "ciudad": usuario.ciudad,
            "tipopublicacion": parseInt($("input:radio[name=inline-radios]:checked").val()),
            "tipoproducto": parseInt($("#producto").val()),
            "usuario": usuario.nickname,
            "estado": 1,
            "descuento":40,
            "hora": fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()
        }
        axios.post('http://localhost:8080/publicacion/new',data).then(resp=>{
            if(resp.data.idpublicacion != null){
                //setPublicacion(resp.data.idpublicacion)
                finishPub(resp.data.idpublicacion)
            }
        })
    }

    function saveImagenes(publicacion){
        console.log("sdsd "+publicacion);
        return new Promise((resolve,reject)=>{
            images.map((resp) =>{
                let data={
                    "imagen": resp,
                    "publicacion": publicacion
                }
                axios.post('http://localhost:8080/imagen/new',data).then(resp={
    
                })
            })
            return resolve(true);
        })     

        
    }
    
    function finishPub(publicacion){
        saveImagenes(publicacion).then((resp)=>{
            if(resp){
                Swal.fire({
                    icon:'success',
                    text:'Publicación Creada',
                    showConfirmButton: false,
                    timer: 2500
                })
                setTimeout(() => {
                    window.location.reload()
                }, 2500);
            }
        })
        
    }


    function changeImagen(e){
        const file = document.querySelector("#imagen").files[0];
        const reader = new FileReader(); //Elemento tipo lectura
        reader.readAsDataURL(file)
      
        reader.onload = function(event) {
          const imgElement = document.createElement("img");
          imgElement.src = event.target.result;
      
          imgElement.onload = function(e) {
            const canvas = document.createElement("canvas");
            //Se estable un valor promedio para calcular el tamaÃ±o de la imagen
            var MAX_WIDTH = 1500;
            var MAX_HEIGHT = 1500;
      
            var width = e.target.width;
            var height = e.target.height;
            //Calcula un valor para el tamaÃ±o proximo de la imagen
            if (width > height) {
              if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
              }
            } else {
              if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
              }
            }
      
            canvas.height = height;
            canvas.width = width;
      
            const ctx = canvas.getContext("2d");
      
            ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
      
            const srcEncoded = ctx.canvas.toDataURL("image/jpeg") //
            setImages([...images,srcEncoded]);
            
          }
        }
        //showImages()
        var input=document.getElementById("imagen");
        input.value = ''
    }


    function showDate(){
        if($("input:radio[name=inline-radios]:checked").val() == "3"){
            $("#dateVenta").removeClass('d-none')
            setShow(true)
        }else{
            $("#dateVenta").addClass('d-none')
            setShow(false)
        }
    }

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
                    <CInput id="titulo" placeholder="Ejemplo: Samsung Galaxy S9 64 GB Negro"></CInput>
                    </CFormGroup>
                    <CFormGroup>
                        <CRow>
                            <CCol sm="1"><b>Marca</b></CCol>
                            <CCol><CInput id="marca" placeholder="Ejemplo: Samsung"></CInput></CCol>
                            <CCol sm="2"><b>Modelo</b></CCol>
                            <CCol><CInput id="modelo" placeholder="Ejemplo: Galaxy S9"></CInput></CCol>
                            <CCol sm="1"><b>Datos</b></CCol>
                            <CCol><CInput id="datos" placeholder="Ejemplo: 64 GB, 6 RAM"></CInput></CCol>
                        </CRow>
                    </CFormGroup>
                    <CFormGroup>
                        <CRow>
                            <CCol sm="1"><b>Color</b></CCol>
                            <CCol><CInput id="color" placeholder="Ejemplo: Negro"></CInput></CCol>
                            <CCol sm="2"><b>Estado</b></CCol>
                            <CCol>
                                <CSelect id="estado">
                                    <option value="Nuevo">Nuevo</option>
                                    <option value="Usado">Usado</option>
                                    <option value="Reacondicionado">Reacondicionado</option>
                                </CSelect>
                            </CCol>
                            <CCol sm="12"><b>Imágen</b></CCol>
                            <CCol md="12"><CInputFile id="imagen" onChange={e => changeImagen(e)}/></CCol>
                            <CRow id="imagenes" sm="12" className="m-2">
                               {images.map(item =>(
                                   <CCol key={item} sm="4">
                                        <img  src={item} style={{width:"100px",height:"100px"}}></img>
                                    </CCol>  
                               ))}
                            </CRow>
                        </CRow>
                    </CFormGroup>
                    <CFormGroup>                                              
                        <b>Descripción adicional</b>
                        <CInput id="descripcion" placeholder="Ejemplo: Tiene detalle en la pantalla, 3 meses de uso, etc"></CInput>                        
                    </CFormGroup>
                    <CRow>
                        <CCol md="6">
                            <b>Categoría</b>
                            <select id="categoria" name="categoria" className="form-control" onChange={getProductos}>
                                <option selected disabled>Seleccione</option>
                            </select>
                        </CCol>
                        <CCol md="6">
                            <b>Tipo Producto</b>
                            <select id="producto" name="producto" className="form-control" disabled>
                                <option selected disabled>Seleccione</option>
                                {
                                    productos.map(item=>(
                                        <option key={item.id} value={item.id}>{item.nombre}</option>
                                    ))
                                }
                            </select>
                        </CCol>
                    </CRow>   
                    <CFormGroup>                                              
                        <b>Precio</b>
                        <CInput id="precio" placeholder=""></CInput>                        
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
                            <CCol sm="12">
                                <CFormGroup variant="custom-radio" inline>
                                    <CInputRadio custom id="inline-radio1" onClick={showDate} name="inline-radios" value="1" />
                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
                                        <b>Venta Normal</b>
                                        <CCol sm="12" className="text-justify">Una venta normal significa que el artículo será públicado en los listados normalmente sin costo alguno.
                                        Los compradores podrán verlo como resultado de búsqueda y comprarlo si así lo desean</CCol>
                                    
                                    </CLabel>
                                </CFormGroup>
                            </CCol>
                            <CCol sm="12">
                                <CFormGroup variant="custom-radio" inline>
                                    <CInputRadio custom id="inline-radio2" name="inline-radios" onClick={showDate} value="2" />
                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
                                        <b>Venta Segura</b>
                                        <CCol sm="12" className="text-justify">Una venta Segura significa que NearApp se encargará de que el artículo sea vendido encontrando un cliente
                                        al que le interese el producto, sin que tengas que esperar mucho tiempo a que los compradores lo busquen por su cuenta.
                                        Por este servicio se cobrará el 7% del valor de la venta.</CCol>
                                    </CLabel>
                                </CFormGroup>
                            </CCol>
                            <CCol sm="12">
                                <CFormGroup variant="custom-radio" inline>
                                    <CInputRadio custom id="inline-radio3" name="inline-radios" onClick={showDate} value="3" />
                                    <CLabel variant="custom-checkbox" htmlFor="inline-radio3">
                                        <b>Venta En Vivo</b>
                                        <CCol sm="12" className="text-justify">Una venta En vivo significa que NearApp mediante streaming en una fecha y hora indicada se realiza un tipo de 
                                        susbasta encontrando un precio cercano al ofrecido por ti y así generar una venta más eficaz. Por Este Servicio se cobrará el
                                        10% del valor de la venta
                                        </CCol>
                                    </CLabel>
                                </CFormGroup>
                            </CCol>
                        </CRow>
                    </CFormGroup>
                    <CFormGroup id="dateVenta" className="d-none">
                        <CLabel htmlFor="fecha">Fecha de Venta (seleccione la fecha de venta del producto)</CLabel>
                        <CInput type="date" id="fecha" name="fecha" placeholder="date" required/>
                        <CInvalidFeedback className="help-block">
                            Requerido
                        </CInvalidFeedback>
                        <CValidFeedback className="help-block">Requerido</CValidFeedback>
                    </CFormGroup>
                </CCardBody>
            </CCard>
            <CButton size="lg" onClick={savePublicacion} color="primary">Vender Artículo</CButton>
        </CCol>

    )
}

export default VenderArticulo