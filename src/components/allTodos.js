import {useContext,useState} from 'react'
import TodoContext from '../context/todoContext'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import {FormControlLabel,FormGroup,Checkbox} from '@mui/material'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


function AllTodos(){
  const {todos,dispatch,searchTerm} = useContext(TodoContext)
  const [open, setOpen] = useState(false);
  const [Title_,setTitle] = useState('')
  const [Id,setId] = useState('')

 const handleClickOpen = (e) => {
   setOpen(true);
   setId(e.currentTarget.id)
   const todoToEdit = todos.filter(todo=>todo.id===e.currentTarget.id)
   setTitle(todoToEdit[0].title)
 };

 const handleClose = () => {
   setOpen(false);
 };
 const handleEditTodo =(e)=>{
   dispatch({type:'edit',payload:{
     id:Id,
     title:Title_
   }})
   setOpen(false)
 }
  return(
    <div>
    {todos.filter(todo=>todo.title.toLowerCase().includes(searchTerm.toLowerCase())).map(todo=>(
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
           className =  {(todo.completed === true)?'cancelled':''}
           />
         </FormGroup>
         <div style={{width:'100px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
           <EditIcon id = {todo.id} style={{fontSize:'35px'}} onClick={(e)=>handleClickOpen(e)}/>
           <DeleteIcon id = {todo.id} onClick ={(e)=>dispatch({type:'delete',payload:{
             id:e.currentTarget.id
           }})}
            style={{fontSize:'35px',color:'red'}}
           />
         </div>
        </div>
        <Divider light />
      </div>
    ))}
    <Dialog
       open={open}
       onClose={handleClose}
     >
       <DialogTitle >
         Are you sure ,you want to edit todo?
       </DialogTitle>
       <form>
          <TextField sx={{marginBottom:'10px',marginLeft:'10%',width:'300px'}} size='small'  id="outlined-basic" label="edit todo" variant="outlined" value={Title_} onChange={e=>setTitle(e.currentTarget.value)} />
       </form>
       <DialogActions>
         <Button onClick={handleClose}>Cancel</Button>
         <Button onClick={e=>handleEditTodo(e)} autoFocus>
           Edit
         </Button>
       </DialogActions>
     </Dialog>
    </div>
  )
}


export default AllTodos
