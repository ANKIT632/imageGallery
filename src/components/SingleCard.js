
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { AiOutlineLike } from 'react-icons/ai';
import '../css/singleCard.css';
import { useSelector } from 'react-redux';
import { memo, useEffect, useState } from 'react';
import Pop from './Pop';
import { useDispatch } from 'react-redux';

function SingleCard(props) {
const {
name,
likes,
tag,
img,
url

}=props;



const[show,setShow]=useState(false);
const val=useSelector((state)=>state.showPop);
 const dispatch=useDispatch()
 const [clicked, setClicked] = useState(false);
const update=()=>{
  if(val===0){
  setShow(true);
  dispatch({type:"GetPOP",payload:1})

  }
 

  

}
useEffect(()=>{
  if(val===1){
    setClicked(true);
  }
  else{
    setClicked(false);
  }
},[val])

const mode=useSelector((state)=>state.mode);
  return (
    <>
    {show && <Pop   name={name}
            likes={likes}
            tag={tag}
            img={img}
            url={url }
            setShow={setShow}
            setClicked={setClicked}
 />}
    <Card className={`singleCardContainer${clicked ? 'Click' : ''}`}   style={mode ?  { backgroundColor: "white", color: "black"  }:{ backgroundColor: "black", color: "white"  }}  onClick={update}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
       
      <div class="bar" >
        <div class="left">
        <Col xs={1} md={20}>
          <Image src={img} roundedCircle  />
        </Col>
            <div className='innerLeft'>
              <p>{name}</p>
              <p style={{color:"gray"}}>@{tag}</p>
            </div>
        </div>
        
        <div class="right" >
        <AiOutlineLike />
        <p>{likes >= 1000 ? `${(likes / 1000).toFixed(1)}k` : likes}</p> 
        </div>
      </div> 
      </Card.Body>
    </Card>
    </>

  );
}

export default memo(SingleCard);

