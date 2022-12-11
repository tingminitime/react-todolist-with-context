import { useState } from 'react'
import { TodoProvider } from '@/context/TodoContext'
import TodoList from '@/components/TodoList'

function App() {
  return (
    <TodoProvider>
      <TodoList></TodoList>
    </TodoProvider>
  )
}

export default App
