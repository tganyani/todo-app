import {useContext} from 'react'
import {Link} from 'react-router-dom'

import TodoContext from '../context/todoContext'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';


function BottomBar(){
  const {todos,dispatch} = useContext(TodoContext)
  return(
    <div className='footer' >
      <Typography className='active-todos' variant="subtitle1"  component="div">{todos.filter(todo=>todo.completed === false).length} items left</Typography>
      <Link  to='/'><Button className='footer-btn' variant="contained" >All</Button></Link>
      <Link to='active'><Button className='footer-btn' variant="contained" >Active</Button></Link>
      <Link to='completed'><Button className='footer-btn' variant="contained" >Completed</Button></Link>
      <Button className='footer-btn'  variant="contained" sx={{backgroundColor:'red'}} onClick={()=>dispatch({type:'clearCompleted'})} >Clear completed</Button>
    </div>
  )
}

export default BottomBar
