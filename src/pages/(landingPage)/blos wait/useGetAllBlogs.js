
import axios from "axios";
import React, { useEffect, useState } from "react";


export const useGetAllBlogs = ()=>{
     const [blogs, setBlogs] = useState([]);
     const [loading, setloading] = useState(false);

  async function getAllBlogs() {
    setloading(true)
    try {
      const res = await axios.get("http://localhost:3000/api/v1/blogs");
      setBlogs(res.data.blogs);
    } catch (error) {
      console.log(error);
    }finally{
        setloading(false)
    }
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  return{
    blogs,
    loading
  }
}