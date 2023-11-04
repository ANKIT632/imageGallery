import React from 'react'
import '../css/footer.css'
import gmail from '../icons/gmail.png'
import facebook from '../icons/facebook.png'
import linkedIn from '../icons/linkedIn.png'

import { memo } from 'react'

function Footer() {
  return (
    <>
      {console.log("call")}
      <div className='FooterDiv'>
        <div className='InnerDiv'>
          <img className="footerIcon" src={gmail} alt=' ' />
          <img className="footerIcon" src={facebook} alt=' ' />
          <img className="footerIcon" src={linkedIn} alt=' ' />
        </div>

        <div className='EleDiv'>

          <p className='MoveIcon'>Image Gallery</p>
          <p className='footerText nameMoveIcon'>developed by Ankit Gupta</p>
          <p className='footerCR'>copyright &copy;{new Date().getFullYear()} </p>

        </div>

      </div>
    </>
  )
}

export default memo(Footer);