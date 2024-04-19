import { GET_GALLERY, GET_INDIVIDUAL_GALLERY } from "../actions/action";

const initialState = {
  gallery: [],
  singleGallery: [],
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    
      case GET_GALLERY:
      return {
        ...state,
        gallery: action.payload,
      };

      case GET_INDIVIDUAL_GALLERY:
        return {
          ...state,
          singleGallery: action.payload,
        };

    default:
      return state;
  }
};

export default galleryReducer;
