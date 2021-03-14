import React from 'react'
import styled from 'styled-components'
// import Link from 'next/link'
import { HeaderInterface } from '../../interface'
import { Navegacion, Logo, Button } from '../ui/components'

interface Heder {
  colorDeFondo: string
}

const Containers = styled.div<Heder>`
  z-index: 20;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 250px auto 300px;
  justify-items: center;
  align-items: center;
  background-color: ${props => props.colorDeFondo};
`

const HeaderTypeA: React.FC<HeaderInterface> = props => {
  return (
    <Containers colorDeFondo={props.backgraundColor}>
      <Logo titulo={props.logo} />
      <Navegacion links={props.itemNav} />
      <Button />
    </Containers>
  )
}
export default HeaderTypeA
