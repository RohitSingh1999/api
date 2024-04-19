import { GET_COUNTRY, GET_WEBITORIAL , GET_INDIVIDUAL_WEBITORIAL, FETCH_WEBITORIAL, GET_COMMENTS} from "../actions/action";

const initialState = {
    country: [],
    webitorial: [],
    webitorials: [],
    commments: [],
  };


  const webitorialReducer = (state = initialState, action) => {
    switch (action.type) {

     case GET_COUNTRY:
        return {
         ...state,
         country: action.payload,
    };

    case GET_INDIVIDUAL_WEBITORIAL:
      return {
        ...state,
        webitorials:action.payload,
      }

     case GET_WEBITORIAL:
      return {
        ...state,
        webitorial: action.payload,
      };
      case FETCH_WEBITORIAL:
        return {
          ...state,
          webitorial: action.payload,
        };

      case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
     
      default:
        return state;
    }
  };
  
  export default webitorialReducer;
  