// components/auth/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {Card,CardHeader} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Action/authAction";
import { ToastContainer, toast } from "react-toastify";
import { useTheme, useMediaQuery } from "@mui/material";
import { LogiBtnStyle } from "../../utils/utils";
const Register = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const style2 = {
    width: fullScreen ? "100%" : "70%",
    alignItems: "center",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const notify = (msg) => toast(msg);
  const dispatch = useDispatch();
  const { name, email, password } = formData;

  const handleChangeForm = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      notify: notify,
      setFormData: setFormData,
      navigate: navigate,
    };

    dispatch(registerUser(formData, data));
  };

  return (
    <>
      <ToastContainer />
      <Container component="main" maxWidth="sm">
        <Box>
          <Card
            sx={style2}
            variant="outlined"
          >
            <CardHeader title="Sign Up" sx={{ textAlign: 'center', color: 'primary.main' }}/>
            <CardContent>
              <TextField
                id="outlined-controlled"
                label="Name"
                value={name}
                sx={{ mb: 2 }}
                name="name"
                fullWidth
                onChange={handleChangeForm}
              />
              <TextField
                id="outlined-controlled"
                label="Email"
                value={email}
                sx={{ mb: 2 }}
                fullWidth
                name="email"
                onChange={handleChangeForm}
              />
              <TextField
                id="outlined-controlled"
                label="Password"
                sx={{ mb: 2 }}
                name="password"
                value={password}
                fullWidth
                onChange={handleChangeForm}
              />
              <Button
                fullwidth
                sx={LogiBtnStyle}
                variant="contained"
                color="primary"
                onClick={onSubmit}
              >
                SignUp
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Register;
