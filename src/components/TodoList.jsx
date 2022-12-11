import React, { useContext, useEffect } from 'react'
import { TodoContext } from '@/context/TodoContext'
import TodoForm from '@/components/TodoForm'
import TodoItem from '@/components/TodoItem'

const TodoList = () => {
  console.log('[TodoList rerender]')
  const { initState, todoList, initTodo } = useContext(TodoContext)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('state'))) {
      initTodo()
    }
  }, [])

  useEffect(() => {
    if (todoList !== initState) {
      console.log('[TodoList useEffect]setItem')
      localStorage.setItem('state', JSON.stringify(todoList))
    }
  }, [todoList])

  return (
    <div className="py-4 flex flex-col place-items-center gap-2">
      <div className="text-white">Todo List</div>
      <TodoForm></TodoForm>
      <div className="flex flex-col w-[50vw]">
        {todoList.map(todoItem => (
          <TodoItem
            todoItem={todoItem}
            key={todoItem.id}
          ></TodoItem>
        ))}
      </div>
    </div>
  )
}

export default TodoList
