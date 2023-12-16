import React, { useEffect, useState, useRef } from 'react';
import SingleCollectionCard from '../components/SingleCollectionCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCollectionData } from '../action/action'
import '../css/collection.css';
import InfiniteScroll from 'react-infinite-scroll-component'
import loader from '../gif/loader.gif'


export default function Collection() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const collectionData = useSelector((state) => state.collectionData);
  const total_page = useSelector((state) => state.total_page);

  const [page, setpage] = useState(1);

  const handleRedirect = () => {
    navigate('/');
  }
 

  useEffect(() => {
    dispatch({ type: "IntializeCollection", payload: [] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isMounted = useRef(false);
  useEffect(() => {
   
    if (isMounted.current) {
      dispatch(getCollectionData(page));
    } else {
      isMounted.current = true;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);



  return (
    <div className='Collection'>
      {console.log("callfun", page)}
      {console.log("callfunData", collectionData)}
      <div className='TitleCollectionsContainer'>
        <h4>Gallery Collections</h4>
        <p>Explore Daily new collections..</p>
      </div>

      <InfiniteScroll
        dataLength={collectionData.length} // Use the actual length of data (here add current data length)
        next={() => setpage(page + 1)}
        hasMore={page <= total_page}
        loader={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
          <img src={loader} alt='loading...' />
        </div>}
        scrollableTarget="Collection"
        endMessage={
          <p style={{ textAlign: 'center',color:"skyblue" }}>
            <b>You have seen it all</b>
          </p>
        }
      >

        <div className='CollectionsContainer'>

          {collectionData.map((data, idx) => {

            return (<SingleCollectionCard
              userName={data.user?.name}
              title={data.title}
              TotalPhotot={data.total_photos}
              tag={data.tags}
              PreViewPhoto={data.preview_photos}
              key={idx} />);
          })

          }

        </div>

      </InfiniteScroll>
      <button className="btnStyle" onClick={handleRedirect}>Go To Home</button>
    </div>
  )
}
