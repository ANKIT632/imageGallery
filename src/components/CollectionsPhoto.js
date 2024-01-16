/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState} from 'react';
import {getCollectionPhotos,IntializeCollectionPhotos} from '../action/action'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'; 
import SingleCard from './SingleCard';
import InfiniteScroll from 'react-infinite-scroll-component'
import loader from '../gif/loader.gif'


function CollectionsPhoto() {
 const dispatch=useDispatch();
 const data=useSelector((state)=>state.collectionPhoto);
const {id,totalPhotos}=useParams();


const [page, setpage] = useState(1);

  useEffect(()=>{
     dispatch(IntializeCollectionPhotos(id));

  },[])

  
  useEffect(() => {
    dispatch(getCollectionPhotos(page,id));
}, [page]);


  return (
    

<InfiniteScroll
        dataLength={data.length} // Use the actual length of data (here add current data length)
        next={() => setpage(page + 1)}
        hasMore={page*10 <= totalPhotos}
        loader={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
          <img style={{height:"3rem"}} src={loader} alt='loading...' />
        </div>}
        endMessage={
          <p style={{ textAlign: 'center',color:"skyblue" }}>
            <b>You have seen it all</b>
          </p>
        }
      >
  
      <div className='container-no-margin m-auto card-conatiner text-center'  >
          {
            data.map((ele, index) => {
              return (
                <div className='cardx' key={ele.id + index}> 
                  <SingleCard
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
          </InfiniteScroll>
      
  )
}

export default CollectionsPhoto;