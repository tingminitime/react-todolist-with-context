// 新增、刪除邏輯都在這邊做
import { createContext, useContext, useReducer } from 'react'
import TodoReducer, { initState, ACTIONS } from './TodoReducer'

// 建立 todo context，匯出給需要用到這個 context 的元件使用 (useContext)
export const TodoContext = createContext(initState)

const addTodoItem = todoContent => {
  return {
    id: Date.now(),
    todoContent,
    completed: false,
  }
}

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState)

  const initTodo = () => {
    dispatch({
      type: ACTIONS.INIT_TODO,
      payload: {
        todoList: JSON.parse(localStorage.getItem('state')),
      },
    })
  }

  // 新增 TodoItem
  const addTodo = todoContent => {
    const todoItem = addTodoItem(todoContent)
    const newTodoList = [...state.todoList, todoItem]

    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        todoList: newTodoList,
      },
    })
  }

  // 完成/取消完成 TodoItem
  const toggleTodo = todoId => {
    const newTodoList = state.todoList.map(todoItem => {
      return {
        ...todoItem,
        completed:
          todoItem.id === todoId ? !todoItem.completed : todoItem.completed,
      }
    })

    dispatch({
      type: ACTIONS.TOGGLE_TODO,
      payload: {
        todoList: newTodoList,
      },
    })
  }

  // 更新 TodoItem
  const updateTodo = (todoId, newTodoContent) => {
    const newTodoList = state.todoList.map(todoItem => {
      return {
        ...todoItem,
        todoContent:
          todoItem.id === todoId ? newTodoContent : todoItem.todoContent,
      }
    })

    dispatch({
      type: ACTIONS.UPDATE_TODO,
      payload: {
        todoList: newTodoList,
      },
    })
  }

  // 刪除 TodoItem
  const deleteTodo = todoId => {
    const newTodoList = state.todoList.filter(todoItem => {
      return todoItem.id !== todoId
    })

    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: {
        todoList: newTodoList,
      },
    })
  }

  // 被 TodoProvider 包住的元件可以使用 values 的東西
  const values = {
    initState,
    todoList: state.todoList,
    initTodo,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
  }

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}
