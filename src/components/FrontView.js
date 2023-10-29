import React from 'react'
import '../css/frontView.css'
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchUpdateData } from '../action/action';

export default function FrontView() {

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 788);
  const placeholderText = isMobileView ? 'Search high resolution Images' : 'Search high resolution Images, categories, wallpapers';
  const dispatch = useDispatch();
  const update = (e) => {
    dispatch(searchUpdateData(e.target.value));
}
  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth < 788);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='containerX'>

      <h3 id="FrontHead">Download High Quality Images by creators</h3>
      <p id='frontp'>Over 2.4 million+ stock Images by our talented community</p>  
      <input id="FrontSearchBar" type='text' placeholder={placeholderText}  onChange={update}/>

    </div>
  )
}