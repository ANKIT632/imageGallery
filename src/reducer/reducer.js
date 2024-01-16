
const intialize = {
  data: [],
  mode: true,
  searchVal: "",
  total_page: 5,
  page: 2,
  showPop: false,
  isLoading: false,
  NavFlag: false,
  IsDataAvilable: false,
  collectionData: [],
  collectionPhoto: [],
  aboutPhoto: [],


}
export default function reducer(state = intialize, action) {
  switch (action.type) {
    case 'Loading': return {
      ...state,
      isLoading: action.payload,
    }

    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        page: 2,
        total_page: 10

      };

    case 'SEARCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload.result,
        page: 2,
        total_page: action.payload.total,
      };

    case 'TOGGLE_MODE':
      return {
        ...state,
        mode: action.payload
      }

    case 'GetPOP':
      return {
        ...state,
        showPop: action.payload,
      }

    case 'setSearchVal':
      return {
        ...state,
        searchVal: action.payload,
      }

    case 'SET_MORE_DATA':
      return {
        ...state,
        data: [...action.payload, ...state.data],

        page: state.page + 1,
      }

    case 'NAV_TOOGLE': {
      return {
        ...state,
        NavFlag: action.payload,
      }
    }

    case 'CheckDataAvilability': {
      return {
        ...state,
        IsDataAvilable: action.payload,
      }
    }

    case "IntializeCollection": {
      return {
        ...state,
        total_page: 12,
        collectionData: action.payload,

      }
    }

    case 'GetCollectionData': {
      return {
        ...state,
        collectionData: [...state.collectionData, ...action.payload],
      }
    }

    case 'IntializeCollectionPhotos': {
      return {
        ...state,
        collectionPhoto: action.payload.photos,
      }
    }

    case 'GetCollectionPhotos': {
      return {
        ...state,
        collectionPhoto: [...action.payload, ...state.collectionPhoto],
      }
    }

    case 'SetAboutPhoto': {
      const filterData = action.payload.map((item) => item.urls.small)

      return {
        ...state,
        aboutPhoto: filterData,
      }
    }
    default:
      return state;
  }
}