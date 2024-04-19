import axios from 'axios';

export const GET_BLOG = 'GET_BLOG';
export const GET_COMMENT = 'GET_COMMENT';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_GALLERY = 'GET_GALLERY';
export const GET_SINGLE_BLOG = 'GET_SINGLE_BLOG';
export const GET_WEBITORIAL = 'GET_WEBITORIAL';
export const FETCH_WEBITORIAL = 'FETCH_WEBITORIAL';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_INDIVIDUAL_WEBITORIAL = 'GET_INDIVIDUAL_WEBITORIAL';
export const GET_INDIVIDUAL_GALLERY = 'GET_INDIVIDUAL_GALLERY';


  // =============================== Insert blog category of blog post ========================================//
  export const getBlog = () => async (dispatch) => {
    try {
      const sortedBlogs = await axios.get('https://worldmodelhunt.com/api/blog/fetchblog');
      dispatch({
        type: GET_BLOG,
        payload: sortedBlogs.data,
      });
      
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };


  export const getSingleBlog = (blogId) => async (dispatch) => {
    try {
      const singleBlog = await axios.get(`https://worldmodelhunt.com/api/blog/fetch_individual/${blogId}`);
      dispatch({
        type: GET_SINGLE_BLOG,
        payload: singleBlog.data,
      });
    } catch (error) {
      console.error('Error fetching single blog data:', error);
    }
  };

  export const getComment = (blogId) => async (dispatch) => {
    try {
      const comment = await axios.get(`https://worldmodelhunt.com/api/blog/fetchcomment/${blogId}`);
      dispatch({
        type: GET_COMMENT,
        payload: comment.data,
      });
    } catch (error) {
      console.error('Error fetching comment data:', error);
    }
  };
  
  // =========================================== END ===============================================//
  

  // =============================== webitorial post ========================================//
 export const getCountry = () => async (dispatch) => {
  try {
    const sortedBlogs = await axios.get('https://worldmodelhunt.com/api/webitorial/fetchcountry');
    dispatch({
      type: GET_COUNTRY,
      payload: sortedBlogs.data,
    });
    
  } catch (error) {
    console.error('Error fetching blog data:', error);
  }
};



export const getWebitorial = (webId) => async (dispatch) => {
  try {
    const webitorials = await axios.get(`https://worldmodelhunt.com/api/webitorial/fetchwebitorial/${webId}`);
    
    dispatch({
      type: GET_WEBITORIAL,
      payload: webitorials.data,
    });
  } catch (error) {
    console.error('Error fetching webitorials data:', error);
  }
};

 // =============================== fetch webitorial section ========================================//

export const fetchWebitorial = () => async (dispatch) => {
  try {
    const Allwebitorial = await axios.get(`https://worldmodelhunt.com/api/webitorial/allwebitorials`);
    
    dispatch({
      type: FETCH_WEBITORIAL,
      payload: Allwebitorial.data,
    });
  } catch (error) {
    console.error('Error fetching webitorials data:', error);
  }
};



 // =============================== fetch individual blog section ========================================//
 export const getIndividualWwbitorial = (WebitorialId) => async (dispatch) => {
  try {
    const webitorial = await axios.get(`https://worldmodelhunt.com/api/webitorial/webitorialIndividual/${WebitorialId}`);
    dispatch({
      type: GET_INDIVIDUAL_WEBITORIAL,
      payload: webitorial.data,
    });
//  console.log('Webitorial Data:', webitorial.data);
  } catch (error) {
    console.error('Error fetching blog data:', error);
  }
};

export const getComments = (WebitorialId) => async (dispatch) => {
  try {
    const comments = await axios.get(`https://worldmodelhunt.com/api/webitorial/fetchcomment/${WebitorialId}`);
    dispatch({
      type: GET_COMMENTS,
      payload: comments.data,
    });
  } catch (error) {
    console.error('Error fetching comment data:', error);
  }
};

// =========================================== END ===============================================//


  // =================================== Gallery Data =============================================//

  export const getGallery = () => async (dispatch) => {
    try {
      const gallery = await axios.get('https://worldmodelhunt.com/api/gallery/fetchgallery');
      dispatch({
        type: GET_GALLERY,
        payload: gallery.data,
      });
      
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };



  export const getIndividualGallery = (modelId) => async (dispatch) => {
    try {
      const singlegallery = await axios.get(`https://worldmodelhunt.com/api/gallery/GalleryIndividual/${modelId}`);
      dispatch({
        type: GET_INDIVIDUAL_GALLERY,
        payload: singlegallery.data,
      });
      // console.log('singlegallery Data:', singlegallery.data);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };
  

// =========================================== END ===============================================//
