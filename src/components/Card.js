import React, { useEffect ,useState} from 'react';
import SingleCard from './SingleCard';
import { getData, moreData } from '../action/action';
import { useDispatch, useSelector } from 'react-redux';
import '../css/card.css';
import Load from './Load';
import NotAvilableImage from '../image/no-image.png'



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
    
  }, [dispatch]);




  const moreDataResult = () => {

    if (page <= total) {
      console.log(searchArg);
      dispatch(moreData(searchArg, page))
    }
    else {
     setShow(false);
     
    }
  }


  if (isLoading) {

  
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
                    img={ele?.user?.profile_image?.large}
                    url={ele?.urls}
                    downloadUrl={ele?.urls?.full}
                  />
                </div>
              )
            })
          }

        </div>
       
        { data.length ? <button className={show?'btnStyle cardBtn':"cardBtn"} disabled={!show} onClick={moreDataResult} >{show ?"Load More":"No more"}</button> :<div className='ImageNotAvilableContainer'><img className="ImageNotAvilable" src={NotAvilableImage} alt="Not avilable Img"/></div>}
            
     
        
        
      </>

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