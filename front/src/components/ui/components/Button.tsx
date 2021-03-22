import React from 'react'
import styled from 'styled-components'

const Containers = styled.button`
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  height: 0;
  line-height: 0;
  color: #ffffff;
  font-family: Arial;
  width: 205px;
  font-size: 31px;
  /* font-weight: 300; */
  padding: 23px;
  background-color: #0077fd;
  /* -webkit-box-shadow: 1px 1px 20px 0 #000000;
  -moz-box-shadow: 1px 1px 20px 0 #000000;
  box-shadow: 1px 1px 20px 0 #000000;
  text-shadow: 1px 1px 20px #000000; */
  border: solid #337fed 1px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
`

const Button: React.FC = () => {
  return <Containers>Entrar</Containers>
}
export default Button
