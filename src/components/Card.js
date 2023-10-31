import React, { useEffect } from 'react';
import SingleCard from './SingleCard';
import { getData, moreData } from '../action/action';
import { useDispatch, useSelector } from 'react-redux';

import '../css/card.css';
import Load from './Load';



function Card() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const page = useSelector((state) => state.page);
  const searchArg = useSelector((state) => state.searchVal);
  const total = useSelector((state) => state.total_page);
  useEffect(() => {
    dispatch(getData(""));
  }, [dispatch]);

  useEffect(() => {

  }, [data])


  const moreDataResult = () => {

    if (page <= total) {
      console.log(searchArg);
      dispatch(moreData(searchArg, page))
    }
    else {

      alert("No More Data")
    }
  }


  if (data) {
    return (
      <>

        <div className='container-no-margin m-auto card-conatiner text-center'  >
          {
            data.map((ele, index) => {
              return (
                <div className='cardx' key={ele.id + index}>
                  <SingleCard
                    name={ele?.user?.name.trim()}
                    likes={ele?.likes}
                    social={ele?.user?.social}
                    img={ele?.user?.profile_image?.small}
                    url={ele?.urls}
                    downloadUrl={ele?.urls?.full}
                  />
                </div>
              )
            })
          }

        </div>
        <button className='btnStyle cardBtn' onClick={moreDataResult}>Load More</button>
      </>

    );
  }
  else {
    return (
      <>
        <Load />
      </>
    )
  }
}

export default Card;