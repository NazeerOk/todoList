import React, { useContext, useState } from 'react'
import {TodoListContext} from '../context/TodoListContext'
import Modal from './Modal'
import './style.css'


const Todo = ({task}) =>{
    const {removeTask} = useContext(TodoListContext)
    const {completedTask} = useContext(TodoListContext)
    const {editTask} = useContext(TodoListContext)
    const [details, setDetails] = useState('')
    const [isOpen,setIsopen] = useState(false)
    const [date,setDate] = useState('')
    const [dateStyle,setDateStyle] = useState(true)
    const modalSubmit =(e)=>{
        e.preventDefault()
        setIsopen(false)
        editTask(task.id,details,date)
    }
    
    
   
    return(
        <>
        
        <div>
            <Modal open={isOpen}>
                
                <div className='modal-form'>
                <div className='modal-header'>
                <i onClick={()=> removeTask(task.id)} class="fas fa-trash"></i>
                <i class="fas fa-times" onClick={()=>setIsopen(false)}></i>
                </div>
                <h2 className='modal-taskTitle'>{task.title}</h2>
                
                <form action="" onSubmit={modalSubmit}>
                    <textarea className='modal-details' required placeholder='Add details' type="textarea" onChange={(e)=>setDetails(e.target.value)} />
                    {dateStyle? <p className='modal-date' onClick={()=> setDateStyle(false)}>Add date</p>: <input className='modal-date' required type='date' onChange={(e)=>{setDate(e.target.value)}}/>}
                    
                    <p className='modal-text'>Move to another list</p>
                    <button className='modal-submitButton' onClick={modalSubmit}>Add</button>
                </form>
                </div>
                
                
                
            </Modal>

            <li className='form-li'>
            
            
            <i id='check-button' onClick={()=>completedTask(task.id)}  class="far fa-circle"></i>
                <span style={{fontSize:'20px'}}>{task.title}</span>
                <i id='check-edit' class="fas fa-pen" onClick={(e)=> {e.preventDefault(); setIsopen(true)}}></i>
                
                
            </li>
            <div className='add-details'>
                <p>{task.details}</p>
                <p className='add-date'>{task.date}</p>
            </div>
        </div>
        </>
    )
    
}

export default Todo