import React, { createContext,useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TodoListContext  = createContext()


const TodoListContextProvider = (props) => {
    const [compTask, setCompTask] = useState([])
    const [tasks, setTasks] = useState([])
    
    
    
    const addTask = (title,details) =>{
        setTasks([...tasks,{title,id:uuidv4(),details}])
    }
    
    const removeTask = (id)=>{
        setTasks([...tasks.filter(task => task.id!==id)])
    }

    const editTask = (id,description,date) => {
        setTasks(tasks.map(e=>e.id === id ? {...e, details:description,date}:e))
    }
    
   
    const completedTask = (id) =>{
        setTasks([...tasks.filter(task => task.id!==id)])
        const value = tasks.find(task => task.id === id)
        setCompTask([...compTask,value.title])
        
    }
    
    
    return (
        <TodoListContext.Provider value={{tasks,addTask,removeTask,completedTask,compTask,editTask,
        }}>
                {props.children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider
