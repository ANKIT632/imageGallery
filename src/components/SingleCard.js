
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { AiOutlineLike } from 'react-icons/ai';
import '../css/singleCard.css';
import { useSelector } from 'react-redux';
import { memo, useState} from 'react';
import Pop from './Pop';
import { useDispatch } from 'react-redux';

function SingleCard(props) {
  const {
    name,
    likes,
    social,
    img,
    url,
    downloadUrl,

  } = props;


  const blur = useSelector((state) => state.showPop);
  const dispatch=useDispatch();

  const [show,setShow]=useState(false)
  const update = () => {
      setShow(true); 
      dispatch({type:'GetPOP',payload:true});

    }

  

  const mode = useSelector((state) => state.mode);
  return (
    <>
      {show && <Pop
        name={name}
        likes={likes}
        social={social}
        img={img}
        url={url}
        setShow={setShow}
        downloadUrl={downloadUrl}

      />}
      <Card className={`singleCardContainer${blur ? 'Click' : ''}`} style={mode ? { backgroundColor: "white", color: "black" } : { backgroundColor: "black", color: "white" }} onClick={update}>
        <Card.Img variant="top" src={url?.small} />
        <Card.Body>

          <div className="bar" >
            <div className="left">
              <Col xs={1} md={20}>
                <Image src={img} roundedCircle />
              </Col>
              <div className='innerLeft'>
                <p className='cardName'>{name}</p>
                <p className='NameHandler' style={{ color: "gray" }}>{social?.instagram_username && "@" + social?.instagram_username}</p>
              </div>
            </div>

            <div className="right" >
              <AiOutlineLike />
              <p className='likeP'>{likes >= 1000 ? `${(likes / 1000).toFixed(1)}k` : likes}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>

  );
}

export default memo(SingleCard);

