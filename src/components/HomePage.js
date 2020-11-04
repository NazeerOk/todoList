import React from 'react'
import TodoListContextProvider from '../context/TodoListContext'
import Header from './Header'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import '../App.css'

const HomePage = () => {
    return (
        <TodoListContextProvider>
            <Header/>
            <div className='container'>
                <TodoForm/>
                 <TodoList/>
             </div>
       
     </TodoListContextProvider>
    )
}

export default HomePage

