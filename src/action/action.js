import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;


export const getData = () => async (dispatch) => {
  try {
    dispatch({ type: 'CheckDataAvilability', payload: false });
    dispatch({ type: 'Loading', payload: false });
    const response = await axios.get(`https://api.unsplash.com/photos/?page=1&per_page=10&client_id=${key}`);
    // Dispatch an action with the data

    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });

    dispatch({ type: 'Loading', payload: true });

    if (response.data.length > 0) {

      dispatch({ type: 'CheckDataAvilability', payload: true });
    }

  } catch (error) {
    console.error(error);

  }
};


// search the action/action.js file 

export const searchUpdateData = (searchVal) => async (dispatch) => {
  try {
    dispatch({ type: 'CheckDataAvilability', payload: false });
    dispatch({ type: 'Loading', payload: false });
    if (searchVal.trim() !== "") {

      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchVal}&page=1&per_page=10&client_id=${key}`
      );

      dispatch({ type: 'SEARCH_DATA_SUCCESS', payload: { result: response.data.results, total: response.data.total_pages } });
      dispatch({ type: 'Loading', payload: true });

      if (response.data.results.length > 0) {
        dispatch({ type: 'CheckDataAvilability', payload: true });
      }

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

      dispatch({ type: 'SET_MORE_DATA', payload: response.data.results });

    }
    else {

      const response = await axios.get(`https://api.unsplash.com/photos/?page=${page}&client_id=${key}`);

      dispatch({ type: 'SET_MORE_DATA', payload: response.data });


    }
  }
  catch (error) {
    console.log(error)
  }
}

// intialize collection

export const IntializeCollectionData = () => async (dispatch) => {

  dispatch({ type: 'CheckDataAvilability', payload: false });
  try {
    const collections = await axios.get(`https://api.unsplash.com/collections?page=1&per_page=10&client_id=${key}`)

    dispatch({ type: "IntializeCollection", payload: collections.data });

    dispatch({ type: 'CheckDataAvilability', payload: true });

  }
  catch (error) {
    console.log(error);
  }
}


// get collection data

export const getCollectionData = (page) => async (dispatch) => {

  if (page >= 2) {
    try {
      const collections = await axios.get(`https://api.unsplash.com/collections?page=${page}&per_page=10&client_id=${key}`)
      dispatch({ type: "GetCollectionData", payload: collections.data });

    }
    catch (error) {
      console.log(error);
    }
  }
}

// intialize collection

export const IntializeCollectionPhotos = (id) => async (dispatch) => {


  dispatch({ type: 'CheckDataAvilability', payload: false });
  try {
    const collections = await axios.get(`https://api.unsplash.com/collections/${id}/photos?page=1&per_page=10&client_id=${key}`)


    dispatch({ type: "IntializeCollectionPhotos", payload: { photos: collections.data } });

    dispatch({ type: 'CheckDataAvilability', payload: true });

  }
  catch (error) {
    console.log(error);
  }
}



export const getCollectionPhotos = (page, id) => async (dispatch) => {

  if (page >= 2) {
    try {
      const collections = await axios.get(`https://api.unsplash.com/collections/${id}/photos?page=${page}&per_page=10&client_id=${key}`)
      dispatch({ type: "GetCollectionPhotos", payload: collections.data });

    }
    catch (error) {
      console.log(error);
    }
  }
}


export const getAboutPhoto = () => async (dispatch) => {
  try {
    dispatch({ type: 'CheckDataAvilability', payload: false });
    const response = await axios.get(`https://api.unsplash.com/photos/?page=1&per_page=10&client_id=${key}`);


    dispatch({ type: 'SetAboutPhoto', payload: response.data });


    dispatch({ type: 'CheckDataAvilability', payload: true });


  } catch (error) {
    console.error(error);

  }
}
