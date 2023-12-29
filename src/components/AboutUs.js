/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAboutPhoto } from '../action/action'
import '../css/about.css'
import Footer from '../components/Footer'

export default function Community() {

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getAboutPhoto());

  }, [])

  const mode = useSelector((state => state.mode))
  const photo = useSelector((state => state.aboutPhoto));


  const navigate = useNavigate()
  const handleRedirect = () => {

    navigate('/');
  }



  return (

    <div className={mode ? 'Light AboutMainContainer' : 'Dark AboutMainContainer'}>
      <div className='AboutContainer1'>
        <div className='textContainer'>
          <h1>Photos for everyone</h1>
          <p>Over 3 million free high-resolution images brought to you by the world’s most generous community of photographers.</p>

          <button className="btnStyle" style={{ backgroundColor: "black" }} onClick={handleRedirect}>Start browsing</button>
          <br />
          <button className="btnStyle">collections</button>
        </div>

        <div className='MainImageContainer'>
          <div className='ImgContainer1'>
            <img className='img4x' src={photo[0]} alt='img' />
            <img className='img4x' src={photo[1]} alt='img' />
          </div>
          <div className='ImgContainer2'>
            <img className='img4x' src={photo[3]} alt='img' />
            <img className='img4x' src={photo[4]} alt='img' />
          </div>
        </div>
      </div>
      <br />
      <h2>Image Gallery is internet’s source of freely usable images.</h2>
      <br />

      <div className='AboutContainer2'>
        <div className='Img3x'>
          <img src={photo[9]} alt='img' />

          <h5>Over three million curated photos</h5>
          <p>We hand-select every photo and accept only the best, so that no matter what you need—you’ll find exactly what you’re looking for on Unsplash</p>
        </div>

        <div className='Img3x'>
          <img src={photo[5]} alt='img' />
          <h5>A community of 293,995 photographers</h5>
          <p>Unsplash is home to a growing community of photographers—from hobbyists, professionals, emerging brands and everyone in between.</p>
        </div>

        <div className='Img3x'>
          <img src={photo[6]} alt='img' />
          <h5>
            Fuelling your favourite platforms</h5>
          <p>With partners like BuzzFeed, Squarespace and Trello being powered by our API, the Unsplash library is more widely accessible than ever.</p>
        </div>
      </div>
      <br />
      <div className='AboutContainer3'>


        <img src={photo[7]} alt='img' />
        <div>
          <h3>Is it really free? Yes.</h3>
          <p>Unsplash is a platform powered by an amazing community that has gifted hundreds of thousands of their own photos to fuel creativity around the world. So sign up for free, or don’t. Either way, you’ve got access to over 3 million photos under the Unsplash license—which makes them free to do-whatever-you-want with.

          </p>


        </div>

      </div>
      <br />
      <Footer />
    </div>

  )
}
