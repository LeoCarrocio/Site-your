import { useEffect, useState } from 'react'

export const usePosocionScroll = (ref: any): number => {
  const [posicion, setPosicion] = useState<number | undefined>()
  useEffect(() => {
    const handleScroll = () => {
      const refElemet = ref.current

      if (refElemet != null) {
        const { y } = refElemet.getBoundingClientRect()
        setPosicion(y)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [posicion])

  return posicion
}
