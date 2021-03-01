import React from 'react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Principal',
    to: '/dashboard',
    icon: <CIcon content={freeSet.cilCart} customClasses="c-sidebar-nav-icon"/>    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Vender',
    to: '/venderArticulo',
    icon: <CIcon name="cil-dollar" customClasses="c-sidebar-nav-icon"/>    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Mi perfil',
    to: '/dashboard',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon"/>    
  }    
]

export default _nav
