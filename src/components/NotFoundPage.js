import React from 'react'
import NotFound from '../image/404.png'
import '../css/page404.css'
import { useNavigate } from 'react-router-dom'
export default function NotFoundPage() {

    
    const navigate = useNavigate();
    return (
        <div className='page404'>
            <img className="page404Image" src={NotFound} alt='page Not found' />
            <p className='font404'>Page Not Found</p>
            <button className='btnStyle' onClick={() => navigate('/')}>Go to Home</button>

        </div>
    )
}
