import {useState,useContext} from 'react'
import { v4 as uuid } from 'uuid';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import TodoContext from '../context/todoContext'

function TopBar(){
  const [todoTitle, setTodoTitle] = useState('')
  const {dispatch,searchTerm,setSearchTerm} = useContext(TodoContext)


  const handleAddTodo = ()=>{
    dispatch({
      type:'add',
      payload:{
        id:uuid(),
        title:todoTitle,
        completed:false
      }
    }
  )
  setTodoTitle('')
  }
  return(
    <div className="top-bar-main" style={{display:'flex',justifyContent:'space-between'}}>
      <div className="top-bar">
        <TextField className="top-bar-input" sx={{marginBottom:'10px'}} size='small' id="outlined-basic" label="Add Todo" variant="outlined" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/>
        <Button  style={{marginBottom:'20px',marginRight:'30px',marginLeft:'30px'}} variant="contained" onClick = {()=>handleAddTodo()}>Add </Button>
      </div>
      <div className="top-bar">
        <TextField className="top-bar-input" sx={{marginBottom:'10px'}} size='small' id="outlined-basic" label="search" variant="outlined" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} />
        <SearchIcon style={{fontSize:'35px',marginRight:'10%',marginLeft:'30px'}}/>
      </div>
    </div>
  )
}

export default TopBar
