import { useNavigate } from "react-router-dom";
import { useGetSingleBlog } from "./useGetSingleBlog";
import { useState , useEffect} from "react";
import axios from "axios";
import axiosInstance from "../../../Api/Instance";

export const useEditBlog = () => {
  const { blog } = useGetSingleBlog();
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState({
    title: "",
    author: "", 
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    coverImage: ""
  });
    console.log(blog);
    useEffect(() => {
    if (blog) {
      setBlogData({
        title: blog.title,
        author: blog.author,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category,
        tags: blog.tags,
        coverImage: blog.coverImage
      });
    }
  }, [blog]);

   async function handleSubmit(e) {
    e.preventDefault();
    try {
        const res = await axiosInstance.patch(`/blogs/${blog._id}`, blogData);
        alert('Blog updated successfully');
        navigate('/blog/'+blog._id);
    } catch (error) {
        console.log(error)
    }
   }

      return { blogData, setBlogData , handleSubmit};
};
