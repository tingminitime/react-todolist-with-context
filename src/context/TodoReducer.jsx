export const initState = {
  todoList: [],
}

export const ACTIONS = {
  INIT_TODO: 'INIT_TODO',
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
}

const TodoReducer = (state, action) => {
  const { type, payload } = action
  console.log('[TodoReducer]type', type)
  console.log('[TodoReducer]payload', payload)

  // CRUD 邏輯集中在 TodoContext
  switch (type) {
    case ACTIONS.INIT_TODO:
      return {
        ...state,
        todoList: payload.todoList,
      }
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todoList: payload.todoList,
      }
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todoList: payload.todoList,
      }
    case ACTIONS.UPDATE_TODO:
      return {
        ...state,
        todoList: payload.todoList,
      }
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todoList: payload.todoList,
      }
    default:
      return state
  }
}

export default TodoReducer
