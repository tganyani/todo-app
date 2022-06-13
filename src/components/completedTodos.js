
import {useContext} from 'react'
import TodoContext from '../context/todoContext'

import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import {FormControlLabel,FormGroup,Checkbox} from '@mui/material'


function ComplitedTodos(){
  const {todos,dispatch,searchTerm} = useContext(TodoContext)
  return(
    todos.filter(todo=>todo.completed === true).filter(todo=>todo.title.toLowerCase().includes(searchTerm.toLowerCase())).map(todo=>(
    <div key ={todo.id}>
      <Divider />
      <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <FormGroup>
         <FormControlLabel
         control={<Checkbox
           id = {todo.id}
           checked ={todo.completed}
           onChange = {
           (e)=>dispatch({type:'completed',payload:{
           id:e.currentTarget.id
         }})} />}
         label={todo.title}
         />
       </FormGroup>
       <div style={{width:'100px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
         <DeleteIcon id = {todo.id} onClick ={(e)=>dispatch({type:'delete',payload:{
           id:e.currentTarget.id
         }})}
         style={{fontSize:'35px',color:'red'}}
         />
       </div>
      </div>
      <Divider light />
    </div>
  )
  )
)
}

export default ComplitedTodos
