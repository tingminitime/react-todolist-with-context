import { useState, useContext } from 'react'
// import { TodoContext } from '@/context/TodoContext'
import useTodo from '@/hooks/useTodoContext'

const TodoForm = () => {
  console.log('[TodoForm rerender]')
  // const { addTodo } = useContext(TodoContext)
  const { addTodo } = useTodo()
  const [todoContent, setTodoContent] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!todoContent.trim()) {
      alert('請輸入待辦事項內容')
      return
    }
    addTodo(todoContent.trim())
    setTodoContent('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2"
    >
      <div className="relative">
        <input
          className="px-2 py-1 rounded"
          type="text"
          value={todoContent}
          onChange={e => setTodoContent(e.target.value)}
          placeholder="Type in Somethings ..."
        />
        {todoContent && (
          <span className="absolute -right-2 top-1/2 translate-x-full -translate-y-1/2">
            Press Enter
          </span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default TodoForm
