import React from 'react'
import '../css/footer.css'
import gmail from '../icons/gmail.png'
import facebook from '../icons/facebook.png'
import linkedIn from '../icons/linkedIn.png'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const handleLinkedInClick = () => {
  window.open('https://www.linkedin.com/in/ankit-kumar-gupta-69537b228/', '_blank'); // Replace 'your-profile-url' with your LinkedIn profile URL
};




function Footer() {
  const navigate=useNavigate();

  const IsDataAvilable=useSelector((state=>state.IsDataAvilable));
console.log(IsDataAvilable);
  const mode = useSelector((state) => state.mode);

  if(IsDataAvilable) return (
    <>
      {console.log("Footercall")}
      <div className='FooterDiv'  style={!mode?{backgroundColor:"black"}:{}}>
        <div className='InnerDiv'>
          <img className="footerIcon" src={gmail} alt=' ' onClick={()=>navigate("/contactUs")}/>
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

  else{
    return(<></>)
  }
}

export default memo(Footer);