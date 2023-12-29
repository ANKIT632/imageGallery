/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import SingleCollectionCard from '../components/SingleCollectionCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCollectionData, IntializeCollectionData } from '../action/action'
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
    dispatch(IntializeCollectionData());
  }, [])

  useEffect(() => {
    dispatch(getCollectionData(page));
  }, [page]);



  return (
    <div className='Collection'>

      <div className='TitleCollectionsContainer'>
        <h4>Gallery Collections</h4>
        <p>Explore Daily new collections</p>
      </div>

      <InfiniteScroll
        dataLength={collectionData.length} // Use the actual length of data (here add current data length)
        next={() => setpage(page + 1)}
        hasMore={page <= total_page}
        loader={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
          <img src={loader} alt='loading...' />
        </div>}
        endMessage={
          <p style={{ textAlign: 'center', color: "skyblue" }}>
            <b>You have seen it all</b>
          </p>
        }
      >

        <div className='CollectionsContainer'>

          {collectionData.map((data, idx) => {

            return (<SingleCollectionCard
              userName={data.user?.name}
              title={data.title}
              TotalPhoto={data.total_photos}
              tag={data.tags}
              PreViewPhoto={data.preview_photos}
              id={data.id}
              key={idx} />

            );
          })

          }

        </div>

      </InfiniteScroll>
      <button className="btnStyle" onClick={handleRedirect}>Go To Home</button>
    </div>
  )
}
