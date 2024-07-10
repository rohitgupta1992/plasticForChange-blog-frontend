const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: action.payload,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        user: action.payload,
        error: action.payload,
      };
      case 'REGISTER_AFTER':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          error: null,
        };
    default:
      return state;
  }
};

export default authReducer;