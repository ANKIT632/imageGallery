import React from 'react'
import FrontView from '../components/FrontView'
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import AllFavIcon from '../icons/mark.png'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const mode = useSelector((state) => state.mode);

  const navigate = useNavigate();

  const handleFav = () => {
    navigate('/favCollection');
  }


  return (

    <div id='Home' style={mode ? { backgroundColor: "white", } : { backgroundColor: "#1d1c1c", }}>
      <div style={{ position: 'fixed', backgroundColor: 'black', width: '40px', height: '40px', alignItems: 'center', display: 'flex', justifyContent: 'center', border: '1px solid black', borderRadius: '30%', right: "1%", marginTop: '15px', boxShadow: '0px 0px 5px 2px white', cursor: 'pointer',zIndex:"50" }}>
        <img src={AllFavIcon} alt='icon' style=
          {{ width: '20px' }} onClick={handleFav} />
      </div>
      <FrontView />
      <Card />
    </div>
  )
}
