import React from 'react';
import WorkingGif from './WorkingGif';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Collection() {

  const mode=useSelector((state=>state.mode));
  const navigate = useNavigate();
  const handleRedirect = () => {

    navigate('/');
  }


  return (
    <div className={mode ?'Light gifStyle':'Dark gifStyle'} >
      <WorkingGif />
      <p className='gifFontStyle'>Still in Development..</p>
      <button className="btnStyle" onClick={handleRedirect}>Go To Home</button>
    </div>
  )
}
