import React from 'react'
import '../css/footer.css'
import gmail from '../icons/gmail.png'
import facebook from '../icons/facebook.png'
import linkedIn from '../icons/linkedIn.png'
import { memo } from 'react'
import { useSelector } from 'react-redux'

const handleLinkedInClick = () => {
  window.open('https://www.linkedin.com/in/ankit-kumar-gupta-69537b228/', '_blank'); // Replace 'your-profile-url' with your LinkedIn profile URL
};



function Footer() {

  const mode = useSelector((state) => state.mode);

  return (
    <>
      {console.log("Navcall")}
      <div className='FooterDiv'  style={!mode?{backgroundColor:"black"}:{}}>
        <div className='InnerDiv'>
          <img className="footerIcon" src={gmail} alt=' ' />
          <img className="footerIcon" src={facebook} alt=' ' />
          <img className="footerIcon" src={linkedIn} alt=' ' onClick={handleLinkedInClick}/>
        </div>

        <div className='EleDiv' >

          <p className='MoveIcon'>Image Gallery</p>
          <p className='footerText nameMoveIcon'>developed by Ankit Gupta</p>
          <p className='footerCR'>copyright &copy;{new Date().getFullYear()} </p>

        </div>

      </div>
    </>
  )
}

export default memo(Footer);