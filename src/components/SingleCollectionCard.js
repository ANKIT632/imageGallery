import React from 'react'
import '../css/SingleCollectionCard.css'
import photoIcon from '../icons/PhotoIcon.png'
import { useNavigate } from 'react-router-dom'


export default function SingleCollectionCard(props) {

  const navigate = useNavigate();

  const collectionPhotoHandler = () => {

    navigate(`/CollectionsPhoto/${props.id}/${props.TotalPhoto}`);
  }

  return (
    <div className='mainSingleCollectionContainer'>

      <div className='CollectionsViewContainer' onClick={collectionPhotoHandler}>
        <div className='InnerViewContainer1'>

          <div className='subInnerViewContainer1'>

            <div id='collectionIconContainer'>
              <img id='CollectionIcon' alt='img' src={photoIcon} />
              <p id='CollectionCount'>{props.TotalPhoto - 10 + "+"}</p>
            </div>

            <img className='CollectionImg' alt='Img1' src={props.PreViewPhoto[1]?.urls?.small} />
          </div>
          <div className='subInnerViewContainer2'>
            <img className='CollectionImg' alt='Img1' src={props.PreViewPhoto[2]?.urls?.small} />
          </div>
          <div className='subInnerViewContainer3'>
            <img className='CollectionImg' alt='Img1' src={props.PreViewPhoto[3]?.urls?.small} />
          </div>
        </div>

        <div className='InnerViewContainer2'>
          <img className='CollectionImg' alt='Img1' src={props.PreViewPhoto[0]?.urls?.small} />
        </div>


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
