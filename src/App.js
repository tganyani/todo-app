import {useReducer,useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import './App.css';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'

import TodoContext from './context/todoContext'
import AllTodos from './components/allTodos'
import TopBar from './components/topBar'
import  BottomBar from './components/bottomBar'
import reducer from './reducers/todoReducer'
import ComplitedTodos from './components/completedTodos'
import ActiveTodos from './components/activeTodos'


const initialState = [
    {
    id:'1',
    title:'Тестовое Задание',
    completed:false
  },
  {
  id:'2',
  title:'Прекрасный Код',
  completed:false
  },
  {
  id:'3',
  title:'Покрытие Тестами',
  completed:true
},{
id:'4',
title:'Тестовое Задание',
completed:false
},
{
id:'5',
title:'Прекрасный Код',
completed:true
},
{
id:'6',
title:'Покрытие Тестами',
completed:false
},{
id:'7',
title:'Тестовое Задание',
completed:true
},
{
id:'8',
title:'Прекрасный Код',
completed:false
},
{
id:'8',
title:'Покрытие Тестами',
completed:false
},
{
id:'10',
title:'Тестовое Задание',
completed:false
},
{
id:'11',
title:'Прекрасный Код',
completed:false
},
{
id:'12',
title:'Покрытие Тестами',
completed:true
}
]



function App() {
  const [todos, dispatch] = useReducer(reducer,initialState)
  const [searchTerm,setSearchTerm] = useState('')

  return (
    <div style={{display:'flex',flexFlow:'row nowrap',justifyContent:'center'}}>
      <TodoContext.Provider value={{todos, dispatch,searchTerm,setSearchTerm}} >
      <Box
          className='box'
         sx={{
           backgroundColor: 'pink',
           display:'flex',
           flexFlow:'row nowrap',
           justifyContent:'center',
           marginTop:'20px',
           '&:hover': {
             opacity: [0.9, 0.8, 0.7],
           },
         }}
       >
        <Paper variant="elevation" className='paper'  elevation={8} sx={{width:'95%',hieght:'60vh'}} >
        <Typography variant="h2" align="center" style={{color:'pink'}} component="div">todos</Typography>
          <TopBar/>
          <Router>
            <div style={{height: '500px',overflowY: 'scroll'}}>
            <Routes>
              <Route path='/' element={<AllTodos/>}/>
              <Route path='/active' element={<ActiveTodos/>}/>
              <Route path='/completed' element={<ComplitedTodos/>}/>
            </Routes>
            </div>
            <BottomBar/>
          </Router>
        </Paper>
       </Box>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
