import React, { useContext } from 'react'
import { TodoContext } from '@/context/TodoContext'
import TodoForm from '@/components/TodoForm'
import TodoItem from '@/components/TodoItem'

const TodoList = () => {
  console.log('[TodoList rerender]')
  const { todoList } = useContext(TodoContext)

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
