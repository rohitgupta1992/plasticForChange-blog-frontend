import api from '../services/api'
const token = localStorage.getItem('token')
export const createBlog = (blogData,notify,close,setTitle,setValue) => {
  return async (dispatch) => {
    try {
      // Simulate API call
      const response = await api.post('/create',blogData, {
        headers: { Authorization: token },
      });
      if (response) {
        dispatch({
          type: 'CREATE_BLOG',
          payload: response.data,
        });
        notify(response.data.message)
        close()
        setTitle()
        setValue()
      } else {
        dispatch({
          type: 'CREATE_FAILURE',
          payload: response.error,
        });
      }
    } catch (error) {
      dispatch({
        type: 'CREATE_FAILURE',
        payload: error,
      });
      notify(error?.response?.data?.message)
    }
  };
};
// UPDATE Blog Action Start

export const editBlog =(id,modifyData,notify)=>{
  return async (dispatch) => {
      try {
        // Simulate API call
        const response = await api.put(`/blog/${id}`,modifyData,{
          headers: { 'Authorization': token }
      })
      console.log(response)
        if (response) {
          dispatch({
            type: 'UPDATE_BLOG',
            payload: response.data,
          });
          notify(response.data.message)
        } else {
          dispatch({
            type: 'UPDATE_BLOG_FAILURE',
            payload: response.error,
          });
        }
      } catch (error) {
        dispatch({
          type: 'UPDATE_BLOG_FAILURE',
          payload: error,
        });
        notify(error?.response?.data?.message)
      }
    };
}


// GET All BLOG Action Start
  export const getAllBlogs =()=>{
    return async (dispatch) => {
        try {
          // Simulate API call
          const response = await api.get('/blogs', {
            headers: { Authorization: token },
          });
          if (response) {
            dispatch({
              type: 'GET_ALL_BLOG',
              payload: response.data,
            });
          } else {
            dispatch({
              type: 'GET_ALL_BLOG_FAILURE',
              payload: response.error,
            });
          }
        } catch (error) {
          dispatch({
            type: 'GET_ALL_BLOG_FAILURE',
            payload: error,
          });
        }
      };
  }
