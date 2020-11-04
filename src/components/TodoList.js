import React, { useContext } from 'react'
import { TodoListContext } from '../context/TodoListContext'
import Todo from './TodoListStyling'
import './style.css'
const TodoList = () => {
    const {compTask} = useContext(TodoListContext)
    const {tasks} = useContext(TodoListContext)
    const handleCompTask = () =>{
        if(compTask.length>0){
            return(
                <div className='completed-task'>
                <h4>Completed ({compTask.length})</h4>
                {compTask.map((e)=>{
                   return <>
                   <div className='comp-task'>
                   <i id='comp-tick' class="fas fa-check-circle"></i>
                   <p className='comp-title'>{e}</p>
                   
                   
                   </div>
                   
                   </>
                })}
                
                
            </div>
            )
            
        }
    }
    return (
        <div>
            <ul>
                {tasks.map((e)=>{
                    return <Todo task={e} key={e.id}/>
                })}
            </ul>
            {handleCompTask()}
        </div>
    )
}

export default TodoList
