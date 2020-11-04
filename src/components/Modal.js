import React from 'react'
import './style.css'
import ReactDOM from 'react-dom'

function Modal({open,children}) {
    
    if(!open) return null
    return ReactDOM.createPortal(
            <>
            <div className='overlay'>
                <div className="modal">
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal
