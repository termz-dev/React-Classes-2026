import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useGetSingleBlog = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);

    async function getSingleBlog(id) {
      setloading(true)

      try {
        const res = await axios.get(`http://localhost:3000/api/v1/blogs/${id}`);
       console.log(res.data,)
        setBlog(res.data);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }finally{
          setloading(false)
      }
    }
    const id = useParams().id;
    useEffect(() => {
    
      getSingleBlog(id);
    }, [id]);
  
    return{
      blog,
      loading,
      error,
      getSingleBlog
    }
}