import React from 'react'
import {
  LayoutHead,
  LayoutHeder,
  LayoutBody,
  LayoutFooter
} from '../components/layout'

const Home: React.FC = () => {
  return (
    <div className="contenedor">
      <div className="header">
        <LayoutHead />
        <LayoutHeder
          backgraundColor={'red'}
          textColor={'black'}
          typeHeader={'hederA'}
          logo={'mi pagina'}
          posicionLogo={'lefth'}
          hight={'50 px'}
          itemNav={['Contactos', 'Ayuda', 'Productos', 'hola']}
          posicionNav={'derecha'}
          floatingHead={true}
        />
      </div>
      <div className="main">
        <LayoutBody />
      </div>
      <div className="footer">
        <LayoutFooter />
      </div>
    </div>
  )
}

export default Home
