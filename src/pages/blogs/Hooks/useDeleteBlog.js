import axios from "axios";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../Api/Instance";

export const useDeleteBlog = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const {id} = useParams()
    const navigate = useNavigate();

    
    async function deleteBlog() {
        const confirmDelete = window.confirm('Are you sure you want to delete this blog?')
        if(!confirmDelete) return
            setIsDeleting(true);

        try {
            
            const res = await axiosInstance.delete(`/blogs/${id}`);
            console.log("Delete response:", res.data);
            alert("Blog deleted successfully");
            navigate('/blogs');
        } catch (error) {
            console.log(error);
            
        }finally{
            setIsDeleting(false)
        }
        
    }
   return{
    isDeleting, deleteBlog
   }

}