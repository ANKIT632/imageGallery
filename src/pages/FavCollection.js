import React from 'react'
import Banner from '../components/Banner';
import { useEffect, useState } from 'react';
const SingleCard=React.lazy(()=>import('../components/SingleCard'));

function FavImaList() {
  const [data, setData] = useState(null);
  const [localDataLen, setLoaclDataLen] = useState(0);


  const getLoaclStorageData = () => {
    let allData = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const value = JSON.parse(localStorage.getItem(key));
        allData.push(value);
      } catch (error) {
        console.error(`Error parsing ${key}:`, error);
      }
    }
    setData(allData);
  }


  useEffect(() => {

    getLoaclStorageData();

  }, [localDataLen]);




  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0px', padding: "0px" }}>
      <Banner title='Favourites' />


      <div className='container-no-margin m-auto card-conatiner text-center' style={{ margin: '0px', padding: "0px" }}>


        {


          data?.map((ele, index) => {

            return (

              <div className='cardx' key={ele.id + index}>

              <React.Suspense fallback={<div></div>}>
                <SingleCard

                  id={ele.id}
                  name={ele.name}
                  likes={ele?.likes}
                  social={ele.social}
                  img={ele.img}
                  url={ele?.url}
                  downloadUrl={ele?.downloadUrl}
                  localDataLength={setLoaclDataLen}
                />
                  </React.Suspense>
              </div>
            
          

            )
          })

        }
      </div>
    </div>
  )
}

export default FavImaList