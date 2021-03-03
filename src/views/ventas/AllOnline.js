import React, { lazy } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CEmbed,
} from "@coreui/react";

import Online from './onlineVenta/online'

const AllOnline = () => {
    let ventas=[
        {
            id: 1,
            nombre: 'Iphone 6s'
        },
        {
            id: 2,
            nombre: 'Monopoly Imperial'
        }
    ]
    return(
        <div className="col-12 col-sm-12 col-md-12 row justify-content-center">
            {
                ventas.map((e,key)=>
                    <Online venta={e} key={key}></Online>
                )
            }
        </div>
    )
}

export default AllOnline;