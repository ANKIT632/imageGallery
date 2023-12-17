import React from 'react'
import '../css/SingleCollectionCard.css'
import photoIcon from '../icons/PhotoIcon.png'


export default function SingleCollectionCard(props) {
  return (
    <div className='mainSingleCollectionContainer'>
    
      <div className='CollectionsViewContainer'>
        <div className='InnerViewContainer1'>
          <div className='subInnerViewContainer1'>
            <img className='CollectionImg' alt='Img1' src={props.PreViewPhoto[1]?.urls?.small} />
          </div>
          <div className='subInnerViewContainer2'>
            <img className='CollectionImg' alt='Img1' src={props.PreViewPhoto[2]?.urls?.small} />
          </div>
        </div>

        <div className='InnerViewContainer2'>
          <img className='CollectionImg' alt='Img1' src={props.PreViewPhoto[0]?.urls?.small} />
        </div>
        <img id='CollectionIcon' alt='img' src={photoIcon} />
        <p id='CollectionCount'>{props.TotalPhotot - 10 + "+"}</p>
      </div>

      <div className='CollectionDescriptionContainer'>
        <h6 className='NameHeadingClass'>{props.title}</h6>
        <h6 className='CollctionUserName NameHeadingClass'>Created By : {props.userName} </h6>
        <div >
          <button id='tagBtn' disabled >{props.tag[0].title} </button>
          <button id='tagBtn' disabled >{props.tag[1].title} </button>
          <button id='tagBtn' disabled >{props.tag[2].title} </button>
        </div>
      </div>
    </div>
  )
}
 