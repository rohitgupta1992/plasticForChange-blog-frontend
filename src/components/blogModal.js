import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import ReactQuill from "react-quill";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { TextField, useMediaQuery, useTheme, Typography} from "@mui/material";
import { createBlog } from "../Action/blogAction";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { style ,style2 } from "../utils/utils";

const BlogModal = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  style.width = fullScreen ? "90%" : "400";
  style2.width = fullScreen ? "100%" : "100%";
  const { open, handleOpen, handleClose } = props;
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const notify = (msg) => toast(msg);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userBlog =  {
      title: title, 
      content: value, 
    }
dispatch(createBlog(userBlog,notify,handleClose,setTitle,setValue));
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <ToastContainer />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        fullScreen={fullScreen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 , textAlign: 'center', color: 'primary.main'}}>
            Crete Blog
          </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-controlled"
                label="Title"
                value={title}
                sx={{ mb: 2 }}
                fullWidth
                name="title"
                onChange={handleChangeTitle}
              />
              <ReactQuill theme="snow" value={value} onChange={setValue} />
              <Button
                fullwidth
                sx={style2}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Create Blog
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BlogModal;
