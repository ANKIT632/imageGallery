import React, { useEffect, useState } from 'react';
import { getData, moreData, searchUpdateData } from '../action/action';
import { useDispatch, useSelector } from 'react-redux';
import '../css/card.css';
import Load from './Load';
import NotAvilableImage from '../image/no-image.png'
import Footer from "./Footer";

import SingleCard from './SingleCard';

function Card() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const page = useSelector((state) => state.page);
  const searchArg = useSelector((state) => state.searchVal);
  const total = useSelector((state) => state.total_page);
  const isLoading = useSelector((state) => state.isLoading);
  const [show, setShow] = useState(true);





  useEffect(() => {
    dispatch(getData(""));


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // true when pevious loadmore are disabled the true for next page.
  useEffect(() => {
    if (page <= total) {
      setShow(true);
    }
  }, [page, total])


  const moreDataResult = () => {

    if (page <= total) {
      dispatch(moreData(searchArg, page))
    }
    else {
      setShow(false);

    }
  }

  const HandleEmptyPageBtn = () => {

    dispatch(searchUpdateData(""));
    dispatch({ type: 'setSearchVal', payload: "" });

  }




  if (isLoading) {


    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: '0px', margin: '0px' }}>

        <div className='container-no-margin m-auto card-conatiner text-center'   >
          {
            data.map((ele, index) => {
              return (
               
                <div className='cardx' key={ele.id + index}>
              
                  <SingleCard
                    id={ele.id}
                    name={ele?.user?.name.trim()}
                    likes={ele?.likes}
                    social={ele?.user?.social}
                    img={ele?.user?.profile_image?.large}
                    url={ele?.urls}
                    downloadUrl={ele?.urls?.full}
                  />

    
                </div>
            
                
              )
            })
          }

        </div>

        {data.length ? <button className={show ? 'btnStyle cardBtn' : "cardBtn"} disabled={!show} onClick={moreDataResult} >{show ? "Load More" : "No more"}</button> : <div className='ImageNotAvilableContainer'><img className="ImageNotAvilable" src={NotAvilableImage} alt="Not avilable Img" />
          <button className='btnStyle' style={{ marginBottom: "10px" }} onClick={HandleEmptyPageBtn}>Go Back</button></div>}


        <Footer />

      </div>

    );
  }
  else {
    return (
      <div className='LoadingContainer'>
        <Load />
      </div>
    )
  }
}

export default Card;