import React, { useEffect, useState } from "react";
import api from "../../services/api";
import BlogModal from "../blogModal";
import CardContent from "@mui/material/CardContent";
import {
  Typography,
  Grid,
  Container,
  Box,
  Card,
  Button,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllBlogs } from "../../Action/blogAction";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog } from "../../Action/deleteBlog";
import { ToastContainer, toast } from "react-toastify";

const BlogList = () => {
  const token = localStorage.getItem("token");
  const state = useSelector((state) => state.BlogReducer);
  const notify = (msg) => toast(msg);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
// call on open Update
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [open]);
  // call for page Enter
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  const deleteBlogs = async (id) => {
    dispatch(deleteBlog(id, notify));
    dispatch(getAllBlogs());
  };
  const EditBlog = async (id) => {
    navigate(`/edit-blog/${id}`);
  };

  return (
    <div>
      <ToastContainer />
      <BlogModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Button onClick={handleOpen}>Create Blog</Button>
      <h2
        style={{
          diaplay: "flex",
          textAlign: "center",
          width: "100%",
          color: "blue",
        }}
      >
        {" "}
        Blogs List
      </h2>
      <Box sx={{ mt: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {state?.blogs?.map((blog) => (
              <Card sx={{ maxWidth: 345, margin: 2 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography>
                    <img src={blog.img} />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  ></Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => EditBlog(blog._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => deleteBlogs(blog._id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default BlogList;
