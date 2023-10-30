import React from 'react'
import WorkingGif from './WorkingGif'
import { useNavigate } from 'react-router-dom';

export default function Community() {
  
    const navigate =useNavigate()
    const handleRedirect = () => {
    
        navigate('/');
      }
  return (
    <div className='gifStyle'><WorkingGif/>
    <p  className='gifFontStyle'>working On progress..</p>
    <button className="btnStyle" onClick={handleRedirect}>Go To Home</button>
    </div>
    
  )
}
