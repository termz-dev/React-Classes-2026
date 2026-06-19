import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Api/Instance";

export const useGetSingleBlog = () => {
    const id = useParams().id;

    const [blog, setBlog] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);


    async function getSingleBlog() {
      setloading(true)

      try {
        const res = await axiosInstance.get(`/blogs/${id}`);
       console.log(res.data,)
        setBlog(res.data.blog);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }finally{
          setloading(false)
      }
    }
    useEffect(() => {
      getSingleBlog();
    }, [id]);
  
    return{
      blog,
      loading,
      error,
      getSingleBlog
    }
}