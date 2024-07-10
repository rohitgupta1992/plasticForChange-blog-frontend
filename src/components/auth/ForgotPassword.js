
import React, { useState } from 'react';
import api from '../../services/api';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useTheme, useMediaQuery } from "@mui/material";

const ForgotPassword = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const notify = (msg) => toast(msg);
  const handleChange = e => setEmail(e.target.value);
  const style2 = {
    width: fullScreen ? "90%" : "35%",
    alignItems: "center",
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/forgot/password', { email });
      setMessage(res.data.message);
      notify(res.data.message)
    } catch (error) {
      console.error(error?.response?.data.message);
      notify(error?.response?.data.message)
    }
  };

  return (
    <>
    <ToastContainer />
    {message && <p>{message}</p>}
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Card sx={style2}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Forgot Password
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Enter your email address below and we'll send you a link to reset your password.
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              variant="outlined"
              value={email}
              onChange={handleChange}
            />
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              sx={{ mt: 2 }}
              onClick={handleSubmit}
            >
              Send Reset Link
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
    </>
    // <div>
    //   <h2>Forgot Password</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input type="email" placeholder="Enter your email" value={email} onChange={handleChange} required />
    //     <button type="submit">Submit</button>
    //   </form>
    //   {message && <p>{message}</p>}
    // </div>
  );
};

export default ForgotPassword;
