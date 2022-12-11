import { useContext } from 'react'
import { TodoContext } from '@/context/TodoContext'

const useTodo = () => {
  const context = useContext(TodoContext)

  if (context === undefined) {
    console.warn('無法在 Component 以外的地方使用!')
    return
  }

  return context
}

export default useTodo
