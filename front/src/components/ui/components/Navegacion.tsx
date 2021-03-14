import React from 'react'
import styled from 'styled-components'

interface NavigationInterface {
  links: string[]
}
interface Header {
  colorDeFondo?: string
}

const Containers = styled.div<Header>`
  display: flex;
  justify-content: space-between;

  .item {
    margin: 10px;
  }
`
const Navegacion: React.FC<NavigationInterface> = props => {
  return (
    <Containers>
      {props.links.map((link, i) => {
        return (
          <div key={i} className="item">
            <a>{link}</a>
          </div>
        )
      })}
    </Containers>
  )
}
export default Navegacion
