const intialize ={
  data:[],
  mode:true,
  showPop:0,
  backblur:false,
  searchVal:"",
  totaldata:0 
}
export default function reducer(state=intialize,action){
  switch(action.type){
   case 'FETCH_DATA_SUCCESS':
    return{
      ...state, 
      data:action.payload,
    }; 

    case 'SEARCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };

    case 'TOGGLE_MODE':
      return{
        ...state,
        mode:action.payload
      }

    case 'GetPOP':
      return{
        ...state,
        showPop:action.payload,
      }
      
    case 'setSearchVal':
      return{
        ...state,
        searchVal:action.payload,
      }  

      case 'SET_MORE_DATA':
        return{
          data:[...new Set([...state.data,...action.payload])],
          ...state
        }

    default :
    return state;
  }
}