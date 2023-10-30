import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;

console.log(key);
export const getData = (val) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/photos/?page=1&client_id=${key}`);
    // Dispatch an action with the data
  
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
   
  }
};


// search the action/action.js file

export const searchUpdateData = (val) => async (dispatch) => {
  try {
    if (val.trim() !== "") {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${val}&page=1&per_page=10&client_id=${key}`
      );
      dispatch({ type: 'SEARCH_DATA_SUCCESS', payload: response.data.results  });
      
    } 
    else {
      dispatch(getData());
    }
  } catch (error) {
    console.log(error);
  }
};

// more Data
export const moreData = (val) => async (dispatch) => {
  try{
    if(val){
         const response=await axios.get(`https://api.unsplash.com/search/photos?query=${val}&page=1&per_page=10&client_id=${key}`);
         dispatch({type:'SET_MORE_DATA',payload:response.data.results})
    }
    else{

    }
  }
  catch(error){
    console.log(error)
  }
}

