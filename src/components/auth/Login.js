import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Button,
  Grid,
} from "@mui/material";
import { Container } from "@mui/material";
import { loginUser } from "../../Action/authAction";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useTheme, useMediaQuery } from "@mui/material";
import { LogiBtnStyle } from "../../utils/utils";

const Login = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  LogiBtnStyle.width = fullScreen? '100%':'100%'
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const style2 = {
    width: fullScreen ? "100%" : "70%",
    alignItems: "center",
  };
  const notify = (msg) => toast(msg);
  const dispatch = useDispatch();
  const { email, password } = formData;

  const handleChangeForm = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      navigate: navigate,
      notify: notify,
    };
    dispatch(loginUser(formData, data));
  };

  return (
    <>
      <ToastContainer />
      <Container component="main" maxWidth="sm">
        <Box>
          <Card sx={style2} variant="outlined">
            <CardHeader
              title="Sign In"
              sx={{ textAlign: "center", color: "primary.main" }}
            />
            <CardContent>
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
                Sign IN
              </Button>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Link to="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
                <Link to="/register" variant="body2">
                  Register
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Login;
