import React from 'react'
// import styled from 'styled-components'
import { LogoInterface } from '../interface'

// const Container = styled.div``

const Logo: React.FC<LogoInterface> = props => {
  return <>{props.titulo}</>
}

export default Logo
