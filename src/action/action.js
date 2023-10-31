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


// search the action/action.js file

export const searchUpdateData = (searchVal) => async (dispatch) => {
  try {
    if (searchVal.trim() !== "") {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchVal}&page=1&per_page=10&client_id=${key}`
      );

      dispatch({ type: 'SEARCH_DATA_SUCCESS', payload: { result: response.data.results, total: response.data.total_pages } });

    }
    else {
      dispatch(getData());
    }
  } catch (error) {
    console.log(error);
  }
}

// more Data
export const moreData = (searchVal, page) => async (dispatch) => {
  try {
    if (searchVal.trim()) {

      const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchVal}&page=${page}&per_page=10&client_id=${key}`);

      dispatch({ type: 'SET_MORE_DATA', payload: response.data.results })
    }
    else {
     console.log(page)
      const response = await axios.get(`https://api.unsplash.com/photos/?page=${page}&client_id=${key}`);
      console.log(response.data);
      dispatch({ type: 'SET_MORE_DATA', payload: response.data })

    }
  }
  catch (error) {
    console.log(error)
  }
}

