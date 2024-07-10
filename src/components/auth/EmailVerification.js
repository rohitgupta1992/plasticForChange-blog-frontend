// components/auth/EmailVerification.js
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../../services/api';

const EmailVerification = () => {
  const { token } = useParams();
  console.log(token)
  const history = useNavigate();
  const [message, setMessage] = React.useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await api.get(`http://localhost:5000/api/users/verify-email/${token}`);
        setMessage(res.data.message);
      } catch (error) {
        console.error(error.response.data.message);
        setMessage(error.response.data.message);
      }
    };
    verifyEmail();
  }, [token, history]);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{message}</p>
      <Link to='/login'>Login</Link>
    </div>
  );
};

export default EmailVerification;
