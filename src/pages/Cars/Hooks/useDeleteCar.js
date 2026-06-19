import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../Api/Instance";


export const useDeleteCar = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const id = useParams().id;
    const navigate = useNavigate();

    async function deleteCar(){
        const confirmDelete = window.confirm("Are you sure you want to delete this car?");
        if(!confirmDelete) return;

        setIsDeleting(true);
        try {
            const res = await axiosInstance.delete(`/cars/${id}`);
            console.log("Delete response:", res.data);
            alert("Car deleted successfully");
            navigate('/cars');
        } catch (error) {
            console.log(error);
            
        }finally{
            setIsDeleting(false);
        }
    }
    return {deleteCar, isDeleting};
}