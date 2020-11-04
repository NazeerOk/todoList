import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'
import logo from '../components/logo.png'


class Header extends Component{
    
    state={
        imgSrc:''
    }
    componentDidMount(){
        axios.get(`https://picsum.photos/id/${Math.floor(Math.random(1)*100)}/info`).then(
            res => {
                this.setState({imgSrc: res.data.download_url})
            }
        )
    }
    render(){
        function handlerLogout(e){
            localStorage.setItem('login',JSON.stringify({login:false}));
            window.location.reload();
           
        }
        
        return(
            <div className="header">
                <img className='header-logo' src={logo} alt=""/>
                <h1 className='header-title'>TasksBoard</h1>
                <img style={{cursor:"pointer"}} onClick={handlerLogout} className='header-image' src={this.state.imgSrc} alt=""/>
            </div>
        )
    }
}

export default Header
