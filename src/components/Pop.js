
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { AiOutlineLike,AiOutlineInstagram} from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
import '../css/singleCard.css';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import CloseButton from 'react-bootstrap/CloseButton';
import '../css/pop.css'

function POP(props) {
const {
name,
likes,
social,
img,
url,
setShow,
downloadUrl
}=props;

const val=useSelector((state)=>state.showPop);
 const dispatch=useDispatch()
const update=()=>{
  if(val===1){
    setShow(false);
   
  dispatch({type:"GetPOP",payload:0})
  }
}

const handleDownloadClick = () => {
  const imageUrl = downloadUrl;
  console.log(imageUrl);

  fetch(imageUrl)
    .then((response) => response.blob())
    .then((imageBlob) => {
      const url = URL.createObjectURL(imageBlob);
      const link = document.createElement('a');
      link.href = url;

      link.download = 'image.jpg';

      link.click();

    })
    .catch((error) => {
      console.error('Error downloading image:', error);
      
    });
};

const mode=useSelector((state)=>state.mode);
  return (
    <>
          
    <Card  id='pop'  style={mode ?  { backgroundColor: "white", color: "black" }:{ backgroundColor: "black", color: "white" }} >
    <CloseButton style={{position:"fixed", left:"45rem", backgroundColor:"white", borderRadius:"50%" ,top: "-7px"}} onClick={update}/>
      <Card.Img id='popImg' variant="top" src={url.regular} />
      <Button id='popBtn' variant="success" onClick={handleDownloadClick} > download Image</Button>
      <Card.Body>
     
      <div className="Popbar">
        <div className="Popleft">
        <Col xs={1} md={20}>
          <Image  src={img} roundedCircle />
        </Col>
            <div className='PopinnerLeft'>
              <p>{name}</p>
              <p style={{color:"gray"}}>{social?.instagram_username &&social?.instagram_username}</p>
            </div>

            <div id='popIcon'>
            {social?.instagram_username &&  <AiOutlineInstagram/> }
            {social?.instagram_username && "/"+social?.instagram_username}
            {"  "}
            {social?.twitter_username &&  <CiTwitter/>}
            {social?.twitter_username && "/"+social?.twitter_username}
            </div>
        </div>
        
        <div className="popright" >
        <AiOutlineLike/>
        <p>{likes >= 1000 ? `${(likes / 1000).toFixed(1)}k` : likes}</p> 
        </div>
      </div> 
      </Card.Body>
    </Card>
    </>

  );
  }
  export default POP;