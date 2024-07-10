


import { Navigate } from 'react-router-dom';
import  isAuthenticated from './auth'; // Implement your authentication check function

const PrivateRoute = ({ element: Element, ...rest }) => {
  console.log(isAuthenticated)
  if(!isAuthenticated()){
    return <Navigate to="/login" />
  }else{
    return <Element {...rest} /> 
  }
  // return isAuthenticated ? : <Navigate to="/login" />;

};

export default PrivateRoute;
