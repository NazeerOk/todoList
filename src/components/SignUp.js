import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    

    function handleSignUp(){
        localStorage.setItem('user',JSON.stringify({'email':email,'password':password}));
        localStorage.setItem('login',JSON.stringify({login:true}));
        window.history.pushState(null, "homepage", "/"); 
       
    }
    
    return (
        <div>
            <div className='log-form-container'>
                    <section className='log-form'>
                    <form onSubmit={handleSignUp} >
                        <h1 style={{color:"white",marginBottom:"70px"}}>SignUp!</h1>
                        <p className='form-sign-username'>Username</p>
                        <input required className='log-form-input' type="text" placeholder="Enter Name"/>
                        <p className='form-sign-email'>Email address</p>
                        <input required className='log-form-input' placeholder='Enter email' type="text" autoComplete={"username"}  value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <p className='form-sign-password'>Password</p>
                        <input required className='log-form-input' 
                        placeholder='Enter Password' type="password" autoComplete={"current-password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <div className='form-info'>
                        <input required  type='checkbox'/><p style={{marginLeft:'1px'}}>I accept the terms & conditions</p>
                        
                        </div>
                        
                        <p style={{color:"white",fontSize:'small',marginTop:'20px',marginRight:'30px'}}>Have a account?  
                        
                        <Link to='/'>
                        <span style={{cursor:'pointer',color:"white",marginLeft:"10px"}}>Login</span>
                        </Link>

                        </p>
                        <button className='form-button' type="submit">SignUp</button>
                        </form>
                    </section>
                    
                </div>
        </div>
    )
}

export default SignUp

