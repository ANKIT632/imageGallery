import React from 'react'
import loader from '../gif/loading.gif'

export default function Load() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={loader} alt="Loading..." />
    </div>
  )
}