import WorkingGif from "./WorkingGif"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function Explore() {
  const mode = useSelector((state => state.mode));
  const navigate = useNavigate();

  const dispath = useDispatch();

  useEffect(() => {
    dispath({ type: 'CheckDataAvilability', payload: false })
  })
  const handleRedirect = () => {


    navigate('/');
  }
  return (
    <div className={mode ? 'Light gifStyle' : 'Dark gifStyle'} >
      <WorkingGif />

      <p className='gifFontStyle'>Still in Development..</p>
      <button className="btnStyle" onClick={handleRedirect}>Go To Home</button>
    </div>
  )
}
