import api from '../services/api'
const token = localStorage.getItem('token')
export const deleteBlog =(id,notify)=>{
    return async (dispatch) => {
        try {
          // Simulate API call
          const response = await api.delete(`/blog/${id}`,{
            headers: { 'Authorization': token }
        })
        console.log(response)
          if (response) {
            dispatch({
              type: 'DELETE_BLOG',
              payload: response.data,
            });
            notify(response.data.message)
          } else {
            dispatch({
              type: 'DELETE_BLOG_FAILURE',
              payload: response.error,
            });
          }
        } catch (error) {
          dispatch({
            type: 'DELETE_BLOG_FAILURE',
            payload: error,
          });
          notify(error?.response?.data?.message)
        }
      };
  }
 
