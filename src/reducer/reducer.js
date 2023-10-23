const intialize ={
  data:[],
  mode:true,
  showPop:0,
  backblur:false,

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

    default :
    return state;
  }
}