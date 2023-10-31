const intialize ={
  data:[],
  mode:true,
  backblur:false,
  searchVal:"",
  total_page:5,
  page:2
   
}
export default function reducer(state=intialize,action){
  switch(action.type){
   case 'FETCH_DATA_SUCCESS':
    return{
      ...state, 
      data:action.payload,
      page:2,
      total_page:5
      
    }; 

    case 'SEARCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload.result,
        page:2,
        total_page:action.payload.total,
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
          ...state,
          data:[...state.data,...action.payload],
        
          page:state.page+1,
        }

    default :
    return state;
  }
}