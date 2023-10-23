import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;

console.log(key);
export const getData = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/photos/?page=1&per_page=10&client_id=${key}`);
    // Dispatch an action with the data
  
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
   
  }
};


// Update the action/action.js file

export const searchUpdateDate = (val) => async (dispatch) => {
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

