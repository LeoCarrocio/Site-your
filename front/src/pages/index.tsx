import React, { useEffect, useState, useRef } from 'react'
import { LayoutHeder, LayoutBody, LayoutFooter } from '../components/layout'
import { usePosicionScroll } from '../custonHooks/intex'

const Home: React.FC = () => {
  const [isHeaderFijo, setIsHeaderFijo] = useState<string>('100px')
  const bodyRef = useRef()
  const posicion = usePosicionScroll(bodyRef)

  useEffect(() => {
    const height = posicion >= 100 ? '100px' : '50px'
    setIsHeaderFijo(height)
  }, [posicion])

  return (
    <div className="contenedor">
      <div className="header" style={{ position: 'fixed' }}>
        <LayoutHeder
          backgraundColor={'red'}
          textColor={'black'}
          typeHeader={'hederA'}
          logo={'mi pagina'}
          posicionLogo={'lefth'}
          hight={isHeaderFijo}
          itemNav={['Contactos', 'Ayuda', 'Productos', 'hola', 'chau']}
          posicionNav={'derecha'}
          floatingHead={true}
          isButton={false}
        />
      </div>
      <div ref={bodyRef} className="main" style={{ height: '180vh' }}>
        <LayoutBody />
      </div>
      <div className="footer">
        <LayoutFooter />
      </div>
    </div>
  )
}

export default Home
