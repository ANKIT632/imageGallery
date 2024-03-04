/* eslint-disable react-hooks/exhaustive-deps */

import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { AiOutlineLike } from 'react-icons/ai';
import '../css/singleCard.css';
import { useSelector } from 'react-redux';
import { memo, useEffect, useState } from 'react';
import star from '../icons/star.png';
import emptyStar from '../icons/starEmp.png'

import downloadIcon from '../image/downloadIcon.png'

function SingleCard(props) {
  const {
    id,
    name,
    likes,
    social,
    img,
    url,
    downloadUrl,

  } = props;


  let [mark, setMark] = useState(false);

  const mode = useSelector((state) => state.mode);

  // image download function
  const handleDownloadClick = () => {
    const imageUrl = downloadUrl;


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



  useEffect(() => {
    if (localStorage.getItem(id)) {
      setMark(true);
    }
  }, [])

  // add star
  const handlerAddFav = () => {
    const data = {
      id: id,
      name: name,
      likes: likes,
      social: social,
      img: img,
      url: url,
      downloadUrl: downloadUrl,
    };

    localStorage.setItem(id, JSON.stringify(data));
    setMark(true);

  }

  // remove fav

  const handlerRemoveFav = () => {
    localStorage.removeItem(id);
    props.localDataLength(localStorage.length);
    setMark(false);
  }


  return (
    <>

      <Card className="singleCardContainer" style={mode ? { backgroundColor: "white", color: "black" } : { backgroundColor: "black", color: "white" }} >
        <Card.Img variant="top" src={url?.small} />

        {mark ? <img className='favStar' src={star} alt='star' onClick={handlerRemoveFav} /> : <img className='favStar' src={emptyStar} alt='star' onClick={handlerAddFav} />}

        <img id='downloadBtnStyle' src={downloadIcon} alt='download' onClick={handleDownloadClick} />
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

