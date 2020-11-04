import React, { useContext, useState } from 'react'
import {TodoListContext} from '../context/TodoListContext'
import '../App.css'


const TodoForm = () => {
    const {addTask,tasks} = useContext(TodoListContext)
    const [title, setTitle] = useState('')
    
    const handleChange = e => {setTitle(e.target.value)}
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(title)
        setTitle('')
    }
   
   
    return (
        <>
        
            <div className='myTask-header'>
            <h4>My Tasks</h4>
            <i class="fas fa-ellipsis-v"></i>
            </div>
            
            <div className='form-container'>
            {tasks.length===0?
            <>
                <form action="" onSubmit={handleSubmit}>
                <input required className='form-input' placeholder='New Task' type="text" value={title} onChange={handleChange}/>
                <i id='plus' onClick={handleSubmit} class="fa fa-plus-circle" aria-hidden="true"></i>
                </form>
                
                
                
               
            </>
            : 
            <>
                <form onSubmit={handleSubmit} >
                <i onClick={handleSubmit} id='plus' class="fa fa-plus-circle" aria-hidden="true"></i>
                <input required className='form-input-rev' placeholder='Add Task' type="text" value={title} onChange={handleChange}/>
                </form>
                
                
            </>
            }
            </div>  
            
        
       
        
        </>
    )
}

export default TodoForm
