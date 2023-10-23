
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { AiOutlineLike } from 'react-icons/ai';
import '../css/singleCard.css';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

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

const mode=useSelector((state)=>state.mode);
  return (
    <>
    <Card className='singleCardContainer'   style={mode ?  { backgroundColor: "white", color: "black" }:{ backgroundColor: "black", color: "white"  }}  onClick={update}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
       
      <div class="bar" >
        <div class="left">
        <Col xs={1} md={20}>
          <Image src={img} roundedCircle />
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