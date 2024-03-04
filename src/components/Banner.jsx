import React from 'react'

export default function Banner({ title, des }) {
  return (
    <div className='TitleCollectionsContainer'>
      <p id='Coll_Banner'>{title}</p>
      <p>{des}</p>
    </div>
  )
}
