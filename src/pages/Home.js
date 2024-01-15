import React from 'react'
import FrontView from '../components/FrontView'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

export default function Home() {
  const mode = useSelector((state) => state.mode)
  return (

    <div id='Home' style={mode ? { backgroundColor: "white" } : { backgroundColor: "#1d1c1c" }}>

      <FrontView />
      <Card />
    </div>
  )
}
 