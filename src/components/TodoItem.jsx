import { useContext, useEffect, useRef, useState } from 'react'
// import { TodoContext } from '@/context/TodoContext'
import useTodo from '@/hooks/useTodoContext'
import useClickOutside from '@/hooks/useClickOutside'

const TodoItem = ({ todoItem }) => {
  console.log('[TodoItem rerender]')
  // const { toggleTodo, deleteTodo } = useContext(TodoContext)
  const { toggleTodo, updateTodo, deleteTodo } = useTodo()
  const editRef = useRef(null)
  const editConfirmRef = useRef(null)
  const [showEditInput, setShowEditInput] = useState(false)

  const onEditInputConfirm = e => {
    if (e.keyCode !== 13 && !editConfirmRef?.current?.contains(e.target)) return

    if (!editRef.current.value.trim()) {
      alert('請輸入編輯待辦事項內容')
      editRef.current.value = todoItem.todoContent
      editRef.current.focus()
      return
    }

    updateTodo(todoItem.id, editRef.current.value.trim())
    setShowEditInput(false)
  }

  const handleClickOutside = e => {
    if (
      !editConfirmRef?.current?.contains(e.target) &&
      !editRef?.current?.contains(e.target)
    ) {
      setShowEditInput(false)
    }
  }

  useEffect(() => {
    console.log('[useEffect]showEditInput')
    if (editRef.current) {
      editRef.current.value = todoItem.todoContent
    }
  }, [showEditInput])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className="flex flex-col mb-3">
      <div className="relative">
        <p
          className={`mb-2 line-clamp-1 ${
            todoItem.completed && 'line-through'
          } ${showEditInput && 'invisible'}`}
          onDoubleClick={() => setShowEditInput(true)}
        >
          {todoItem.todoContent}
        </p>
        {showEditInput && (
          <input
            className="absolute left-0 -top-1 px-1 py-1 w-full rounded"
            type="text"
            ref={editRef}
            autoFocus
            onKeyDown={onEditInputConfirm}
          />
        )}
      </div>
      <div className="flex gap-2">
        {!showEditInput ? (
          <>
            <button
              type="button"
              className="px-2 py-1 rounded bg-green-500 hover:bg-green-600"
              onClick={() => toggleTodo(todoItem.id)}
            >
              {todoItem.completed ? 'Cancel' : 'Complete'}
            </button>
            <button
              type="button"
              className="px-2 py-1 rounded bg-red-500 hover:bg-red-600"
              onClick={() => deleteTodo(todoItem.id)}
            >
              Delete
            </button>
          </>
        ) : (
          <button
            type="button"
            className="px-2 py-1 rounded bg-blue-500 hover:bg-blue-600"
            ref={editConfirmRef}
            onClick={onEditInputConfirm}
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  )
}

export default TodoItem
