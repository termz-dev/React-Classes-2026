import { useGetSingleBlog } from "./useGetSingleBlog";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useUpdateBlog = () => {

    const { singleBlog } = useGetSingleBlog();
    const navigate = useNavigate();

    const [blogData, setBlogData] = useState({
        title: '',
        slug: '',
        description: '',
        content: '',
        author: '',
        category: '',
        coverImage: '',
        tags: ''
    })
    console.log(singleBlog, 'singleBlog')

    useEffect(()=>{

        if(singleBlog){
            setBlogData({
                title: singleBlog.title,
                slug: singleBlog.slug,
                description: singleBlog.description,
                content: singleBlog.content
            })
        }

    }, [singleBlog])




    async function handleSubmit(e){
        e.preventDefault(); 

        try {
            const res = await axios.patch(`http://localhost:3000/api/v1/blogs/${singleBlog._id}`, blogData);
            alert('Blog updated successfully!')
            navigate('/blogs/' + singleBlog._id);
            console.log(res)                                
        } catch (error) {
            console.log(error)
        }
    }

    return{
        blogData,
        setBlogData,
        handleSubmit
    }
}
