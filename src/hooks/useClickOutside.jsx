import { useEffect } from 'react'

const useClickOutside = (refObject, callback) => {
  const handleClickOutside = e => {
    if (!refObject?.current.contain(e.target)) {
      callback()
    }

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    })
  }
}

export default useClickOutside
