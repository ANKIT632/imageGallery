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
        data.map((ele)=>{return(
            <span className='cardx' key={ele.id}> 
            <SingleCard 
            name={ele.user.name ? ele.user.name:"Unknown"}
            likes={ele?.likes? ele.likes:0}
            tag={ele?.user?.social?.instagram_username?ele?.user?.social?.instagram_username:"none"}
            img={ele?.user?.profile_image?.small? ele?.user.profile_image?.small:""}
            url={ele?.urls?.small ?ele?.urls?.small:"" }


             />
            </span>
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