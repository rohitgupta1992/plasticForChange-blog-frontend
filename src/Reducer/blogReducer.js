const initialState = {};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BLOG':
      return {
        ...state,
        isLoggedIn: true,
        blog: action.payload,
        error: null,
      };
      case 'CREATE_FAILURE':
      return {
        ...state,
        isLoggedIn: true,
        error: action.payload,
      };
    case 'DELETE_BLOG':
      return {
        ...state,
        isLoggedIn: false,
        blog: null,
        error: action.payload,
      };
      case 'DELETE_BLOG_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        blog: null,
        error: action.payload,
      };
    case 'UPDATE_BLOG':
      return {
        ...state,
        isLoggedIn: true,
        blog: action.payload,
        error: null,
      };
      case 'UPDATE_BLOG_FAILURE':
      return {
        ...state,
        isLoggedIn: true,
        blog: action.payload,
        error: null,
      };
    case 'GET_ALL_BLOG':
      return {
        ...state,
        blogs:action.payload
      }
      case 'GET_ALL_BLOG_FAILURE':
      return {
        ...state,
        error:action.payload
      }

    default:
      return state;
  }
};

export default blogReducer;