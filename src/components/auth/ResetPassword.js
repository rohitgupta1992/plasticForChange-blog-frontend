// components/auth/ResetPassword.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useTheme, useMediaQuery } from "@mui/material";



const ResetPassword = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const fullScreen2 = useMediaQuery(theme.breakpoints.down("md"));
  const { token } = useParams();
  const notify = (msg) => toast(msg);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const style2 = {
    width: fullScreen ? "90%" : fullScreen2? '40%':'30%',
    alignItems: "center",
  };
  const { password, confirmPassword } = formData;

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.put(`/password/reset/${token}`, { password });
      notify(res.data.message)
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <>
    <ToastContainer />
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
          Reset Password
        </Typography>
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="New Password"
            type="password"
            fullWidth
            name='password'
            margin="normal"
            variant="outlined"
            value={password}
            onChange={handleChange}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            name='confirmPassword'
            margin="normal"
            variant="outlined"
            value={confirmPassword}
            onChange={handleChange}
          />
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ mt: 2 }}
            type="submit"
          >
            Reset Password
          </Button>
        </Box>
      </CardContent>
    </Card>
  </Box>
  </>
  );
};

export default ResetPassword;
