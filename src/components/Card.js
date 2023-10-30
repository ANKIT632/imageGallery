import React, { useEffect} from 'react';
import SingleCard from './SingleCard';
import { getData } from '../action/action';
import { useDispatch, useSelector } from 'react-redux';

import '../css/card.css';
import Load from './Load';



 function Card() {
  
  const dispatch = useDispatch();
  const data=useSelector((state)=>state.data);

  
  useEffect(() => {
    dispatch(getData(""));
  },[dispatch]); 

  useEffect(()=>{
    
  },[data])
 

  if(data.length>0){
  return (
    <>
    
    <div className='container-no-margin m-auto card-conatiner text-center'  >
    {
        data.map((ele,index)=>{return(
            <div className='cardx' key={ele.id}> 
            <SingleCard 
            name={ele?.user?.name.trim()}
            likes={ele?.likes}
            social={ele?.user?.social}
            img={ele?.user?.profile_image?.small}
            url={ele?.urls }
            key={index}
            downloadUrl={ele?.urls?.full}
             />
            </div>
        )})
        }
    
    </div>
    <button className='btnStyle cardBtn'>Load More</button>
    </>
  
  );}
  else{
    return(
      <>
       <Load/>
      </>
    )
  }
}

export default Card;