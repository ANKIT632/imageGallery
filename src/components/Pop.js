
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


 const dispatch=useDispatch();
const update=()=>{
 
    setShow(false);
   
  dispatch({type:"GetPOP",payload:false})
  
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
    
    <CloseButton id='closeIcon'  onClick={update}/>
      <Card.Img id='popImg' variant="top" src={url.regular} />
      <Button id='popBtn' variant="success" onClick={handleDownloadClick} > download Image</Button>
      <Card.Body>
     
      <div className="Popbar">
        <div className="Popleft">
        <Col xs={1} md={20}>
          <Image id='Profileimg' src={img} roundedCircle className='ProfileSize'/>
        </Col>
        <div id='popDiv'>
            <div className='PopinnerLeft'>
              <p className='cardName'>{name}</p>
              <p className='NameHandler' style={{color:"gray"}}>{social?.instagram_username && "@"+social?.instagram_username}</p>
            </div>

            <div id='popIcon' className='NameHandler'>
            {social?.instagram_username &&  <AiOutlineInstagram /> }
            {social?.instagram_username && "/"+social?.instagram_username}
         
            {social?.twitter_username &&  <CiTwitter style={{marginLeft:"6px"}}/>}
            {social?.twitter_username && "/"+social?.twitter_username}
            </div>
        </div>
        </div>
        
        <div className="popright" >
        <AiOutlineLike/>
        <p className='likeP'>{likes >= 1000 ? `${(likes / 1000).toFixed(1)}k` : likes}</p> 
        </div>
      </div> 
      </Card.Body>
    </Card>
    </>

  );
  }
  export default POP;