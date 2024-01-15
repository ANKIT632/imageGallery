import '../css/contact.css';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ContactUs = () => {

  const dispath = useDispatch();

  useEffect(() => {
    dispath({ type: 'CheckDataAvilability', payload: false })
  })

  const navigate = useNavigate()
  const handleRedirect = () => {

    navigate('/');
  }
  const [state, handleSubmit] = useForm("xleyqdoy");

  if (state.succeeded) {
    return (<div className='mainFeedbackContainer'><div className='SuccessFeedbackDivContainer'>
      <h1>Your post send successfully</h1>
      <h2>Thankyou..</h2>
      <button className="btnStyle" onClick={handleRedirect}>Go To Home</button>
    </div> </div>);
  }



  return (
    <div className="container_contact">
      <div className="login-box">
        <h1 id='contectHeader'>ContectUs</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" id='name' placeholder="Enter Your Name"  />
          <input type="email" id="email"
            name="email" placeholder="Email"/>

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <textarea id="message"
            name="message" placeholder="Post message.." />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>Post here</button>
          <button className="btnStyle" onClick={handleRedirect}>Go To Home</button>
        </form>


      </div>

    </div>
  )
}

export default ContactUs;