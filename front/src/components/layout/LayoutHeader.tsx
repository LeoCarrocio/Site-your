import React from 'react'
import { HeaderInterface } from '../../interface/index'
import { HeaderTypeA } from '../../components/headerTypes'

const LayoutHeader: React.FC<HeaderInterface> = props => {
  const HederType = () => {
    switch (props.typeHeader) {
      case 'hederA':
        return <HeaderTypeA {...props} />
      default:
        break
    }
  }

  return (
    <>
      <HederType />
    </>
  )
}

export default LayoutHeader
