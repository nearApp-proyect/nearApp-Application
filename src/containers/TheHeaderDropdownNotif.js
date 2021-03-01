import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,  
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

const TheHeaderDropdownNotif = () => {
  const itemsCount = 1
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-bell"/>
        <CBadge shape="pill" color="danger">{itemsCount}</CBadge>
      </CDropdownToggle>
      <CDropdownMenu  placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>Tienes {itemsCount} notificaciones</strong>
        </CDropdownItem>
        <CDropdownItem><CIcon content={freeSet.cilDollar} className="mr-2 text-success" />Venta realizada</CDropdownItem>        
        
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdownNotif