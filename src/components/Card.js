import React, { useEffect} from 'react';
import SingleCard from './SingleCard';
import { getData } from '../action/action';
import { useDispatch, useSelector } from 'react-redux';

import '../css/card.css';


 function Card() {
  
  const dispatch = useDispatch();
  const data=useSelector((state)=>state.data);

  
  useEffect(() => {
    dispatch(getData());
  },[dispatch]); 

  useEffect(()=>{
  },[data])
 

  if(data.length>0){
  return (
    
    <div className='card-conatiner'  >
    {
        data.map((ele,index)=>{return(
            <section className='cardx' key={ele.id}> 
            <SingleCard 
            name={ele?.user?.name}
            likes={ele?.likes}
            social={ele?.user?.social}
            img={ele?.user?.profile_image?.small}
            url={ele?.urls }
            key={index}
            downloadUrl={ele?.urls?.full}
             />
            </section>
        )})
        }
    
    </div>
  );}
  else{
    return(
      <>
        { "loading...."}
      </>
    )
  }
}

export default Card;