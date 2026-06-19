import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Api/Instance";
import { useDebounce } from "../../../useDebounce";


export const useGetAllBlogs = ()=>{
     const [blogs, setBlogs] = useState([]);
     const [loading, setloading] = useState(false);
     const [query, setQuery] = useState('');
     const debouncedQuery = useDebounce(query, 500)

  async function getAllBlogs(searchTerm) {
    setloading(true);
    try {
      const res = await axiosInstance.get(`/blogs?search=${encodeURIComponent(searchTerm)}`);
      console.log(res.data);
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }

  function handleQuery(e){
    const inpvalue = e.target.value;
    setQuery(inpvalue);
  }

  useEffect(() => {
    getAllBlogs(debouncedQuery);
  }, [debouncedQuery]);

  return {
    blogs,
    loading,
    handleQuery,
    query
  }
}