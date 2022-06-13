

const reducer = (state,action)=>{
  switch(action.type){
    case 'add':
      return [...state,action?.payload]
    case 'delete':
      return state.filter(todo=>todo.id !== action.payload.id)
    case 'completed':
      return state.map(todo=>todo.id === action.payload.id?{...todo,completed:!todo.completed}:todo)
    case 'edit':
      return state.map(todo=>todo.id === action.payload.id?{...todo,title:action.payload.title}:todo)
    case 'clearCompleted':
      return state.filter(todo=>todo.completed === false)
    default:
      return state
  }
}

export default reducer
