// components/blog/EditBlog.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import TextField from '@mui/material/TextField';
import {useTheme,useMediaQuery} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Container,Grid,CardHeader } from '@mui/material';
import ReactQuill  from 'react-quill';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { editBlog } from '../../Action/blogAction';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
const EditBlog = () => {
  const theme = useTheme();
  const notify = (msg) => toast(msg);
  const dispatch = useDispatch();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const style2 ={
    padding: '7px 20px',
    fontSize: '18px',
    width:fullScreen?'100%':"100%",
    height: '50px',
    mt:2
  }
  const token = localStorage.getItem('token');
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });
  const [value, setValue] = useState('');
const [title,setTitle] = useState('')

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const res = await api.get(`/blog/${id}`,{
          headers: { 'Authorization': token }
      });
       setTitle(res.data.blog.title)
       setValue(res.data.blog.content);
      } catch (error) {
        console.error(error.response?.data.message);
      }
    };
    fetchBlogPost();
  }, [id]);

  const EditBlog = () => {
    const updatedData ={ title, content:value }
    dispatch(editBlog(id,updatedData,notify))
    navigate('/')
  };

  

  return (
    <div>
    <ToastContainer/>
       <Container component="main" maxWidth="sm">
       
       <Container maxWidth="lg">
          <Grid container spacing={2}>
         <Card sx={{ maxWidth: 345, margin: 2 }}>
         <CardHeader title="Updata Blog" sx={{ textAlign: 'center', color: 'primary.main' }}/>
         <CardContent>
     
      <TextField
       
        value={title}
        label="Title"
        sx={{ mb: 2 }}
        fullWidth
         name='title'
        onChange={(e)=>setTitle(e.target.value)}
      />
       <ReactQuill theme="snow" value={value} onChange={setValue} />
      <Button fullwidth sx={style2} variant="contained" color="primary"  onClick={()=>EditBlog(id)}>Update Blog</Button>
   
      </CardContent>
       </Card>
      </Grid>
      </Container>
       </Container>
    </div>
  );
};

export default EditBlog;
