import React, { useEffect, useState, useRef } from 'react'
import {
  LayoutHead,
  LayoutHeder,
  LayoutBody,
  LayoutFooter
} from '../components/layout'

const Home: React.FC = () => {
  const [isHeaderFijo, setIsHeaderFijo] = useState<string>('100px')
  const headerRef = useRef()
  const bodyRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      const refHeader = headerRef.current
      const refBody = bodyRef.current
      const { y } = refBody.getBoundingClientRect()
      const height = y >= 100 ? '100px' : '50px'
      setIsHeaderFijo(height)


      console.log(y)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="contenedor">
      <LayoutHead />
      <div ref={headerRef} className="header" style={{ position: 'fixed' }}>
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
          isButton={true}
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
