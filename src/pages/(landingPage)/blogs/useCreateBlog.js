import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCreateBlog = () =>{
     const router = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    coverImage: "",
    isPublished: false,
  });


  const [loading, setLoading] = useState(false)
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true)

    const payload = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/blogs",
        payload,
      );

      console.log("Blog created:", res.data);
      alert('Blog Created Succesfully')
      router('/blogs')
    } catch (error) {
      console.error(
        "Error creating blog:",
        error
      );
    }finally{
        setLoading(false)
    }

    // try {
    // const res = await fetch("http://localhost:3000/api/v1/blogs", {
    //     method: "POST",
    //     headers: {
    //     "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(payload)
    // });

    // if (!res.ok) {
    //     const errorData = await res.json();
    //     throw new Error(errorData.message || "Failed to create blog");
    // }

    // const data = await res.json();
    // console.log("Blog created:", data);

    // } catch (error) {
    // console.error("Error creating blog:", error.message);
    // }
  }

  return{
    loading,
    formData,
    handleChange,
    handleSubmit

  }
}