import { GET_BLOG , GET_SINGLE_BLOG, GET_COMMENT} from "../actions/action";

const initialState = {
  blog: [],
  singleBlog: [],
  commment: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    
      case GET_BLOG:
      return {
        ...state,
        blog: action.payload,
      };

      case GET_SINGLE_BLOG:
      return {
        ...state,
        singleBlog: action.payload,
      };

      case GET_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };

    default:
      return state;
  }
};

export default blogReducer;
