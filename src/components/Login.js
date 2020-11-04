import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

import HomePage from './HomePage'
function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const initialState = JSON.parse(localStorage.getItem('login'))
    const [user,setUser] = useState(initialState.login)
    
    

    function handleLogin(e){
        e.preventDefault()
        const details = JSON.parse(localStorage.getItem('user'))
        if(email===details.email && password === details.password){
            return setUser(true)
        }
        else{
            setError( "Email and Password is wrong")
            setUser(false)
        }
        
     }

    
    return (
        <div>
            {user?
            (
                <HomePage/>
            )
             : 
            
            (
                <div className='log-form-container'>
                    <section className='log-form'>
                    <form onSubmit={handleLogin} >
                        <h1 style={{color:"white",marginBottom:"70px"}}>Login!</h1>
                        <p className='form-email'>Email address</p>
                        <input className='log-form-input' placeholder='Enter email' type="text" autoComplete={"username"}  value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <p className='form-password'>Password</p>
                        <input className='log-form-input' 
                        placeholder='Enter Password' type="password" autoComplete={"current-password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <div className='form-info'>
                        <input type='checkbox'/><p style={{marginLeft:'1px'}}>Remember me</p>
                        <p style={{marginLeft:'100px'}}>Forgot Password?</p>
                        </div>
                        <div style={{color:"black",fontSize:'small',height:'5px',margin:'15px'}}>
                            <h3 style={{fontWeight:'bold'}}>{error}</h3>
                        </div>
                        <p style={{color:"white",fontSize:'small',marginTop:'20px',marginRight:'30px'}}>Don't have a account?  
                        
                        <Link to='/signup'>
                        <span style={{cursor:'pointer',color:"white",marginLeft:"10px"}}>Sign Up</span> 
                        </Link>
                        </p>
                        <button className='form-button' type="submit">Log in</button>
                        </form>
                    </section>
                    
                </div>

            )
        
        }
            
            
        </div>
    )
    
}


export default Login
