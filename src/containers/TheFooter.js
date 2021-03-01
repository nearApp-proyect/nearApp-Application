import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://github.com/nearApp-proyect/nearapp-application" target="_blank" rel="noopener noreferrer">NearApp</a>
        <span className="ml-1">&copy; 2021</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">IETI</span>
        <a href="https://www.escuelaing.edu.co/es/" target="_blank" rel="noopener noreferrer">Escuela Colombiana de Ingeniería</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
