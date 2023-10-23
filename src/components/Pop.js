
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { AiOutlineLike } from 'react-icons/ai';
import '../css/singleCard.css';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import CloseButton from 'react-bootstrap/CloseButton';


function POP(props) {
const {
name,
likes,
tag,
img,
url,
setShow,
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
  try {
    // Create a new canvas element
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    // Draw the image onto the canvas
    context.drawImage(url.current, 0, 0);

    // Convert the canvas to a data URL
    const dataURL = canvas.toDataURL('image/jpeg');

    // Create a link element and download the data URL as an image
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'image.jpg'; // Specify the default filename
    link.click();
  } catch (error) {
    console.error('Error downloading image:', error);
  }
};

const mode=useSelector((state)=>state.mode);
  return (
    <>
          
    <Card  id='pop'  style={mode ?  { backgroundColor: "white", color: "black" }:{ backgroundColor: "black", color: "white" }} >
    <CloseButton style={{position:"fixed", left:"34rem", backgroundColor:"white", borderRadius:"50%" ,top: "-7px"}} onClick={update}/>
      <Card.Img id='popImg' variant="top" src={url} />
      <Button id='popBtn' variant="success" onClick={handleDownloadClick} > download Image</Button>
      <Card.Body>
     
      <div class="bar" >
        <div class="left">
        <Col xs={1} md={20}>
          <Image  src={img} roundedCircle />
        </Col>
            <div className='innerLeft'>
              <p>{name}</p>
              <p style={{color:"gray"}}>@{tag}</p>
            </div>
        </div>
        
        <div class="right" >
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