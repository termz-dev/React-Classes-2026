
import React, { useEffect, useState } from "react";
import { useDebounce } from "./useDebounced";
import axiosInstance from "../../../api/axiosInstance";


export const useGetAllBlogs = ()=>{
     const [blogs, setBlogs] = useState([]);
     const [loading, setloading] = useState(false);
    //  const [inpVal, setinpVal] = useState('')
     const [searchVal, setSearchVal] = useState("")
     const debouncedSearch = useDebounce(searchVal, 500)

  async function getAllBlogs() {
    setloading(true)
    try {
      const res = await axiosInstance.get(`/blogs?search=${debouncedSearch}`);
      setBlogs(res.data.blogs);
    } catch (error) {
      console.log(error);
    }finally{
        setloading(false)
    }
  }

  

  function handleSearchChange(e) {
    setSearchVal(e.target.value)
  }

  // function handleSearchClick(){
  //   setSearch(inpVal)
  // } 

  useEffect(() => {
    getAllBlogs(debouncedSearch);
  }, [debouncedSearch]);

  return{
    blogs,
    loading,
    handleSearchChange,
    searchVal
  }
}