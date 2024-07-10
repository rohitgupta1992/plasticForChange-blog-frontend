import api from '../services/api'
export const loginUser = (credentials,data) => {
  return async (dispatch) => {
    try {
      // Simulate API call
      const response = await api.post('/login',credentials);
console.log(response)
      if (response) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data,
        });
        localStorage.setItem('token',response.data.token)
        data.notify(response.data.message)
        data.navigate('/')
      } else {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: response.error,
        });
      }
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error,
      });
      data.notify(error?.response?.data?.message)
    }
  };
};

export const registerUser = (userData,data) => {
  return async (dispatch) => {
    try {
      // Simulate API call
      const response = await api.post('/register',userData)
console.log(response)
      if (response) {
        dispatch({
          type: 'REGISTER_SUCCESS',
          payload: response.data.message,
        });
        data.notify(response.data.message)
        data.setFormData({
          name: '',
          email: '',
          password: '',
        })
dispatch({ type: 'REGISTER_AFTER',
  payload: error})
        
      } else {
        dispatch({
          type: 'REGISTER_FAILURE',
          payload: error,
        });
      }

    } catch (error) {
      dispatch({
        type: 'REGISTER_FAILURE',
        payload: error?.response?.data.message,
      });
      data.notify(error?.response?.data.message)
    }};
  }
