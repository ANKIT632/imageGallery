
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { AiOutlineLike } from 'react-icons/ai';
import '../css/singleCard.css';
import { useSelector } from 'react-redux';
import { memo} from 'react';
// import Pop from './Pop';
// import { useDispatch } from 'react-redux';
import  downloadIcon from '../image/downloadIcon.png'

function SingleCard(props) {
  const {
    name,
    likes,
    social,
    img,
    url,
    downloadUrl,

  } = props;


  // const blur = useSelector((state) => state.showPop);
  // const dispatch=useDispatch();

  // const [show,setShow]=useState(false)
  // const update = () => {
  //     setShow(true); 
  //     dispatch({type:'GetPOP',payload:true});

  //   }

  

  const mode = useSelector((state) => state.mode);

  // image download function
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

  return (
    <>
      {/* {show && <Pop
        name={name}
        likes={likes}
        social={social} 
        img={img}
        url={url}
        setShow={setShow}
        downloadUrl={downloadUrl}

      />} */}

      <Card className="singleCardContainer" style={mode ? { backgroundColor: "white", color: "black" } : { backgroundColor: "black", color: "white" }} >
        <Card.Img variant="top" src={url?.small} />
        <img id='downloadBtnStyle' src={downloadIcon} alt='download'  onClick={handleDownloadClick} />
        <Card.Body>

          <div className="bar" >
            <div className="left">
              <Col xs={1} md={20}>
                <Image src={img} roundedCircle className='ProfileSize' />
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

